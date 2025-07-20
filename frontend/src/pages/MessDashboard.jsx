
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/MessDashboardNavbar";
import axios from "axios";
import Card from "../components/Card";

const MessRegistrationPage = () => {
  const [menuForm, setMenuForm] = useState({
    dayMeal: { dishes: [{ name: "", price: "", items: "" }] },
    nightMeal: { dishes: [{ name: "", price: "", items: "" }] },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [messData, setMessData] = useState([]);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [selectedMessId, setSelectedMessId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMessData();
  }, []);

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const fetchMessData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/mess/owner/messes`,
        { withCredentials: true }
      );
      setMessData(response.data.messes);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch messes");
    } finally {
      setLoading(false);
    }
  };

  const handleMenuChange = (e, mealType, index, field) => {
    const { value } = e.target;
    setMenuForm((prev) => {
      const updatedDishes = [...prev[mealType].dishes];
      if (field === "items") {
        updatedDishes[index] = {
          ...updatedDishes[index],
          [field]: value.split(",").map((item) => item.trim()),
        };
      } else {
        updatedDishes[index] = { ...updatedDishes[index], [field]: value };
      }
      return {
        ...prev,
        [mealType]: { dishes: updatedDishes },
      };
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
      const updatedDishes = [...prev[mealType].dishes];
      updatedDishes.splice(index, 1);
      return {
        ...prev,
        [mealType]: { dishes: updatedDishes },
      };
    });
  };

  const handleDelete = async (messId) => {
    if (!confirm("Are you sure you want to delete this mess?")) return;
    try {
      setLoading(true);
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/mess/${messId}`,
        { withCredentials: true }
      );
      setMessData((prev) => prev.filter((mess) => mess._id !== messId));
      setSuccess("Mess deleted successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete mess");
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (messId, currentMenu) => {
    setSelectedMessId(messId);
    setMenuForm(
      currentMenu || {
        dayMeal: { dishes: [{ name: "", price: "", items: "" }] },
        nightMeal: { dishes: [{ name: "", price: "", items: "" }] },
      }
    );
    setIsMenuModalOpen(true);
  };

  const handleMenuSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/mess/${selectedMessId}`,
        { menu: menuForm },
        { withCredentials: true }
      );
      setSuccess(response.data.message);
      setMessData((prev) =>
        prev.map((mess) =>
          mess._id === selectedMessId ? { ...mess, menu: menuForm } : mess
        )
      );
      setIsMenuModalOpen(false);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update menu");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsMenuModalOpen(false);
    setError("");
    setSuccess("");
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="col-span-full flex justify-center items-center p-12">
          <div className="flex flex-col items-center animate-fadeIn">
            <svg
              className="animate-spin h-10 w-10 text-blue-600 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="text-gray-600">Loading your messes...</p>
          </div>
        </div>
      );
    }

    if (messData.length === 0) {
      return (
        <div className="col-span-full bg-white rounded-xl shadow-lg p-8 text-center animate-scaleIn">
          <div className="flex justify-center mb-4 animate-bounce">
            <span className="text-4xl">🍽️</span>
          </div>
          <p className="text-gray-600 text-xl mb-2">No messes registered yet.</p>
          <p className="text-gray-500">Click on "Add New Mess" to get started.</p>
        </div>
      );
    }

    return messData.map((mess) => (
      <Card
        key={mess._id}
        _id={mess._id}  
        name={mess.name}
        address={mess.address}
        liveLocation={mess.liveLocation}
        menu={mess.menu}
        image={mess.image}
        onDelete={() => handleDelete(mess._id)}
        onViewDetails={() => handleViewDetails(mess._id, mess.menu)}
        onViewMembers={() => navigate(`/mess-dashboard/${mess._id}/registered-members`)}
        className="transform transition-all hover:scale-105 hover:shadow-xl"
      />
    ));
  };

  return (
    <div className="flex flex-col p-5 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <Navbar />

      <div className="container mx-auto px-4 py-8 mt-7 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl p-6 mb-6 mt-4 relative z-20 animate-slideIn">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="mr-2">🍽️</span> Your Registered Messes
            </h2>
            <button
              onClick={() => navigate("./add-mess")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center animate-pulse-slow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add New Mess
            </button>
          </div>
        </div>

        {success && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg shadow-md flex items-center animate-slideUp">
            <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p>{success}</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg shadow-md flex items-center animate-slideUp">
            <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p>{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          {renderContent()}
        </div>
      </div>

      {isMenuModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all animate-scaleIn">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <span className="mr-2">📝</span> Update Today's Menu
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleMenuSubmit} className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 animate-fadeIn">
                <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                  <span className="mr-2">☀️</span> Day Meal
                </h3>
                {menuForm.dayMeal.dishes.map((dish, index) => (
                  <div
                    key={index}
                    className="space-y-3 bg-white border border-blue-200 p-4 rounded-lg mt-3 shadow-sm transform transition-all hover:shadow-md"
                  >
                    <div className="flex justify-between items-start">
                      <div className="font-medium text-blue-700">Dish #{index + 1}</div>
                      <button
                        type="button"
                        onClick={() => deleteDish("dayMeal", index)}
                        className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Dish Name"
                        value={dish.name}
                        onChange={(e) => handleMenuChange(e, "dayMeal", index, "name")}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                      />
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <input
                        type="number"
                        placeholder="Price"
                        value={dish.price}
                        onChange={(e) => handleMenuChange(e, "dayMeal", index, "price")}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                      />
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Items (comma-separated)"
                        value={dish.items instanceof Array ? dish.items.join(", ") : dish.items}
                        onChange={(e) => handleMenuChange(e, "dayMeal", index, "items")}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addDish("dayMeal")}
                  className="mt-3 text-blue-600 hover:text-blue-800 font-medium flex items-center transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add New Dish
                </button>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 animate-fadeIn animate-delay-200">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                  <span className="mr-2">🌙</span> Night Meal
                </h3>
                {menuForm.nightMeal.dishes.map((dish, index) => (
                  <div
                    key={index}
                    className="space-y-3 bg-white border border-indigo-200 p-4 rounded-lg mt-3 shadow-sm transform transition-all hover:shadow-md"
                  >
                    <div className="flex justify-between items-start">
                      <div className="font-medium text-indigo-700">Dish #{index + 1}</div>
                      <button
                        type="button"
                        onClick={() => deleteDish("nightMeal", index)}
                        className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Dish Name"
                        value={dish.name}
                        onChange={(e) => handleMenuChange(e, "nightMeal", index, "name")}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <input
                        type="number"
                        placeholder="Price"
                        value={dish.price}
                        onChange={(e) => handleMenuChange(e, "nightMeal", index, "price")}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Items (comma-separated)"
                        value={dish.items instanceof Array ? dish.items.join(", ") : dish.items}
                        onChange={(e) => handleMenuChange(e, "nightMeal", index, "items")}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addDish("nightMeal")}
                  className="mt-3 text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add New Dish
                </button>
              </div>

              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-md animate-shake">
                  <div className="flex">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <p>{error}</p>
                  </div>
                </div>
              )}

              {success && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-3 rounded-md animate-slideUp">
                  <div className="flex">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p>{success}</p>
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Updating...
                    </span>
                  ) : (
                    "Update Menu"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessRegistrationPage;