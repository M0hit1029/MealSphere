# 🍽️ MealSphere

**MealSphere** is a full-stack dining platform that helps students discover and subscribe to local mess services within a 2km radius. Users can view menus, reserve meals, and purchase monthly subscriptions, while mess owners can manage visibility and meal scheduling. 

---

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT, Cookies, Bcrypt
- **Scheduling**: Node-Cron
- **File Uploads**: Multer

---

## 📦 Installation Guide

Follow these steps to run MealSphere locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/M0hit1029/MealSphere.git
   cd MealSphere
   ```

2. **Install dependencies** in both `frontend` and `backend` folders:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Setup Environment Variables**  
   In `/backend/.env`, add your MongoDB connection string:
   ```env
   MONGO_URI=your_mongo_cluster_link
   ```

4. **Start the backend server**
   ```bash
   node index.js
   ```

5. **Configure frontend environment**  
   In `/frontend/.env`, add:
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   ```

6. **Run the frontend**
   ```bash
   cd ../frontend
   npm run dev
   ```

---

## 🔗 Live Demo

- 🌐 [View Website](https://meal-sphere-psi.vercel.app)
- 💻 [GitHub Repository](https://github.com/M0hit1029/MealSphere)

---

## 📌 Features

- 🌍 Geo-based mess recommendations (within 2km)
- 🧾 View and manage menus
- 🔐 Secure login/signup using JWT & cookies
- 📅 Meal reservation and monthly plans
- 📤 Mess image uploads using Multer
- ⏰ Scheduled cleanup using Cron
