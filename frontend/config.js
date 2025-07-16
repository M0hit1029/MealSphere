export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://your-backend-url.com" // Replace with your production backend URL
    : "http://localhost:5000";