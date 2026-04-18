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

  // frontend/src/pages/MessDashboard.jsx
  var import_react2 = __toESM(__require("react"), 1);
  var import_react_router_dom2 = __require("react-router-dom");
  var import_axios2 = __toESM(__require("axios"), 1);
  var import_lucide_react2 = __require("lucide-react");

  // frontend/src/components/MessDashboardNavbar.jsx
  var import_react = __toESM(__require("react"), 1);
  var import_lucide_react = __require("lucide-react");
  var import_react_router_dom = __require("react-router-dom");
  var import_axios = __toESM(__require("axios"), 1);
  var import_meta = {};
  var MessDashboardNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = (0, import_react.useState)(false);
    const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
    const navigate = (0, import_react_router_dom.useNavigate)();
    (0, import_react.useEffect)(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleLogout = async () => {
      try {
        const response = await import_axios.default.post(
          `${import_meta.env.VITE_BASE_URL}/messOwner/logout`,
          {},
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        if (response.status === 200) {
          navigate("/login-signup/messOwner", { state: { fromLogout: true } });
        } else {
          console.error("Logout failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };
    return /* @__PURE__ */ import_react.default.createElement(
      "nav",
      {
        className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50" : "bg-white/80 backdrop-blur-md shadow-lg"}`
      },
      /* @__PURE__ */ import_react.default.createElement("div", { className: "container mx-auto px-6 py-4 flex justify-between items-center" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "relative group" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300 animate-pulse" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "relative text-3xl font-extrabold tracking-wide" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg animate-glow" }, "MealSphere")), /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "hidden md:flex items-center space-x-6" }, /* @__PURE__ */ import_react.default.createElement(NavButton, { icon: import_lucide_react.Home, href: "/" }, "Home"), /* @__PURE__ */ import_react.default.createElement(NavButton, { icon: import_lucide_react.AppWindow, href: "/mess-dashboard" }, "Dashboard"), /* @__PURE__ */ import_react.default.createElement(
        "button",
        {
          onClick: handleLogout,
          className: "group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        },
        /* @__PURE__ */ import_react.default.createElement("span", { className: "relative z-10 flex items-center gap-2" }, /* @__PURE__ */ import_react.default.createElement(import_lucide_react.LogOut, { size: 18, className: "group-hover:rotate-12 transition-transform duration-300" }), "Logout"),
        /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
      )), /* @__PURE__ */ import_react.default.createElement(
        "button",
        {
          className: "md:hidden p-3 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300 relative",
          onClick: () => setIsMenuOpen(!isMenuOpen)
        },
        /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Menu, { size: 24, className: `transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}` }),
        isMenuOpen && /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute inset-0 bg-orange-500/20 rounded-full animate-ping" })
      )),
      /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          className: `md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-out ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`
        },
        /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-200/50" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-col p-6 space-y-4" }, /* @__PURE__ */ import_react.default.createElement(MobileNavLink, { icon: import_lucide_react.Home, href: "/", onClick: () => setIsMenuOpen(false) }, "Home"), /* @__PURE__ */ import_react.default.createElement(MobileNavLink, { icon: import_lucide_react.AppWindow, href: "/mess-dashboard", onClick: () => setIsMenuOpen(false) }, "Dashboard"), /* @__PURE__ */ import_react.default.createElement(
          "button",
          {
            onClick: () => {
              handleLogout();
              setIsMenuOpen(false);
            },
            className: "w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          },
          /* @__PURE__ */ import_react.default.createElement(import_lucide_react.LogOut, { size: 18 }),
          "Logout"
        )))
      )
    );
  };
  var NavButton = ({ icon: Icon, href, children }) => /* @__PURE__ */ import_react.default.createElement(
    "a",
    {
      href,
      className: "relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 group flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-orange-50"
    },
    /* @__PURE__ */ import_react.default.createElement(Icon, { size: 18, className: "group-hover:scale-110 transition-transform duration-300" }),
    children,
    /* @__PURE__ */ import_react.default.createElement("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full" })
  );
  var MobileNavLink = ({ icon: Icon, href, children, onClick }) => /* @__PURE__ */ import_react.default.createElement(
    "a",
    {
      href,
      onClick,
      className: "text-gray-700 hover:text-orange-600 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:translate-x-2 flex items-center gap-3"
    },
    /* @__PURE__ */ import_react.default.createElement(Icon, { size: 18 }),
    children
  );
  var MessDashboardNavbar_default = MessDashboardNavbar;

  // frontend/src/pages/MessDashboard.jsx
  var import_meta2 = {};
  var LAST_ACTIVE_MESS_KEY = "ownerLastActiveMessId";
  var defaultMenuForm = {
    dayMeal: { dishes: [{ name: "", price: "", items: "" }] },
    nightMeal: { dishes: [{ name: "", price: "", items: "" }] }
  };
  var MessDashboard = () => {
    const navigate = (0, import_react_router_dom2.useNavigate)();
    const { messId: routeMessId } = (0, import_react_router_dom2.useParams)();
    const [messes, setMesses] = (0, import_react2.useState)([]);
    const [loading, setLoading] = (0, import_react2.useState)(true);
    const [error, setError] = (0, import_react2.useState)("");
    const [success, setSuccess] = (0, import_react2.useState)("");
    const [sidebarOpen, setSidebarOpen] = (0, import_react2.useState)(false);
    const [isMenuModalOpen, setIsMenuModalOpen] = (0, import_react2.useState)(false);
    const [menuForm, setMenuForm] = (0, import_react2.useState)(defaultMenuForm);
    const [activeMessId, setActiveMessId] = (0, import_react2.useState)(null);
    (0, import_react2.useEffect)(() => {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 3e3);
      return () => clearTimeout(timer);
    }, [success, error]);
    const fetchOwnerMesses = async () => {
      setLoading(true);
      try {
        const response = await import_axios2.default.get(`${import_meta2.env.VITE_BASE_URL}/mess/owner/messes`, {
          withCredentials: true
        });
        const fetchedMesses = response.data?.messes || [];
        if (!fetchedMesses.length) {
          navigate("/mess-dashboard/create-first-mess", { replace: true });
          return;
        }
        setMesses(fetchedMesses);
        const storedMessId = localStorage.getItem(LAST_ACTIVE_MESS_KEY);
        const fallbackMessId = fetchedMesses[0]._id;
        const requestedMessId = routeMessId;
        const resolvedMessId = [requestedMessId, storedMessId, fallbackMessId].find(
          (candidateId) => fetchedMesses.some((mess) => mess._id === candidateId)
        );
        setActiveMessId(resolvedMessId);
        localStorage.setItem(LAST_ACTIVE_MESS_KEY, resolvedMessId);
        if (routeMessId !== resolvedMessId) {
          navigate(`/mess-dashboard/${resolvedMessId}`, { replace: true });
        }
      } catch (err) {
        if (err.response?.status === 404) {
          navigate("/mess-dashboard/create-first-mess", { replace: true });
          return;
        }
        setError(err.response?.data?.message || "Failed to fetch messes");
      } finally {
        setLoading(false);
      }
    };
    (0, import_react2.useEffect)(() => {
      fetchOwnerMesses();
    }, []);
    (0, import_react2.useEffect)(() => {
      if (!messes.length) return;
      if (!routeMessId) return;
      const exists = messes.some((mess) => mess._id === routeMessId);
      if (!exists) {
        const fallbackMessId = messes[0]._id;
        setActiveMessId(fallbackMessId);
        localStorage.setItem(LAST_ACTIVE_MESS_KEY, fallbackMessId);
        navigate(`/mess-dashboard/${fallbackMessId}`, { replace: true });
        return;
      }
      setActiveMessId(routeMessId);
      localStorage.setItem(LAST_ACTIVE_MESS_KEY, routeMessId);
    }, [routeMessId, messes, navigate]);
    const activeMess = (0, import_react2.useMemo)(
      () => messes.find((mess) => mess._id === activeMessId) || null,
      [messes, activeMessId]
    );
    const handleSelectMess = (messId) => {
      setSidebarOpen(false);
      setActiveMessId(messId);
      localStorage.setItem(LAST_ACTIVE_MESS_KEY, messId);
      navigate(`/mess-dashboard/${messId}`);
    };
    const handleDeleteMess = async () => {
      if (!activeMess) return;
      if (!window.confirm(`Delete ${activeMess.name}? This action cannot be undone.`)) return;
      try {
        setLoading(true);
        await import_axios2.default.delete(`${import_meta2.env.VITE_BASE_URL}/mess/${activeMess._id}`, {
          withCredentials: true
        });
        const updatedMesses = messes.filter((mess) => mess._id !== activeMess._id);
        setMesses(updatedMesses);
        setSuccess("Mess deleted successfully");
        if (!updatedMesses.length) {
          localStorage.removeItem(LAST_ACTIVE_MESS_KEY);
          navigate("/mess-dashboard/create-first-mess", { replace: true });
          return;
        }
        const nextMessId = updatedMesses[0]._id;
        setActiveMessId(nextMessId);
        localStorage.setItem(LAST_ACTIVE_MESS_KEY, nextMessId);
        navigate(`/mess-dashboard/${nextMessId}`, { replace: true });
      } catch (err) {
        setError(err.response?.data?.message || "Failed to delete mess");
      } finally {
        setLoading(false);
      }
    };
    const handleMenuChange = (event, mealType, index, field) => {
      const { value } = event.target;
      setMenuForm((prev) => {
        const updatedDishes = [...prev[mealType].dishes];
        if (field === "items") {
          updatedDishes[index] = {
            ...updatedDishes[index],
            items: value
          };
        } else {
          updatedDishes[index] = {
            ...updatedDishes[index],
            [field]: value
          };
        }
        return {
          ...prev,
          [mealType]: { dishes: updatedDishes }
        };
      });
    };
    const addDish = (mealType) => {
      setMenuForm((prev) => ({
        ...prev,
        [mealType]: {
          dishes: [...prev[mealType].dishes, { name: "", price: "", items: "" }]
        }
      }));
    };
    const deleteDish = (mealType, index) => {
      setMenuForm((prev) => {
        const updatedDishes = [...prev[mealType].dishes];
        updatedDishes.splice(index, 1);
        return {
          ...prev,
          [mealType]: {
            dishes: updatedDishes.length ? updatedDishes : [{ name: "", price: "", items: "" }]
          }
        };
      });
    };
    const openMenuModal = () => {
      if (!activeMess) return;
      const normalizeMenu = (menu) => ({
        dayMeal: {
          dishes: (menu?.dayMeal?.dishes || []).length ? menu.dayMeal.dishes.map((dish) => ({
            name: dish.name || "",
            price: dish.price || "",
            items: Array.isArray(dish.items) ? dish.items.join(", ") : dish.items || ""
          })) : [{ name: "", price: "", items: "" }]
        },
        nightMeal: {
          dishes: (menu?.nightMeal?.dishes || []).length ? menu.nightMeal.dishes.map((dish) => ({
            name: dish.name || "",
            price: dish.price || "",
            items: Array.isArray(dish.items) ? dish.items.join(", ") : dish.items || ""
          })) : [{ name: "", price: "", items: "" }]
        }
      });
      setMenuForm(normalizeMenu(activeMess.menu));
      setIsMenuModalOpen(true);
    };
    const closeMenuModal = () => {
      setIsMenuModalOpen(false);
      setMenuForm(defaultMenuForm);
    };
    const handleMenuSubmit = async (event) => {
      event.preventDefault();
      if (!activeMess) return;
      const parsedMenu = {
        dayMeal: {
          dishes: menuForm.dayMeal.dishes.filter((dish) => dish.name && dish.price !== "").map((dish) => ({
            name: dish.name.trim(),
            price: Number(dish.price),
            items: String(dish.items || "").split(",").map((item) => item.trim()).filter(Boolean)
          }))
        },
        nightMeal: {
          dishes: menuForm.nightMeal.dishes.filter((dish) => dish.name && dish.price !== "").map((dish) => ({
            name: dish.name.trim(),
            price: Number(dish.price),
            items: String(dish.items || "").split(",").map((item) => item.trim()).filter(Boolean)
          }))
        }
      };
      try {
        setLoading(true);
        const response = await import_axios2.default.put(
          `${import_meta2.env.VITE_BASE_URL}/mess/${activeMess._id}`,
          { menu: parsedMenu },
          { withCredentials: true }
        );
        setMesses(
          (prev) => prev.map((mess) => mess._id === activeMess._id ? { ...mess, menu: parsedMenu } : mess)
        );
        setSuccess(response.data?.message || "Menu updated successfully");
        closeMenuModal();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to update menu");
      } finally {
        setLoading(false);
      }
    };
    return /* @__PURE__ */ import_react2.default.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50" }, /* @__PURE__ */ import_react2.default.createElement(MessDashboardNavbar_default, null), /* @__PURE__ */ import_react2.default.createElement("div", { className: "pt-20 px-4 sm:px-6 pb-6" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "max-w-7xl mx-auto" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "mb-4 flex items-center justify-between lg:hidden" }, /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => setSidebarOpen((prev) => !prev),
        className: "inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-700"
      },
      /* @__PURE__ */ import_react2.default.createElement(import_lucide_react2.Menu, { className: "w-4 h-4" }),
      "Messes"
    ), /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => navigate("/mess-dashboard/add-mess"),
        className: "inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-sm"
      },
      /* @__PURE__ */ import_react2.default.createElement(import_lucide_react2.Plus, { className: "w-4 h-4" }),
      "Add"
    )), /* @__PURE__ */ import_react2.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-6" }, /* @__PURE__ */ import_react2.default.createElement(
      "aside",
      {
        className: `bg-white rounded-xl border border-slate-200 shadow-sm p-4 h-fit lg:sticky lg:top-24 ${sidebarOpen ? "block" : "hidden"} lg:block`
      },
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ import_react2.default.createElement("h2", { className: "text-lg font-semibold text-slate-800" }, "Your Messes"), /* @__PURE__ */ import_react2.default.createElement(
        "button",
        {
          type: "button",
          onClick: () => setSidebarOpen(false),
          className: "lg:hidden p-1 rounded hover:bg-slate-100"
        },
        /* @__PURE__ */ import_react2.default.createElement(import_lucide_react2.X, { className: "w-4 h-4" })
      )),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "space-y-2 mb-4 max-h-[420px] overflow-y-auto pr-1" }, messes.map((mess) => {
        const isActive = mess._id === activeMessId;
        return /* @__PURE__ */ import_react2.default.createElement(
          "button",
          {
            key: mess._id,
            type: "button",
            onClick: () => handleSelectMess(mess._id),
            className: `w-full text-left px-3 py-2 rounded-lg border transition-all ${isActive ? "bg-indigo-50 border-indigo-300 text-indigo-700" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`
          },
          /* @__PURE__ */ import_react2.default.createElement("div", { className: "font-medium truncate" }, mess.name),
          /* @__PURE__ */ import_react2.default.createElement("div", { className: "text-xs text-slate-500 truncate" }, mess.address)
        );
      })),
      /* @__PURE__ */ import_react2.default.createElement(
        "button",
        {
          type: "button",
          onClick: () => navigate("/mess-dashboard/add-mess"),
          className: "w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        },
        /* @__PURE__ */ import_react2.default.createElement(import_lucide_react2.Plus, { className: "w-4 h-4" }),
        "Add Mess"
      )
    ), /* @__PURE__ */ import_react2.default.createElement("section", { className: "space-y-4" }, success && /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg" }, success), error && /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg" }, error), /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-white rounded-xl border border-slate-200 shadow-sm p-6" }, loading ? /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center gap-3 text-slate-600" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" }), "Loading mess details...") : !activeMess ? /* @__PURE__ */ import_react2.default.createElement("div", { className: "text-slate-600" }, "No active mess selected.") : /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center gap-4 mb-5" }, /* @__PURE__ */ import_react2.default.createElement(
      "img",
      {
        src: activeMess.image || "https://res.cloudinary.com/dz1qj3x7h/image/upload/v1735681234/MealSphere/messDefaultImage.png",
        alt: activeMess.name,
        className: "w-20 h-20 rounded-xl object-cover border border-slate-200"
      }
    ), /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("h1", { className: "text-2xl font-bold text-slate-800" }, activeMess.name), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-slate-600" }, activeMess.address))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type: "button",
        onClick: openMenuModal,
        className: "inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      },
      /* @__PURE__ */ import_react2.default.createElement(import_lucide_react2.BookOpen, { className: "w-4 h-4" }),
      "View / Update Menu"
    ), /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => navigate(`/mess-dashboard/${activeMess._id}/registered-members`),
        className: "inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700"
      },
      /* @__PURE__ */ import_react2.default.createElement(import_lucide_react2.Users, { className: "w-4 h-4" }),
      "View Members"
    ), /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => navigate(`/mess-dashboard/${activeMess._id}/attendance`),
        className: "inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
      },
      /* @__PURE__ */ import_react2.default.createElement(import_lucide_react2.ClipboardList, { className: "w-4 h-4" }),
      "View Attendance"
    ), /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type: "button",
        onClick: handleDeleteMess,
        className: "inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700"
      },
      /* @__PURE__ */ import_react2.default.createElement(import_lucide_react2.Trash2, { className: "w-4 h-4" }),
      "Delete Mess"
    )))))))), isMenuModalOpen && activeMess && /* @__PURE__ */ import_react2.default.createElement("div", { className: "fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-white rounded-xl border border-slate-200 shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center justify-between mb-5" }, /* @__PURE__ */ import_react2.default.createElement("h2", { className: "text-xl font-bold text-slate-800" }, "Update Menu: ", activeMess.name), /* @__PURE__ */ import_react2.default.createElement("button", { type: "button", onClick: closeMenuModal, className: "p-1 rounded hover:bg-slate-100" }, /* @__PURE__ */ import_react2.default.createElement(import_lucide_react2.X, { className: "w-5 h-5" }))), /* @__PURE__ */ import_react2.default.createElement("form", { onSubmit: handleMenuSubmit, className: "space-y-6" }, ["dayMeal", "nightMeal"].map((mealType) => /* @__PURE__ */ import_react2.default.createElement("div", { key: mealType, className: "border border-slate-200 rounded-lg p-4" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ import_react2.default.createElement("h3", { className: "font-semibold text-slate-700" }, mealType === "dayMeal" ? "Lunch Menu" : "Dinner Menu"), /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => addDish(mealType),
        className: "text-sm text-indigo-600 hover:text-indigo-700"
      },
      "+ Add Dish"
    )), /* @__PURE__ */ import_react2.default.createElement("div", { className: "space-y-3" }, menuForm[mealType].dishes.map((dish, index) => /* @__PURE__ */ import_react2.default.createElement("div", { key: `${mealType}-${index}`, className: "grid grid-cols-1 md:grid-cols-[1fr,120px,1fr,auto] gap-2" }, /* @__PURE__ */ import_react2.default.createElement(
      "input",
      {
        type: "text",
        value: dish.name,
        onChange: (event) => handleMenuChange(event, mealType, index, "name"),
        placeholder: "Dish name",
        className: "px-3 py-2 border border-slate-300 rounded-lg",
        required: true
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "input",
      {
        type: "number",
        min: "0",
        value: dish.price,
        onChange: (event) => handleMenuChange(event, mealType, index, "price"),
        placeholder: "Price",
        className: "px-3 py-2 border border-slate-300 rounded-lg",
        required: true
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "input",
      {
        type: "text",
        value: dish.items,
        onChange: (event) => handleMenuChange(event, mealType, index, "items"),
        placeholder: "Items (comma-separated)",
        className: "px-3 py-2 border border-slate-300 rounded-lg"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => deleteDish(mealType, index),
        className: "px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
      },
      "Remove"
    )))))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex justify-end gap-2" }, /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type: "button",
        onClick: closeMenuModal,
        className: "px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50"
      },
      "Cancel"
    ), /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type: "submit",
        className: "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      },
      "Save Menu"
    ))))));
  };
  var MessDashboard_default = MessDashboard;
})();
