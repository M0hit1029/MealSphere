// components/Card.jsx
import React from "react";

const Card = ({ name, address, liveLocation, menu, onDelete, onViewDetails }) => {
  const commonImage = "https://via.placeholder.com/300x150?text=Mess+Image";
    console.log(name, address, liveLocation, menu, onDelete, onViewDetails);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="w-full h-40">
        <img
          src={commonImage}
          alt={`${name} mess`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="flex items-start space-x-2">
          <span className="text-gray-500 font-medium">Address:</span>
          <p className="text-gray-600">{address}</p>
        </div>
        <div className="flex items-start space-x-2">
          <span className="text-gray-500 font-medium">Location:</span>
          <p className="text-gray-600">
            {liveLocation.coordinates[0]}, {liveLocation.coordinates[1]}
          </p>
        </div>
        {/* Display Menu if it exists */}
        {menu && (
          <div className="space-y-1">
            {menu.dayMeal?.dishes?.length > 0 && (
              <div>
                <span className="text-gray-500 font-medium">Day Meal:</span>
                <ul className="text-gray-600 list-disc pl-5">
                  {menu.dayMeal.dishes.map((dish, index) => (
                    <li key={index}>
                      {dish.name} - ₹{dish.price} ({dish.items.join(", ")})
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {menu.nightMeal?.dishes?.length > 0 && (
              <div>
                <span className="text-gray-500 font-medium">Night Meal:</span>
                <ul className="text-gray-600 list-disc pl-5">
                  {menu.nightMeal.dishes.map((dish, index) => (
                    <li key={index}>
                      {dish.name} - ₹{dish.price} ({dish.items.join(", ")})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        <div className="pt-2 flex space-x-2">
          <button
            onClick={onViewDetails}
            className="flex-1 bg-blue-500 text-white px-3 py-1.5 rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
          >
            Add/Update Menu
          </button>
          <button
            onClick={onDelete}
            className="flex-1 bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-600 transition-colors duration-200 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;