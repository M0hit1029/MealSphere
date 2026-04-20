# MealSphere CI/CD to EC2

This guide deploys:
- Backend with PM2
- Frontend static build with Nginx

The workflow is in .github/workflows/ec2-cicd.yml and runs on push to main.

## 1) Add GitHub repository secrets

Go to GitHub repo -> Settings -> Secrets and variables -> Actions -> New repository secret.

Create these secrets:

- EC2_HOST: Public IP or DNS of EC2
- EC2_PORT: Usually 22
- EC2_USER: Usually ubuntu (Ubuntu AMI) or ec2-user (Amazon Linux)
- EC2_SSH_KEY: Full private key content for the EC2 key pair
- EC2_APP_DIR: Absolute deploy path on EC2, for example /home/ubuntu/MealSphere
- VITE_BASE_URL: Backend API base URL exposed via Nginx, for example http://13.50.99.244/api/v1
- BACKEND_ENV: Full backend .env content as multi-line value

Example BACKEND_ENV value:

MONGO_URI=your_mongodb_uri
USER_JWT_SECRET=your_user_jwt_secret
MESS_JWT_SECRET=your_mess_jwt_secret
API_KEY_UPDATE_ATTENDANCE=your_internal_job_api_key
PORT=3000
NODE_ENV=production

## 2) One-time EC2 setup

Run these commands once on EC2 (Ubuntu):

sudo apt update
sudo apt install -y nginx curl git rsync
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2

Create the frontend host directory:

sudo mkdir -p /var/www/mealsphere
sudo chown -R $USER:$USER /var/www/mealsphere

Create Nginx site config:

sudo tee /etc/nginx/sites-available/mealsphere >/dev/null <<'EOF'
server {
  listen 80;
  server_name _;

  root /var/www/mealsphere;
  index index.html;

  location / {
    try_files $uri /index.html;
  }

  # Reverse proxy for backend running only on internal port 3000
  # This matches your existing EC2 config and forwards /api/* to localhost:3000
  location /api/ {
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_pass http://127.0.0.1:3000;
  }
}
EOF

sudo ln -sf /etc/nginx/sites-available/mealsphere /etc/nginx/sites-enabled/mealsphere
sudo nginx -t
sudo systemctl restart nginx

Allow deploy user to reload Nginx without password:

echo "$USER ALL=(ALL) NOPASSWD:/bin/systemctl reload nginx,/usr/bin/rsync,/bin/mkdir" | sudo tee /etc/sudoers.d/mealsphere-deploy
sudo chmod 440 /etc/sudoers.d/mealsphere-deploy

## 3) Trigger deployment

Push to main branch.

The workflow will:
1. Install backend and frontend dependencies
2. Build frontend
3. SSH to EC2
4. Pull latest code
5. Write backend .env from BACKEND_ENV secret
6. Restart backend with PM2
7. Build frontend and sync dist to /var/www/mealsphere
8. Reload Nginx

## 4) Verify on EC2

Check backend process:

pm2 status
pm2 logs mealsphere-backend --lines 100

Check Nginx:

sudo systemctl status nginx

## 5) Important app note

Your backend CORS allowlist in backend/index.js is hardcoded. If your frontend domain changes, add it there and redeploy.

Current recommended values for your setup:

- Frontend URL: http://13.50.99.244
- Backend internal bind: 3000
- Frontend VITE_BASE_URL secret: http://13.50.99.244/api/v1

If you already have the Nginx block shown in your screenshot, you can keep it as-is.
It already forwards `/api/*` to the backend on port `3000`, which is compatible with
your frontend calls to `/api/v1/...`.
