import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Menu as MenuIcon,
  Plus,
  X,
  Users,
  ClipboardList,
  Trash2,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  UtensilsCrossed,
  BarChart2,
} from "lucide-react";
import Navbar from "../components/MessDashboardNavbar";

const LAST_ACTIVE_MESS_KEY = "ownerLastActiveMessId";

const defaultMenuForm = {
  dayMeal: { dishes: [{ name: "", price: "", items: "" }] },
  nightMeal: { dishes: [{ name: "", price: "", items: "" }] },
};

const MessDashboard = () => {
  const navigate = useNavigate();
  const { messId: routeMessId } = useParams();

  const [messes, setMesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [menuForm, setMenuForm] = useState(defaultMenuForm);
  const [activeMessId, setActiveMessId] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess("");
      setError("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [success, error]);

  const fetchOwnerMesses = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/mess/owner/messes`, {
        withCredentials: true,
      });

      const fetchedMesses = response.data?.messes || [];
      if (!fetchedMesses.length) {
        navigate("/mess-dashboard/create-first-mess", { replace: true });
        return;
      }

      setMesses(fetchedMesses);

      const storedMessId = localStorage.getItem(LAST_ACTIVE_MESS_KEY);
      const fallbackMessId = fetchedMesses[0]._id;
      const resolvedMessId = [routeMessId, storedMessId, fallbackMessId].find((id) =>
        fetchedMesses.some((m) => m._id === id)
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

  useEffect(() => {
    fetchOwnerMesses();
  }, []);

  useEffect(() => {
    if (!messes.length || !routeMessId) return;
    const exists = messes.some((m) => m._id === routeMessId);
    if (!exists) {
      const fallback = messes[0]._id;
      setActiveMessId(fallback);
      localStorage.setItem(LAST_ACTIVE_MESS_KEY, fallback);
      navigate(`/mess-dashboard/${fallback}`, { replace: true });
      return;
    }
    setActiveMessId(routeMessId);
    localStorage.setItem(LAST_ACTIVE_MESS_KEY, routeMessId);
  }, [routeMessId, messes, navigate]);

  const activeMess = useMemo(
    () => messes.find((m) => m._id === activeMessId) || null,
    [messes, activeMessId]
  );

  const handleSelectMess = (messId) => {
    setActiveMessId(messId);
    localStorage.setItem(LAST_ACTIVE_MESS_KEY, messId);
    navigate(`/mess-dashboard/${messId}`);
    // Auto-close sidebar on mobile
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  const handleDeleteMess = async () => {
    if (!activeMess) return;
    if (!window.confirm(`Delete ${activeMess.name}? This action cannot be undone.`)) return;
    try {
      setLoading(true);
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/mess/${activeMess._id}`, {
        withCredentials: true,
      });
      const updated = messes.filter((m) => m._id !== activeMess._id);
      setMesses(updated);
      setSuccess("Mess deleted successfully");
      if (!updated.length) {
        localStorage.removeItem(LAST_ACTIVE_MESS_KEY);
        navigate("/mess-dashboard/create-first-mess", { replace: true });
        return;
      }
      const next = updated[0]._id;
      setActiveMessId(next);
      localStorage.setItem(LAST_ACTIVE_MESS_KEY, next);
      navigate(`/mess-dashboard/${next}`, { replace: true });
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
      updatedDishes[index] = { ...updatedDishes[index], [field]: value };
      return { ...prev, [mealType]: { dishes: updatedDishes } };
    });
  };

  const addDish = (mealType) => {
    setMenuForm((prev) => ({
      ...prev,
      [mealType]: {
        dishes: [...prev[mealType].dishes, { name: "", price: "", items: "" }],
      },
    }));
  };

  const deleteDish = (mealType, index) => {
    setMenuForm((prev) => {
      const updated = [...prev[mealType].dishes];
      updated.splice(index, 1);
      return {
        ...prev,
        [mealType]: {
          dishes: updated.length ? updated : [{ name: "", price: "", items: "" }],
        },
      };
    });
  };

  const openMenuModal = () => {
    if (!activeMess) return;
    const normalize = (menu) => ({
      dayMeal: {
        dishes: (menu?.dayMeal?.dishes || []).length
          ? menu.dayMeal.dishes.map((d) => ({
              name: d.name || "",
              price: d.price || "",
              items: Array.isArray(d.items) ? d.items.join(", ") : d.items || "",
            }))
          : [{ name: "", price: "", items: "" }],
      },
      nightMeal: {
        dishes: (menu?.nightMeal?.dishes || []).length
          ? menu.nightMeal.dishes.map((d) => ({
              name: d.name || "",
              price: d.price || "",
              items: Array.isArray(d.items) ? d.items.join(", ") : d.items || "",
            }))
          : [{ name: "", price: "", items: "" }],
      },
    });
    setMenuForm(normalize(activeMess.menu));
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
        dishes: menuForm.dayMeal.dishes
          .filter((d) => d.name && d.price !== "")
          .map((d) => ({
            name: d.name.trim(),
            price: Number(d.price),
            items: String(d.items || "").split(",").map((i) => i.trim()).filter(Boolean),
          })),
      },
      nightMeal: {
        dishes: menuForm.nightMeal.dishes
          .filter((d) => d.name && d.price !== "")
          .map((d) => ({
            name: d.name.trim(),
            price: Number(d.price),
            items: String(d.items || "").split(",").map((i) => i.trim()).filter(Boolean),
          })),
      },
    };
    try {
      setLoading(true);
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/mess/${activeMess._id}`,
        { menu: parsedMenu },
        { withCredentials: true }
      );
      setMesses((prev) =>
        prev.map((m) => (m._id === activeMess._id ? { ...m, menu: parsedMenu } : m))
      );
      setSuccess(response.data?.message || "Menu updated successfully");
      closeMenuModal();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update menu");
    } finally {
      setLoading(false);
    }
  };

  // Generate initials avatar color from mess name
  const getMessColor = (name = "") => {
    const colors = [
      "bg-violet-500", "bg-indigo-500", "bg-blue-500",
      "bg-emerald-500", "bg-amber-500", "bg-rose-500", "bg-cyan-500",
    ];
    const idx = name.charCodeAt(0) % colors.length;
    return colors[idx];
  };

  const getInitials = (name = "") =>
    name.split(" ").slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex pt-16 h-screen overflow-hidden">
        {/* ─── SIDEBAR ─── */}
        <aside
          className={`
            fixed top-16 left-0 h-[calc(100vh-4rem)] z-30 flex flex-col
            bg-white border-r border-slate-200 shadow-lg
            transition-all duration-300 ease-in-out
            ${sidebarOpen ? "w-72" : "w-0 lg:w-16"}
            overflow-hidden
          `}
        >
          {/* Sidebar header */}
          <div className={`flex items-center px-4 py-4 border-b border-slate-100 shrink-0 ${sidebarOpen ? "justify-between" : "justify-center"}`}>
            {sidebarOpen && (
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-indigo-600" />
                <span className="font-bold text-slate-800 text-sm tracking-wide uppercase">Your Messes</span>
              </div>
            )}
            <button
              type="button"
              onClick={() => setSidebarOpen((p) => !p)}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors"
            >
              {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>

          {/* Mess list */}
          <div className="flex-1 overflow-y-auto py-3 px-2 space-y-1">
            {messes.map((mess) => {
              const isActive = mess._id === activeMessId;
              const initials = getInitials(mess.name);
              const colorClass = getMessColor(mess.name);

              return (
                <button
                  key={mess._id}
                  type="button"
                  onClick={() => handleSelectMess(mess._id)}
                  title={!sidebarOpen ? mess.name : ""}
                  className={`
                    w-full flex items-center gap-3 rounded-xl px-2 py-2.5 transition-all group
                    ${isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                    }
                  `}
                >
                  {/* Avatar */}
                  <div className={`
                    shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold
                    ${isActive ? "bg-indigo-600 shadow-md shadow-indigo-200" : colorClass}
                  `}>
                    {initials || "M"}
                  </div>

                  {sidebarOpen && (
                    <div className="flex-1 text-left min-w-0">
                      <div className={`text-sm font-semibold truncate ${isActive ? "text-indigo-700" : "text-slate-700"}`}>
                        {mess.name}
                      </div>
                      <div className="text-xs text-slate-400 truncate">{mess.address}</div>
                    </div>
                  )}

                  {sidebarOpen && isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Add Mess button */}
          <div className="shrink-0 p-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => navigate("/mess-dashboard/add-mess")}
              className={`
                w-full flex items-center gap-2 rounded-xl px-3 py-2.5
                bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium
                transition-colors
                ${!sidebarOpen ? "justify-center" : "justify-start"}
              `}
              title={!sidebarOpen ? "Add Mess" : ""}
            >
              <Plus className="w-4 h-4 shrink-0" />
              {sidebarOpen && <span>Add Mess</span>}
            </button>
          </div>
        </aside>

        {/* ─── MAIN CONTENT ─── */}
        <main
          className={`
            flex-1 overflow-y-auto transition-all duration-300
            ${sidebarOpen ? "lg:ml-72" : "lg:ml-16"}
          `}
        >
          {/* Top bar (mobile hamburger) */}
          <div className="sticky top-0 z-10 bg-slate-50/80 backdrop-blur border-b border-slate-200 px-6 py-3 flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setSidebarOpen((p) => !p)}
              className="p-2 rounded-lg bg-white border border-slate-200 shadow-sm text-slate-600"
            >
              <MenuIcon className="w-4 h-4" />
            </button>
            {activeMess && (
              <span className="font-semibold text-slate-700 truncate">{activeMess.name}</span>
            )}
          </div>

          <div className="p-6 max-w-4xl mx-auto space-y-5">
            {/* Alerts */}
            {success && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                {success}
              </div>
            )}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                {error}
              </div>
            )}

            {/* Main card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {loading ? (
                <div className="flex items-center gap-3 text-slate-500 p-8">
                  <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                  Loading mess details...
                </div>
              ) : !activeMess ? (
                <div className="text-slate-500 p-8">No active mess selected.</div>
              ) : (
                <>
                  {/* Mess header */}
                  <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white">
                    <div className="flex items-center gap-4">
                      <img
                        src={activeMess.image || "https://res.cloudinary.com/dz1qj3x7h/image/upload/v1735681234/MealSphere/messDefaultImage.png"}
                        alt={activeMess.name}
                        className="w-16 h-16 rounded-xl object-cover border-2 border-white/30 shadow-lg"
                      />
                      <div>
                        <h1 className="text-2xl font-bold">{activeMess.name}</h1>
                        <p className="text-indigo-200 text-sm mt-0.5">{activeMess.address}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="p-6">
                    <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                      Manage
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <ActionButton
                        icon={<BookOpen className="w-5 h-5" />}
                        label="View / Update Menu"
                        description="Add or edit today's dishes"
                        color="blue"
                        onClick={openMenuModal}
                      />
                      <ActionButton
                        icon={<Users className="w-5 h-5" />}
                        label="Registered Members"
                        description="See who's enrolled"
                        color="green"
                        onClick={() => navigate(`/mess-dashboard/${activeMess._id}/registered-members`)}
                      />
                      <ActionButton
                        icon={<ClipboardList className="w-5 h-5" />}
                        label="Attendance"
                        description="Track daily attendance"
                        color="purple"
                        onClick={() => navigate(`/mess-dashboard/${activeMess._id}/attendance`)}
                      />
                      <ActionButton
                        icon={<BarChart2 className="w-5 h-5" />}
                        label="Stats"
                        description="View mess analytics"
                        color="amber"
                        onClick={() => navigate(`/mess-dashboard/${activeMess._id}/stats`)}
                      />
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={handleDeleteMess}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg border border-red-200 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete this mess
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* ─── MENU MODAL ─── */}
      {isMenuModalOpen && activeMess && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
              <div>
                <h2 className="text-lg font-bold text-slate-800">Update Menu</h2>
                <p className="text-sm text-slate-500">{activeMess.name}</p>
              </div>
              <button
                type="button"
                onClick={closeMenuModal}
                className="p-2 hover:bg-slate-100 rounded-lg text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleMenuSubmit} className="p-6 space-y-6">
              {["dayMeal", "nightMeal"].map((mealType) => (
                <div key={mealType} className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                    <h3 className="font-semibold text-slate-700">
                      {mealType === "dayMeal" ? "🌤 Lunch Menu" : "🌙 Dinner Menu"}
                    </h3>
                    <button
                      type="button"
                      onClick={() => addDish(mealType)}
                      className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Dish
                    </button>
                  </div>

                  <div className="p-4 space-y-3">
                    {menuForm[mealType].dishes.map((dish, index) => (
                      <div
                        key={`${mealType}-${index}`}
                        className="grid grid-cols-1 md:grid-cols-[1fr,100px,1fr,auto] gap-2 items-center"
                      >
                        <input
                          type="text"
                          value={dish.name}
                          onChange={(e) => handleMenuChange(e, mealType, index, "name")}
                          placeholder="Dish name"
                          className="px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                          required
                        />
                        <input
                          type="number"
                          min="0"
                          value={dish.price}
                          onChange={(e) => handleMenuChange(e, mealType, index, "price")}
                          placeholder="₹ Price"
                          className="px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                          required
                        />
                        <input
                          type="text"
                          value={dish.items}
                          onChange={(e) => handleMenuChange(e, mealType, index, "items")}
                          placeholder="Items (comma separated)"
                          className="px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        />
                        <button
                          type="button"
                          onClick={() => deleteDish(mealType, index)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeMenuModal}
                  className="px-5 py-2.5 text-sm border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium"
                >
                  Save Menu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Action Button Sub-component ───
const colorMap = {
  blue:   { bg: "bg-blue-50",   border: "border-blue-100",   icon: "bg-blue-100 text-blue-600",   text: "text-blue-700",   hover: "hover:bg-blue-50/80" },
  green:  { bg: "bg-emerald-50", border: "border-emerald-100", icon: "bg-emerald-100 text-emerald-600", text: "text-emerald-700", hover: "hover:bg-emerald-50/80" },
  purple: { bg: "bg-violet-50", border: "border-violet-100", icon: "bg-violet-100 text-violet-600", text: "text-violet-700", hover: "hover:bg-violet-50/80" },
  amber:  { bg: "bg-amber-50",  border: "border-amber-100",  icon: "bg-amber-100 text-amber-600",  text: "text-amber-700",  hover: "hover:bg-amber-50/80" },
};

const ActionButton = ({ icon, label, description, color, onClick }) => {
  const c = colorMap[color] || colorMap.blue;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-4 p-4 rounded-xl border ${c.bg} ${c.border} ${c.hover} text-left transition-all group w-full`}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${c.icon}`}>
        {icon}
      </div>
      <div>
        <div className={`font-semibold text-sm ${c.text}`}>{label}</div>
        <div className="text-xs text-slate-400 mt-0.5">{description}</div>
      </div>
    </button>
  );
};

export default MessDashboard;