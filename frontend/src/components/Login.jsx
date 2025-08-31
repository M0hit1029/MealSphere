import { useState, useEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { User, Mail, Lock, Phone, Eye, EyeOff, Store } from "lucide-react";
import axios from "axios";
import Navbar from "./Navbar";

function LoginSignupPage() {
  const { userType } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isTokenChecked, setIsTokenChecked] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const effectiveUserType = userType || "customer";
      const endpoint =
        effectiveUserType === "customer"
          ? `${import.meta.env.VITE_BASE_URL}/user/auth/me`
          : `${import.meta.env.VITE_BASE_URL}/messOwner/auth/me`;

      try {
        const response = await axios.get(endpoint, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "X-XSS-Protection": "1; mode=block",
            "X-Content-Type-Options": "nosniff",
          },
        });

        if (response.status === 200 && response.data.message === "Authorized") {
          navigate(
            effectiveUserType === "customer" ? "/user-dashboard" : "/mess-dashboard"
          );
        }
      } catch (error) {
        console.error("Token verification failed:", error);
      } finally {
        setIsTokenChecked(true);
      }
    };

    // Skip token check if navigating from logout
    const { fromLogout } = location.state || {};
    if (fromLogout) {
      setIsTokenChecked(true);
    } else {
      checkToken();
    }
  }, [userType, navigate, location]);

  if (!isTokenChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 flex flex-col p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <Navbar />
      <div className="flex-1 flex items-center justify-center pt-20 px-4 sm:px-6 relative z-10">
        <AuthSection userType={userType} navigate={navigate} />
      </div>
    </div>
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
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const effectiveUserType = userType || "customer";

  const BASE_URL = import.meta.env.VITE_BASE_URL;

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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Please enter a valid email address";
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      return "Password must contain at least one special character";
    }
    return "";
  };

  const validateName = (name) => {
    if (name.length < 2) {
      return "Name must be at least 2 characters long";
    }
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      return "Name can only contain letters and spaces";
    }
    return "";
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+91[6-9]\d{9}$/;
    return phoneRegex.test(phone) ? "" : "Please enter a valid Indian phone number (e.g., +91XXXXXXXXXX)";
  };

  const validateForm = () => {
    if (mode === "login") return true;

    const newErrors = {};
    
    newErrors.email = validateEmail(formData.email);
    newErrors.password = validatePassword(formData.password);
    newErrors.name = validateName(formData.name);
    newErrors.phone = validatePhone(formData.phone);

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/[<>{}]/g, '');
    setFormData({ ...formData, [name]: sanitizedValue });
    
    if (mode === "signup") {
      switch (name) {
        case "email":
          setErrors({ ...errors, email: validateEmail(sanitizedValue) });
          break;
        case "password":
          setErrors({ ...errors, password: validatePassword(sanitizedValue) });
          break;
        case "name":
          setErrors({ ...errors, name: validateName(sanitizedValue) });
          break;
        case "phone":
          setErrors({ ...errors, phone: validatePhone(sanitizedValue) });
          break;
        default:
          break;
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    setErrors({ ...errors, server: "" });

    try {
      const endpoint =
        effectiveUserType === "customer"
          ? API_ENDPOINTS.customer.login
          : API_ENDPOINTS.messOwner.login;

      await axios.post(
        endpoint,
        {
          email: formData.email.trim(),
          password: formData.password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "X-XSS-Protection": "1; mode=block",
            "X-Content-Type-Options": "nosniff",
          },
        }
      );
      navigate(
        effectiveUserType === "customer" ? "/user-dashboard" : "/mess-dashboard"
      );
    } catch (err) {
      setErrors({
        ...errors,
        server: err.response?.data?.message || "Login failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({ ...errors, server: "" });

    try {
      const endpoint =
        effectiveUserType === "customer"
          ? API_ENDPOINTS.customer.signup
          : API_ENDPOINTS.messOwner.signup;

      await axios.post(
        endpoint,
        {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          password: formData.password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "X-XSS-Protection": "1; mode=block",
            "X-Content-Type-Options": "nosniff",
          },
        }
      );

      navigate(
        effectiveUserType === "customer" ? "/user-dashboard" : "/mess-dashboard"
      );
    } catch (err) {
      setErrors({
        ...errors,
        server: err.response?.data?.message || "Signup failed",
      });
    } finally {
      setLoading(false);
    }
  };

  const userTypeConfig = {
    customer: {
      title: "Customer Portal",
      icon: User,
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      description: "Access your meal reservations and discover local messes",
    },
    messOwner: {
      title: "Mess Owner Portal",
      icon: Store,
      color: "orange",
      gradient: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-50 to-amber-50",
      description: "Manage your mess, menus, and customer orders",
    },
  };

  const config = userTypeConfig[effectiveUserType];
  const IconComponent = config.icon;

  return (
    <div className="w-full max-w-md mx-auto animate-fadeIn">
      <div className="card p-8 relative overflow-hidden">
        <div className="text-center mb-8">
          <div className={`w-20 h-20 bg-gradient-to-r ${config.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
            <IconComponent className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {config.title}
          </h1>
          <p className="text-gray-600 text-sm">{config.description}</p>
        </div>

        <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
              mode === "login"
                ? `bg-gradient-to-r ${config.gradient} text-white shadow-md`
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
              mode === "signup"
                ? `bg-gradient-to-r ${config.gradient} text-white shadow-md`
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Sign Up
          </button>
        </div>

        {Object.values(errors).some(error => error) && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 animate-slideUp">
            {errors.server && (
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 text-red-500 mr-2">⚠️</div>
                <p className="text-sm">{errors.server}</p>
              </div>
            )}
            {mode === "signup" && errors.email && (
              <p className="text-sm ml-7">{errors.email}</p>
            )}
            {mode === "signup" && errors.password && (
              <p className="text-sm ml-7">{errors.password}</p>
            )}
            {mode === "signup" && errors.name && (
              <p className="text-sm ml-7">{errors.name}</p>
            )}
            {mode === "signup" && errors.phone && (
              <p className="text-sm ml-7">{errors.phone}</p>
            )}
          </div>
        )}

        {mode === "login" ? (
          <form onSubmit={handleLogin} className="space-y-6" noValidate>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={
                  effectiveUserType === "customer"
                    ? "Email address: user3@gmail.com"
                    : "Email address: messowner1@gmail.com"
                }
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={
                  effectiveUserType === "customer"
                    ? "Password: U1234567u@"
                    : "Password: M1234567m@"
                }
                required
                className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r ${config.gradient} text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-6" noValidate>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                className={`w-full pl-12 pr-4 py-3 bg-gray-50 border ${
                  errors.name ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`}
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91XXXXXXXXXX"
                required
                className={`w-full pl-12 pr-4 py-3 bg-gray-50 border ${
                  errors.phone ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`}
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address: user3@gmail.com"
                required
                className={`w-full pl-12 pr-4 py-3 bg-gray-50 border ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className={`w-full pl-12 pr-12 py-3 bg-gray-50 border ${
                  errors.password ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading || Object.values(errors).some(error => error)}
              className={`w-full bg-gradient-to-r ${config.gradient} text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Creating account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        )}

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginSignupPage;