import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  name,
  address,
  liveLocation,
  menu,
  onDelete,
  onViewDetails,
  onViewMembers,
  className,
  image,
  _id,
}) => {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:3000";
  const imageURL = image?.startsWith("/uploads")
    ? `${baseURL}${image}`
    : image || "https://res.cloudinary.com/dz1qj3x7h/image/upload/v1735681234/MealSphere/messDefaultImage.png";

  const displayLocation = liveLocation?.coordinates
    ? `Lat: ${liveLocation.coordinates[1]}, Lng: ${liveLocation.coordinates[0]}`
    : liveLocation || "Not provided";

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 flex flex-col ${className}`}
      style={{ minHeight: "420px" }} // Ensures card height consistency
    >
      <img src={imageURL} alt={name} className="w-full h-40 object-top" />

      <div className="flex flex-col justify-between p-6 flex-grow">
        {/* Content Section */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-600 mb-1 line-clamp-2 break-words">
            <span className="font-semibold">Address:</span> {address}
          </p>
          <p className="text-gray-600 mb-4 line-clamp-2 break-words">
            <span className="font-semibold">Location:</span> {displayLocation}
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={onViewDetails}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Menu
          </button>
          <button
            onClick={onViewMembers}
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            View Members
          </button>
          <button
            onClick={() => navigate(`/mess-dashboard/${_id}/attendance`)}
            className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Attendance
          </button>
          <button
            onClick={onDelete}
            className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
