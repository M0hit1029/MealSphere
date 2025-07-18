import { useState, useEffect } from "react";
import Navbar from "../components/UserDashboardNavbar";
import { Clock, MapPin, Star, Calendar, Utensils, Hourglass } from "lucide-react"; // Added Hourglass icon
import axios from "axios";

const MessCard = ({ mess, onMonthlyBooking, onDailyReservation, isReservationAllowed, reservedMesses }) => {
  const { name, menu, address, _id } = mess;
  const [isHovered, setIsHovered] = useState(false);

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
    <div 
      className={`card group relative overflow-hidden transition-all duration-500 ${
        isHovered ? 'scale-105 shadow-2xl' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Image with Overlay */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src="https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating Rating */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 animate-fadeIn">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-semibold">4.5</span>
        </div>
      </div>

      <div className="p-6 relative z-10">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="truncate">{address || "No address available"}</span>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-4 mb-6">
          {/* Day Meal */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200/50">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
              <h4 className="text-sm font-semibold text-yellow-800">Day Meal</h4>
            </div>
            {dayDishes.length > 0 ? (
              <div className="space-y-2">
                {dayDishes.slice(0, 2).map((dish, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{dish.name}</span>
                    <span className="text-sm font-bold text-green-600">₹{dish.price}</span>
                  </div>
                ))}
                {dayDishes.length > 2 && (
                  <p className="text-xs text-gray-500">+{dayDishes.length - 2} more items</p>
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">No day meal available</p>
            )}
          </div>

          {/* Night Meal */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200/50">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              <h4 className="text-sm font-semibold text-blue-800">Night Meal</h4>
            </div>
            {nightDishes.length > 0 ? (
              <div className="space-y-2">
                {nightDishes.slice(0, 2).map((dish, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{dish.name}</span>
                    <span className="text-sm font-bold text-green-600">₹{dish.price}</span>
                  </div>
                ))}
                {nightDishes.length > 2 && (
                  <p className="text-xs text-gray-500">+{nightDishes.length - 2} more items</p>
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">No night meal available</p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => onMonthlyBooking(name)}
            className={`w-full btn-primary flex items-center justify-center gap-2 ${
              !hasSpots ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!hasSpots}
          >
            <Calendar className="w-4 h-4" />
            Enroll Monthly
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            {reservedForDay ? (
              <div className="text-center py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600">
                Day Reserved ✓
              </div>
            ) : (
              <button
                onClick={() => onDailyReservation(mess._id, "day")}
                className={`btn-success text-sm flex items-center justify-center gap-1 ${
                  !hasSpots || !isReservationAllowed.day
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={!hasSpots || !isReservationAllowed.day}
              >
                <Utensils className="w-3 h-3" />
                Day Meal
              </button>
            )}
            
            {reservedForNight ? (
              <div className="text-center py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600">
                Night Reserved ✓
              </div>
            ) : (
              <button
                onClick={() => onDailyReservation(mess._id, "night")}
                className={`bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm flex items-center justify-center gap-1 ${
                  !hasSpots || !isReservationAllowed.night
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={!hasSpots || !isReservationAllowed.night}
              >
                <Utensils className="w-3 h-3" />
                Night Meal
              </button>
            )}
          </div>
        </div>
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
  const [showAllMesses, setShowAllMesses] = useState(false);

  const checkReservationTime = () => {
    const now = new Date();
    const currentHour = now.getHours();
    setIsReservationAllowed({
      day: currentHour < 9,
      night: currentHour < 18,
    });
  };

  useEffect(() => {
    checkReservationTime();
    const interval = setInterval(checkReservationTime, 60000);
    
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
          setError("Unable to get your location. Please provide coordinates manually or try again.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
    
    return () => clearInterval(interval);
  }, []);

  const fetchMesses = async (lat, lng) => {
    try {
      setLoading(true);
      let response;
      if (showAllMesses) {
        response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/mess/get-all-mess`,
          { withCredentials: true }
        );
      } else {
        response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/mess/get-mess-by-latlong?lat=${lat}&lng=${lng}`,
          { withCredentials: true }
        );
      }
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
      setEnrollmentError(err.response?.data?.message || "Failed to fetch enrolled mess.");
      // Store userMess even if the request is pending
      if (err.response?.data?.message === "Request Not accepted yet" && err.response?.data?.userMess) {
        setEnrolledMess(err.response.data.userMess);
      }
    }
  };

  const handleToggleMessView = () => {
    setShowAllMesses((prev) => !prev);
    if (location.lat && location.lng) {
      fetchMesses(location.lat, location.lng);
    } else {
      setError("Location not available. Please enable geolocation to fetch messes.");
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
        alert(`To join the ${messName}, please visit the mess owner at their location (${response.data.mess.address}) and pay ₹${selectedMess.price}.`);
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
    if (window.confirm(`Are you sure you want to reserve a meal for today at ${selectedMess.name}? You can pay when you go to eat.`)) {
      try {
        await axios.post(
          `${import.meta.env.VITE_BASE_URL}/user/reserve`,
          {
            messId: selectedMess._id,
            mealType: time,
          },
          { withCredentials: true }
        );
        alert(`Reservation confirmed for today at ${selectedMess.name}! Please visit ${selectedMess.name} to eat and pay.`);
        fetchReservations();
      } catch (err) {
        alert(err.response?.data?.message || "Failed to reserve meal.");
      }
    }
  };

  const hasDayReservation = reservedMesses.some((res) => res.mealType === "day");
  const hasNightReservation = reservedMesses.some((res) => res.mealType === "night");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      <Navbar />
      
      <div className="flex flex-1 flex-col mt-20 p-6">
        {/* Time-based Reservation Alert */}
        <div className="mb-6 animate-slideIn">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-xl p-4 flex items-center gap-3">
            <Clock className="w-5 h-5 text-amber-600" />
            <div className="text-amber-800">
              <span className="font-semibold">Reservation Times:</span>
              <span className="ml-2">Day meals before 9 AM • Night meals before 6 PM</span>
            </div>
          </div>
        </div>

        {/* Enrolled Mess Section */}
        <div className="mb-8 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gradient mb-6 flex items-center gap-2">
            <Star className="w-8 h-8 text-yellow-500" />
            Your Enrolled Mess
          </h2>
          
          {loading ? (
            <div className="card p-8 text-center">
              <div className="spinner mx-auto mb-4"></div>
              <p className="text-gray-600">Loading enrolled mess...</p>
            </div>
          ) : enrollmentError === "Request Not accepted yet" && enrolledMess ? (
            // New card for pending enrollment request
            <div className="card p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  <Hourglass className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {enrolledMess.messId?.name || "Pending Mess"}
                  </h3>
                  <p className="text-gray-600 mb-2 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {enrolledMess.messId?.address || "No address available"}
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    Enrollment Pending
                  </span>
                </div>
              </div>
            </div>
          ) : enrollmentError ? (
            <div className="card p-6 text-center">
              <div className="text-6xl mb-4">🏠</div>
              <p className="text-gray-600 text-lg">
                {enrollmentError === "User is not enrolled in any mess"
                  ? "You are not enrolled in any mess yet."
                  : enrollmentError}
              </p>
            </div>
          ) : enrolledMess ? (
            <div className="card p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {enrolledMess.messId.name?.charAt(0) || "M"}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {enrolledMess.messId.name || "Unknown Mess"}
                  </h3>
                  <p className="text-gray-600 mb-2 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {enrolledMess.messId.address || "No address available"}
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Monthly Member
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Today's Reservations Section */}
        <div className="mb-8 animate-fadeIn animate-delay-200">
          <h2 className="text-3xl font-bold text-gradient mb-6 flex items-center gap-2">
            <Calendar className="w-8 h-8 text-blue-500" />
            Today's Reservations
          </h2>
          
          {loading ? (
            <div className="card p-8 text-center">
              <div className="spinner mx-auto mb-4"></div>
              <p className="text-gray-600">Loading reservations...</p>
            </div>
          ) : reservedMesses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reservedMesses.map((reservation, index) => (
                <div
                  key={index}
                  className="card p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 animate-scaleIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      reservation.mealType === 'day' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}>
                      <Utensils className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{reservation.messName || "Unknown Mess"}</h3>
                      <p className="text-sm text-gray-600">{reservation.mealType === "day" ? "Day Meal" : "Night Meal"}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleCancelReservation(reservation.reservationId, reservation.messName, reservation.mealType)}
                    className={`w-full btn-danger text-sm ${
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
            <div className="card p-8 text-center">
              <div className="text-6xl mb-4 animate-bounce">📅</div>
              <p className="text-gray-600 text-lg">No reservations for today.</p>
            </div>
          )}
        </div>

        {/* Search, Sort, and Toggle Mess View */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 animate-slideIn animate-delay-300">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search mess options..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 pl-12 bg-white/80 backdrop-blur-sm border-2 border-transparent rounded-full shadow-lg focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </div>
          </div>
          
          <div className="flex gap-3">
            {["Price ascending", "Price descending"].map((option) => (
              <button
                key={option}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  sortOption === option 
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
                    : "bg-white/80 text-gray-700 hover:bg-white shadow-md hover:shadow-lg"
                }`}
                onClick={() => setSortOption(option)}
              >
                {option === "Price ascending" ? "Price ↑" : "Price ↓"}
              </button>
            ))}
            <button
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                showAllMesses
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-white shadow-md hover:shadow-lg"
              }`}
              onClick={handleToggleMessView}
            >
              {showAllMesses ? "Show Nearby Messes" : "Show All Messes"}
            </button>
          </div>
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="text-center p-12">
            <div className="spinner mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Loading delicious options...</p>
          </div>
        )}
        
        {error && (
          <div className="card p-8 text-center bg-red-50 border-red-200">
            <div className="text-6xl mb-4">⚠️</div>
            <p className="text-red-600 text-lg">{error}</p>
          </div>
        )}

        {/* Mess Options Grid */}
        {!loading && !error && (
          <div className="animate-fadeIn animate-delay-500">
            {(hasDayReservation || hasNightReservation) && (
              <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-xl">
                <div className="flex items-center gap-2 text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">
                    {hasDayReservation && hasNightReservation 
                      ? "You have reservations for both day and night meals today!"
                      : hasDayReservation 
                      ? "You have a day meal reservation today!"
                      : "You have a night meal reservation today!"}
                  </span>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMessOptions.length > 0 ? (
                filteredMessOptions.map((mess, index) => (
                  <div
                    key={index}
                    className="animate-scaleIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <MessCard
                      mess={mess}
                      onMonthlyBooking={handleMonthlyBooking}
                      onDailyReservation={handleDailyReservation}
                      isReservationAllowed={isReservationAllowed}
                      reservedMesses={reservedMesses}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-full card p-12 text-center">
                  <div className="text-6xl mb-4 animate-bounce">🔍</div>
                  <p className="text-gray-600 text-xl">
                    {showAllMesses ? "No messes found." : "No messes found within 5km."}
                  </p>
                  <p className="text-gray-500 mt-2">
                    {showAllMesses
                      ? "Try adjusting your search or check back later."
                      : "Try adjusting your search or switch to view all messes."}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDashboard;