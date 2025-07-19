import React from "react";

const Card = ({
  name,
  address,
  liveLocation,
  menu,
  onDelete,
  onViewDetails,
  onViewMembers,
  className,
  image
}) => {
  // Convert liveLocation object to string if it's an object
  const displayLocation = liveLocation?.coordinates
    ? `Lat: ${liveLocation.coordinates[1]}, Lng: ${liveLocation.coordinates[0]}`
    : liveLocation || "Not provided";

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ${className}`}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Address:</span> {address}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Location:</span> {displayLocation}
        </p>
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