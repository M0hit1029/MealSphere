import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginSignupPage() {
  const { userType } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(100%)", // Make the background darker without adding a tint
        }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      {/* Darker overlay without bluish tint */}
      {/* Content */}
      <div className="relative flex flex-col min-h-screen">
        <Navbar />
        <AuthSection userType={userType} navigate={navigate} />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-[#ffffff00]  w-full">
      <h1 className="text-4xl font-bold text-white">MealSphere</h1>
      <div className="flex items-center space-x-8 text-lg font-medium text-[#FFFFFF]">
        <Link
          to="/"
          className="hover:text-yellow-500 transition-colors duration-200"
        >
          Home
        </Link>
        <a
          href="#reviews"
          className="hover:text-yellow-500 transition-colors duration-200"
        >
          Feedback
        </a>
      </div>
    </nav>
  );
}

function AuthSection({ userType, navigate }) {
  const [mode, setMode] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const effectiveUserType = userType || "customer";

  // Base URL
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  // Determine endpoint based on user type
  const API_ENDPOINTS = {
    customer: {
      login: `${BASE_URL}/user/login`,
      signup: `${BASE_URL}/user/signup`,
    },
    messOwner: {
      login: `${BASE_URL}/messOwner/login`,
      signup: `${BASE_URL}/messOwner/signup`,
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint =
        effectiveUserType === "customer"
          ? API_ENDPOINTS.customer.login
          : API_ENDPOINTS.messOwner.login;

      await axios.post(
        endpoint,
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );
      navigate(
        effectiveUserType === "customer" ? "/user-dashboard" : "/mess-dashboard"
      );
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

const handleSignup = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const endpoint =
      effectiveUserType === "customer"
        ? API_ENDPOINTS.customer.signup
        : API_ENDPOINTS.messOwner.signup;

    const response = await axios.post(
      endpoint,
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      },
      {
        withCredentials: true, // important to allow cookies from backend
      }
    );

    // No need to store token in localStorage
    // Cookie will be handled by backend via Set-Cookie header

    navigate(
      effectiveUserType === "customer" ? "/user-dashboard" : "/mess-dashboard"
    );
  } catch (err) {
    console.error(err);
    setError(err.response?.data?.message || "Signup failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex-grow flex items-center justify-center py-16 px-4">
      <div
        className="bg-[#FFFFFF] p-6 rounded-xl shadow-lg w-full max-w-sm mx-auto relative border border-white/20 "
        style={{
          backdropFilter: "blur(10px)", // Increased blur for a stronger effect
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Adjusted transparency to match the previous effect
        }}
      >
        <h2 className="text-3xl font-extrabold text-[#FFFFFF] mb-6 text-center">
          {effectiveUserType === "customer" ? "Customer" : "Mess Owner"}
        </h2>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setMode("login")}
            className={`px-3 py-1 rounded-l-lg text-sm ${
              mode === "login"
                ? "bg-amber-600 text-[#FFFFFF]"
                : "bg-[#E5E7EB] text-amber-600"
            } transition-all duration-200`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`px-3 py-1 rounded-r-lg text-sm ${
              mode === "signup"
                ? "bg-amber-600 text-[#FFFFFF]"
                : "bg-[#E5E7EB] text-amber-600"
            } transition-all duration-200`}
          >
            Sign Up
          </button>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center mb-4">{error}</div>
        )}

        {mode === "login" ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-3 bg-[#E5E7EB] border border-[#1E40AF]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full p-3 bg-[#E5E7EB] border border-[#1E40AF]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`bg-amber-600 text-[#FFFFFF] px-6 py-2 rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-md text-sm ${
                  loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={
                effectiveUserType === "customer"
                  ? "Full Name"
                  : "Mess Owner's Name"
              }
              required
              className="w-full p-3 bg-[#E5E7EB] border border-[#1E40AF]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full p-3 bg-[#E5E7EB] border border-[#1E40AF]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-3 bg-[#E5E7EB] border border-[#1E40AF]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full p-3 bg-[#e5e7eb] border border-[#1E40AF]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`bg-amber-600 text-[#FFFFFF] px-6 py-2 rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-md text-sm ${
                  loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginSignupPage;
