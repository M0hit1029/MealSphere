import { Clock, MapPin, Star, Calendar, Utensils, Hourglass } from "lucide-react";
import {useState} from "react";
const MessCard = ({ mess, onMonthlyBooking, onDailyReservation, isReservationAllowed, reservedMesses }) => {
  const { name, menu, address, _id, image } = mess;
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
  const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:3000";
  const imageURL = image?.startsWith("/uploads")
    ? `${baseURL}${image}`
    : image || "https://res.cloudinary.com/dz1qj3x7h/image/upload/v1735681234/MealSphere/messDefaultImage.png";

  return (
    <div
      className={`card group relative overflow-hidden transition-all duration-500 ${
        isHovered ? "scale-105 shadow-2xl" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={imageURL}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 animate-fadeIn">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-semibold">4.5</span>
        </div>
      </div>
      <div className="p-6 relative z-10">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="truncate">{address || "No address available"}</span>
          </div>
        </div>
        <div className="space-y-4 mb-6">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200/50">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
              <h4 className="text-sm font-semibold text-yellow-800">Lunch</h4>
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
              <p className="text-sm text-gray-500 italic">No lunch available</p>
            )}
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200/50">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              <h4 className="text-sm font-semibold text-blue-800">Dinner</h4>
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
              <p className="text-sm text-gray-500 italic">No dinner available</p>
            )}
          </div>
        </div>
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
                Lunch Reserved ✓
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
                Reserve Lunch
              </button>
            )}
            {reservedForNight ? (
              <div className="text-center py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600">
                Dinner Reserved ✓
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
                Reserve Dinner
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessCard;