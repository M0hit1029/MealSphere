import { useState, useEffect } from "react";
import Navbar from "../components/UserDashboardNavbar";
import axios from "axios";

const MessCard = ({ mess, onMonthlyBooking, onDailyReservation, isReservationAllowed, reservedMesses }) => {
  const { name, menu, address, _id } = mess;

  const dayDishes = menu?.dayMeal?.dishes || [];
  const nightDishes = menu?.nightMeal?.dishes || [];
  const hasSpots = true;

  const reservedForDay = reservedMesses.some(
    (res) => res.messId === _id && res.mealType === "day"
  );
  const reservedForNight = reservedMesses.some(
    (res) => res.messId === _id && res.mealType === "night"
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center transition-transform hover:scale-105 hover:shadow-lg w-full md:max-w-xl lg:max-w-2xl mx-auto">
      <img
        src={
          "https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={name}
        className="w-full h-36 object-cover mb-3 rounded-lg"
      />
      <h3 className="text-xl font-bold text-gray-800 text-center mb-1">{name}</h3>
      <p className="text-sm text-gray-600 text-center mb-3">{address || "No address available"}</p>
      <div className="w-full space-y-3">
        <div className="bg-gray-50 p-3 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Day Meal</h4>
          {dayDishes.length > 0 ? (
            <ul className="space-y-1">
              {dayDishes.map((dish, index) => (
                <li key={index} className="text-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{dish.name}</span>
                    <span className="text-sm font-semibold text-green-600">₹{dish.price}</span>
                  </div>
                  {dish.items?.length > 0 && (
                    <p className="text-xs text-gray-500 italic mt-0.5">Items: {dish.items.join(", ")}</p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 italic">No day meal available</p>
          )}
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Night Meal</h4>
          {nightDishes.length > 0 ? (
            <ul className="space-y-1">
              {nightDishes.map((dish, index) => (
                <li key={index} className="text-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{dish.name}</span>
                    <span className="text-sm font-semibold text-green-600">₹{dish.price}</span>
                  </div>
                  {dish.items?.length > 0 && (
                    <p className="text-xs text-gray-500 italic mt-0.5">Items: {dish.items.join(", ")}</p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 italic">No night meal available</p>
          )}
        </div>
      </div>
      <button
        onClick={() => onMonthlyBooking(name)}
        className={`w-full px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors mb-3 ${
          !hasSpots ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={!hasSpots}
      >
        Enroll Monthly
      </button>
      <div className="flex gap-3 w-full justify-center">
        {reservedForDay ? (
          <p className="flex-1 text-sm text-gray-600 text-center">Already Reserved for Day</p>
        ) : (
          <button
            onClick={() => onDailyReservation(mess._id, "day")}
            className={`flex-1 px-4 py-1.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors ${
              !hasSpots || !isReservationAllowed.day
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={!hasSpots || !isReservationAllowed.day}
          >
            Reserve for Day
          </button>
        )}
        {reservedForNight ? (
          <p className="flex-1 text-sm text-gray-600 text-center">Already Reserved for Night</p>
        ) : (
          <button
            onClick={() => onDailyReservation(mess._id, "night")}
            className={`flex-1 px-4 py-1.5 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors ${
              !hasSpots || !isReservationAllowed.night
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={!hasSpots || !isReservationAllowed.night}
          >
            Reserve for Night
          </button>
        )}
      </div>
    </div>
  );
};

function UserDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("Price ascending");
  const [messData, setMessData] = useState([]);
  const [reservedMesses, setReservedMesses] = useState([]);
  const [enrolledMess, setEnrolledMess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [enrollmentError, setEnrollmentError] = useState("");
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [isReservationAllowed, setIsReservationAllowed] = useState({
    day: true,
    night: true,
  });

  const checkReservationTime = () => {
    const now = new Date();
    const currentHour = now.getHours();
    setIsReservationAllowed({
      day: currentHour < 9, // Before 9 AM
      night: currentHour < 18, // Before 6 PM
    });
  };

  useEffect(() => {
    checkReservationTime();
    const interval = setInterval(checkReservationTime, 60000); // Update every minute
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          fetchMesses(latitude, longitude);
          fetchReservations();
          fetchEnrolledMess();
        },
        (err) => {
          setError(
            "Unable to get your location. Please provide coordinates manually or try again."
          );
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const fetchMesses = async (lat, lng) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/mess/get-all-mess?lat=18.46236506&lng=73.85346602`,
        { withCredentials: true }
      );
      setMessData(response.data.messes);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch messes.");
    } finally {
      setLoading(false);
    }
  };

  const fetchReservations = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/reservations/today`,
        { withCredentials: true }
      );
      setReservedMesses(response.data.reservations || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch reservations.");
    }
  };

  const fetchEnrolledMess = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/mess/get-enrolled-mess`,
        { withCredentials: true }
      );
      setEnrolledMess(response.data.userMess);
    } catch (err) {
      setEnrollmentError(
        err.response?.data?.message || "Failed to fetch enrolled mess."
      );
    }
  };

  const handleCancelReservation = async (reservationId, messName, mealType) => {
    const now = new Date();
    const currentHour = now.getHours();
    if (mealType === 'day' && currentHour >= 9) {
      alert("Cannot cancel day meal reservation after 9 AM.");
      return;
    }
    if (mealType === 'night' && currentHour >= 18) {
      alert("Cannot cancel night meal reservation after 6 PM.");
      return;
    }

    if (window.confirm(`Are you sure you want to cancel your reservation at ${messName}?`)) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_BASE_URL}/user/reservations/cancel/${reservationId}`,
          { withCredentials: true }
        );
        alert(`Reservation at ${messName} cancelled successfully!`);
        fetchReservations();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to cancel reservation.");
      }
    }
  };

  const sortedMessOptions = [...messData].sort((a, b) => {
    const priceA = parseInt(a.price?.replace(/[^0-9]/g, "") || 0);
    const priceB = parseInt(b.price?.replace(/[^0-9]/g, "") || 0);
    if (sortOption === "Price ascending") return priceA - priceB;
    if (sortOption === "Price descending") return priceB - priceA;
    return 0;
  });

  const filteredMessOptions = sortedMessOptions.filter((mess) =>
    mess.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMonthlyBooking = async (messName) => {
    const selectedMess = messData.find((mess) => mess.name === messName);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/mess/${selectedMess._id}/join`,
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        alert(
          `To join the ${messName}, please visit the mess owner at their location (${response.data.mess.address}) and pay ₹${selectedMess.price}.`
        );
      }
    } catch (err) {
      if (err.response?.status === 400) {
        alert("Already registered for a mess!");
      } else {
        alert("Server error");
      }
    }
  };

  const handleDailyReservation = async (messId, time) => {
    const selectedMess = messData.find((mess) => mess._id === messId);
    if (
      window.confirm(
        `Are you sure you want to reserve a meal for today at ${selectedMess.name}? You can pay when you go to eat.`
      )
    ) {
      try {
        await axios.post(
          `${import.meta.env.VITE_BASE_URL}/user/reserve`,
          {
            messId: selectedMess._id,
            mealType: time,
          },
          { withCredentials: true }
        );
        alert(
          `Reservation confirmed for today at ${selectedMess.name}! Please visit ${selectedMess.name} to eat and pay.`
        );
        fetchReservations();
      } catch (err) {
        alert(err.response?.data?.message || "Failed to reserve meal.");
      }
    }
  };

  const hasDayReservation = reservedMesses.some((res) => res.mealType === "day");
  const hasNightReservation = reservedMesses.some((res) => res.mealType === "night");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-7">
      <Navbar />
      <div className="flex flex-1 flex-col mt-7 p-6">
        {/* Enrolled Mess Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Enrolled Mess</h2>
          {loading ? (
            <p className="text-gray-600">Loading enrolled mess...</p>
          ) : enrollmentError ? (
            <p className="text-red-600">
              {enrollmentError === "User is not enrolled in any mess"
                ? "You are not enrolled in any mess."
                : enrollmentError === "Request Not accepted yet"
                ? "Your enrollment request is pending approval."
                : enrollmentError}
            </p>
          ) : enrolledMess ? (
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {enrolledMess.messId.name || "Unknown Mess"}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {enrolledMess.messId.address || "No address available"}
              </p>
              <p className="text-sm font-medium text-blue-600">
                Enrolled for monthly meals
              </p>
            </div>
          ) : (
            <p className="text-gray-600">No enrolled mess found.</p>
          )}
        </div>

        {/* Today's Reservations Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Reservations for Today</h2>
          {loading ? (
            <p className="text-gray-600">Loading reservations...</p>
          ) : reservedMesses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {reservedMesses.map((reservation, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {reservation.messName || "Unknown Mess"}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {reservation.address || "No address available"}
                  </p>
                  <p className="text-sm font-medium text-green-600 mb-3">
                    Reserved for: {reservation.mealType === "day" ? "Day" : "Night"}
                  </p>
                  <button
                    onClick={() => handleCancelReservation(reservation.reservationId, reservation.messName, reservation.mealType)}
                    className={`px-4 py-1.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors ${
                      (reservation.mealType === "day" && new Date().getHours() >= 9) ||
                      (reservation.mealType === "night" && new Date().getHours() >= 18)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={
                      (reservation.mealType === "day" && new Date().getHours() >= 9) ||
                      (reservation.mealType === "night" && new Date().getHours() >= 18)
                    }
                  >
                    Cancel Reservation
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No reservations for today.</p>
          )}
        </div>

        {/* Search and Sort */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search mess options..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>
          <div className="flex gap-2">
            {["Price ascending", "Price descending"].map((option) => (
              <button
                key={option}
                className={`px-4 py-2 border rounded-lg shadow-sm ${
                  sortOption === option ? "bg-gray-200" : "bg-white"
                } hover:bg-gray-100 transition-colors`}
                onClick={() => setSortOption(option)}
              >
                {option === "Price ascending" ? "Price ↑" : "Price ↓"}
              </button>
            ))}
          </div>
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="text-center text-gray-600 p-6">Loading messes...</div>
        )}
        {error && <div className="text-center text-red-600 p-6">{error}</div>}

        {/* Mess Options Grid with Reservation Status */}
        {!loading && !error && (
          <div>
            {hasDayReservation && (
              <p className="text-center text-green-600 mb-4">
                You have already reserved a mess for day today.
              </p>
            )}
            {hasNightReservation && (
              <p className="text-center text-green-600 mb-4">
                You have already reserved a mess for night today.
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMessOptions.length > 0 ? (
                filteredMessOptions.map((mess, index) => (
                  <MessCard
                    key={index}
                    mess={mess}
                    onMonthlyBooking={handleMonthlyBooking}
                    onDailyReservation={handleDailyReservation}
                    isReservationAllowed={isReservationAllowed}
                    reservedMesses={reservedMesses}
                  />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-600">
                  No messes found within 5km.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDashboard;