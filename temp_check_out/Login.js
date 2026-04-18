(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // frontend/src/components/Login.jsx
  var import_react2 = __require("react");
  var import_react_router_dom2 = __require("react-router-dom");
  var import_lucide_react2 = __require("lucide-react");
  var import_axios = __toESM(__require("axios"), 1);

  // frontend/src/components/Navbar.jsx
  var import_react = __toESM(__require("react"), 1);
  var import_lucide_react = __require("lucide-react");
  var import_react_router_dom = __require("react-router-dom");
  var scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  var Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = (0, import_react.useState)(false);
    const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
    const location = (0, import_react_router_dom.useLocation)();
    const navigate = (0, import_react_router_dom.useNavigate)();
    (0, import_react.useEffect)(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    (0, import_react.useEffect)(() => {
      const { sectionId } = location.state || {};
      if (location.pathname === "/" && sectionId) {
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    }, [location]);
    const handleNavClick = (sectionId) => {
      if (location.pathname !== "/") {
        navigate("/", { state: { sectionId } });
      } else {
        scrollToSection(sectionId);
      }
      setIsMenuOpen(false);
    };
    return /* @__PURE__ */ import_react.default.createElement(
      "nav",
      {
        className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50" : "bg-white/80 backdrop-blur-md shadow-lg"}`
      },
      /* @__PURE__ */ import_react.default.createElement("div", { className: "container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "relative group" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute -inset-2 rounded-lg blur opacity-25" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "relative text-2xl sm:text-3xl font-extrabold tracking-wide" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-sm" }, "MealSphere")), /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full " }), /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "hidden md:flex items-center space-x-6" }, /* @__PURE__ */ import_react.default.createElement(NavButton, { onClick: () => handleNavClick("home") }, "Home"), /* @__PURE__ */ import_react.default.createElement(NavButton, { onClick: () => handleNavClick("about-section") }, "About"), /* @__PURE__ */ import_react.default.createElement(NavButton, { onClick: () => handleNavClick("features") }, "Features"), /* @__PURE__ */ import_react.default.createElement(NavButton, { onClick: () => handleNavClick("contact") }, "Contact"), /* @__PURE__ */ import_react.default.createElement(import_react_router_dom.Link, { to: "/signup" }, /* @__PURE__ */ import_react.default.createElement("button", { className: "group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "relative z-10 flex items-center gap-2" }, /* @__PURE__ */ import_react.default.createElement(import_lucide_react.User, { size: 18, className: "group-hover:rotate-12 transition-transform duration-300" }), "Join Us / Login"), /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })))), /* @__PURE__ */ import_react.default.createElement(
        "button",
        {
          className: "md:hidden p-3 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300 relative",
          onClick: () => setIsMenuOpen(!isMenuOpen)
        },
        isMenuOpen ? /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Menu, { size: 24, className: "transition-transform duration-300" }) : /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Menu, { size: 24, className: "transition-transform duration-300" }),
        isMenuOpen && /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute inset-0 bg-amber-500/20 rounded-full animate-ping" })
      )),
      /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          className: `md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-out ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`
        },
        /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-200/50" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-col p-6 space-y-4" }, /* @__PURE__ */ import_react.default.createElement(MobileNavLink, { onClick: () => handleNavClick("home") }, "Home"), /* @__PURE__ */ import_react.default.createElement(MobileNavLink, { onClick: () => handleNavClick("about-section") }, "About"), /* @__PURE__ */ import_react.default.createElement(MobileNavLink, { onClick: () => handleNavClick("features") }, "Features"), /* @__PURE__ */ import_react.default.createElement(MobileNavLink, { onClick: () => handleNavClick("contact") }, "Contact"), /* @__PURE__ */ import_react.default.createElement(import_react_router_dom.Link, { to: "/signup", onClick: () => setIsMenuOpen(false) }, /* @__PURE__ */ import_react.default.createElement("button", { className: "w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2" }, /* @__PURE__ */ import_react.default.createElement(import_lucide_react.User, { size: 18 }), "Join Us"))))
      )
    );
  };
  var NavButton = ({ onClick, children }) => /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      onClick,
      className: "relative text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 group flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-amber-50"
    },
    children,
    /* @__PURE__ */ import_react.default.createElement("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full" })
  );
  var MobileNavLink = ({ children, onClick }) => /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      onClick,
      className: "text-gray-700 hover:text-amber-600 font-medium py-3 px-4 rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:translate-x-2 flex items-center gap-3 text-left w-full"
    },
    children
  );
  var Navbar_default = Navbar;

  // frontend/src/components/Login.jsx
  var import_meta = {};
  var LAST_ACTIVE_MESS_KEY = "ownerLastActiveMessId";
  var resolveMessOwnerRedirectPath = async () => {
    try {
      const response = await import_axios.default.get(`${import_meta.env.VITE_BASE_URL}/mess/owner/messes`, {
        withCredentials: true
      });
      const messes = response.data?.messes || [];
      if (!messes.length) {
        localStorage.removeItem(LAST_ACTIVE_MESS_KEY);
        return "/mess-dashboard/create-first-mess";
      }
      const lastActiveMessId = localStorage.getItem(LAST_ACTIVE_MESS_KEY);
      const resolvedMess = messes.find((mess) => mess._id === lastActiveMessId) || messes[0];
      localStorage.setItem(LAST_ACTIVE_MESS_KEY, resolvedMess._id);
      return `/mess-dashboard/${resolvedMess._id}`;
    } catch (error) {
      if (error.response?.status === 404) {
        localStorage.removeItem(LAST_ACTIVE_MESS_KEY);
        return "/mess-dashboard/create-first-mess";
      }
      return "/mess-dashboard";
    }
  };
  function LoginSignupPage() {
    const { userType } = (0, import_react_router_dom2.useParams)();
    const navigate = (0, import_react_router_dom2.useNavigate)();
    const location = (0, import_react_router_dom2.useLocation)();
    const [isTokenChecked, setIsTokenChecked] = (0, import_react2.useState)(false);
    (0, import_react2.useEffect)(() => {
      const checkToken = async () => {
        const effectiveUserType = userType || "customer";
        const endpoint = effectiveUserType === "customer" ? `${import_meta.env.VITE_BASE_URL}/user/auth/me` : `${import_meta.env.VITE_BASE_URL}/messOwner/auth/me`;
        try {
          const response = await import_axios.default.get(endpoint, {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              "X-XSS-Protection": "1; mode=block",
              "X-Content-Type-Options": "nosniff"
            }
          });
          if (response.status === 200 && response.data.message === "Authorized") {
            if (effectiveUserType === "customer") {
              navigate("/user-dashboard");
            } else {
              const landingPath = await resolveMessOwnerRedirectPath();
              navigate(landingPath);
            }
          }
        } catch (error) {
          console.error("Token verification failed:", error);
        } finally {
          setIsTokenChecked(true);
        }
      };
      const { fromLogout } = location.state || {};
      if (fromLogout) {
        setIsTokenChecked(true);
      } else {
        checkToken();
      }
    }, [userType, navigate, location]);
    if (!isTokenChecked) {
      return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" }));
    }
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 flex flex-col p-4" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30" }), /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex items-center justify-center pt-20 px-4 sm:px-6 relative z-10" }, /* @__PURE__ */ React.createElement(AuthSection, { userType, navigate })));
  }
  function AuthSection({ userType, navigate }) {
    const [mode, setMode] = (0, import_react2.useState)("login");
    const [formData, setFormData] = (0, import_react2.useState)({
      email: "",
      password: "",
      name: "",
      phone: ""
    });
    const [errors, setErrors] = (0, import_react2.useState)({});
    const [loading, setLoading] = (0, import_react2.useState)(false);
    const [showPassword, setShowPassword] = (0, import_react2.useState)(false);
    const effectiveUserType = userType || "customer";
    const BASE_URL = import_meta.env.VITE_BASE_URL;
    const API_ENDPOINTS = {
      customer: {
        login: `${BASE_URL}/user/login`,
        signup: `${BASE_URL}/user/signup`
      },
      messOwner: {
        login: `${BASE_URL}/messOwner/login`,
        signup: `${BASE_URL}/messOwner/signup`
      }
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
      return Object.values(newErrors).every((error) => error === "");
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      const sanitizedValue = value.replace(/[<>{}]/g, "");
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
        const endpoint = effectiveUserType === "customer" ? API_ENDPOINTS.customer.login : API_ENDPOINTS.messOwner.login;
        await import_axios.default.post(
          endpoint,
          {
            email: formData.email.trim(),
            password: formData.password
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              "X-XSS-Protection": "1; mode=block",
              "X-Content-Type-Options": "nosniff"
            }
          }
        );
        if (effectiveUserType === "customer") {
          navigate("/user-dashboard");
        } else {
          const landingPath = await resolveMessOwnerRedirectPath();
          navigate(landingPath);
        }
      } catch (err) {
        setErrors({
          ...errors,
          server: err.response?.data?.message || "Login failed. Please try again."
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
        const endpoint = effectiveUserType === "customer" ? API_ENDPOINTS.customer.signup : API_ENDPOINTS.messOwner.signup;
        await import_axios.default.post(
          endpoint,
          {
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            password: formData.password
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              "X-XSS-Protection": "1; mode=block",
              "X-Content-Type-Options": "nosniff"
            }
          }
        );
        if (effectiveUserType === "customer") {
          navigate("/user-dashboard");
        } else {
          const landingPath = await resolveMessOwnerRedirectPath();
          navigate(landingPath);
        }
      } catch (err) {
        setErrors({
          ...errors,
          server: err.response?.data?.message || "Signup failed"
        });
      } finally {
        setLoading(false);
      }
    };
    const userTypeConfig = {
      customer: {
        title: "Customer Portal",
        icon: import_lucide_react2.User,
        color: "blue",
        gradient: "from-blue-500 to-indigo-600",
        bgGradient: "from-blue-50 to-indigo-50",
        description: "Access your meal reservations and discover local messes"
      },
      messOwner: {
        title: "Mess Owner Portal",
        icon: import_lucide_react2.Store,
        color: "orange",
        gradient: "from-orange-500 to-amber-600",
        bgGradient: "from-orange-50 to-amber-50",
        description: "Manage your mess, menus, and customer orders"
      }
    };
    const config = userTypeConfig[effectiveUserType];
    const IconComponent = config.icon;
    return /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-md mx-auto animate-fadeIn" }, /* @__PURE__ */ React.createElement("div", { className: "card p-8 relative overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-8" }, /* @__PURE__ */ React.createElement("div", { className: `w-20 h-20 bg-gradient-to-r ${config.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg` }, /* @__PURE__ */ React.createElement(IconComponent, { className: "w-10 h-10 text-white" })), /* @__PURE__ */ React.createElement("h1", { className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-2" }, config.title), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-sm" }, config.description)), /* @__PURE__ */ React.createElement("div", { className: "flex bg-gray-100 rounded-lg p-1 mb-6" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setMode("login"),
        className: `flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${mode === "login" ? `bg-gradient-to-r ${config.gradient} text-white shadow-md` : "text-gray-600 hover:text-gray-800"}`
      },
      "Login"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setMode("signup"),
        className: `flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${mode === "signup" ? `bg-gradient-to-r ${config.gradient} text-white shadow-md` : "text-gray-600 hover:text-gray-800"}`
      },
      "Sign Up"
    )), Object.values(errors).some((error) => error) && /* @__PURE__ */ React.createElement("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 animate-slideUp" }, errors.server && /* @__PURE__ */ React.createElement("div", { className: "flex items-center mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-5 h-5 text-red-500 mr-2" }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, errors.server)), mode === "signup" && errors.email && /* @__PURE__ */ React.createElement("p", { className: "text-sm ml-7" }, errors.email), mode === "signup" && errors.password && /* @__PURE__ */ React.createElement("p", { className: "text-sm ml-7" }, errors.password), mode === "signup" && errors.name && /* @__PURE__ */ React.createElement("p", { className: "text-sm ml-7" }, errors.name), mode === "signup" && errors.phone && /* @__PURE__ */ React.createElement("p", { className: "text-sm ml-7" }, errors.phone)), mode === "login" ? /* @__PURE__ */ React.createElement("form", { onSubmit: handleLogin, className: "space-y-6", noValidate: true }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(import_lucide_react2.Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "email",
        name: "email",
        value: formData.email,
        onChange: handleChange,
        placeholder: effectiveUserType === "customer" ? "Email address: user1@gmail.com" : "Email address: user2@gmail.com",
        required: true,
        className: "w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(import_lucide_react2.Lock, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: showPassword ? "text" : "password",
        name: "password",
        value: formData.password,
        onChange: handleChange,
        placeholder: effectiveUserType === "customer" ? "Password: U1234567u@" : "Password: M1234567m@",
        required: true,
        className: "w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
      }
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setShowPassword(!showPassword),
        className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
      },
      showPassword ? /* @__PURE__ */ React.createElement(import_lucide_react2.EyeOff, { className: "w-5 h-5" }) : /* @__PURE__ */ React.createElement(import_lucide_react2.Eye, { className: "w-5 h-5" })
    )), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        disabled: loading,
        className: `w-full bg-gradient-to-r ${config.gradient} text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`
      },
      loading ? /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" }), "Logging in...") : "Login"
    )) : /* @__PURE__ */ React.createElement("form", { onSubmit: handleSignup, className: "space-y-6", noValidate: true }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(import_lucide_react2.User, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        name: "name",
        value: formData.name,
        onChange: handleChange,
        placeholder: effectiveUserType === "customer" ? "Full Name" : "Mess Owner's Name",
        required: true,
        className: `w-full pl-12 pr-4 py-3 bg-gray-50 border ${errors.name ? "border-red-500" : "border-gray-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(import_lucide_react2.Phone, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "tel",
        name: "phone",
        value: formData.phone,
        onChange: handleChange,
        placeholder: "+91XXXXXXXXXX",
        required: true,
        className: `w-full pl-12 pr-4 py-3 bg-gray-50 border ${errors.phone ? "border-red-500" : "border-gray-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(import_lucide_react2.Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "email",
        name: "email",
        value: formData.email,
        onChange: handleChange,
        placeholder: "Email address",
        required: true,
        className: `w-full pl-12 pr-4 py-3 bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(import_lucide_react2.Lock, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: showPassword ? "text" : "password",
        name: "password",
        value: formData.password,
        onChange: handleChange,
        placeholder: "Password",
        required: true,
        className: `w-full pl-12 pr-12 py-3 bg-gray-50 border ${errors.password ? "border-red-500" : "border-gray-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`
      }
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setShowPassword(!showPassword),
        className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
      },
      showPassword ? /* @__PURE__ */ React.createElement(import_lucide_react2.EyeOff, { className: "w-5 h-5" }) : /* @__PURE__ */ React.createElement(import_lucide_react2.Eye, { className: "w-5 h-5" })
    )), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        disabled: loading || Object.values(errors).some((error) => error),
        className: `w-full bg-gradient-to-r ${config.gradient} text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`
      },
      loading ? /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" }), "Creating account...") : "Create Account"
    )), /* @__PURE__ */ React.createElement("div", { className: "mt-8 text-center" }, /* @__PURE__ */ React.createElement(
      import_react_router_dom2.Link,
      {
        to: "/",
        className: "text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2"
      },
      "\u2190 Back to Home"
    ))));
  }
  var Login_default = LoginSignupPage;
})();
