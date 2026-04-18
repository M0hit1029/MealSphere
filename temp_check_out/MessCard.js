(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // frontend/src/components/MessCard.jsx
  var import_lucide_react = __require("lucide-react");
  var import_react = __require("react");
  var import_meta = {};
  var MessCard = ({ mess, onMonthlyBooking, onDailyReservation, isReservationAllowed, reservedMesses }) => {
    const { name, menu, address, _id, image } = mess;
    const [isHovered, setIsHovered] = (0, import_react.useState)(false);
    const dayDishes = menu?.dayMeal?.dishes || [];
    const nightDishes = menu?.nightMeal?.dishes || [];
    const hasDayMenu = dayDishes.length > 0;
    const hasNightMenu = nightDishes.length > 0;
    const hasSpots = true;
    const reservedForDay = reservedMesses.some(
      (res) => res.messId === _id && res.mealType === "day"
    );
    const reservedForNight = reservedMesses.some(
      (res) => res.messId === _id && res.mealType === "night"
    );
    const baseURL = import_meta.env.VITE_BASE_URL || "http://localhost:3000";
    const imageURL = image?.startsWith("/uploads") ? `${baseURL}${image}` : image || "https://res.cloudinary.com/dz1qj3x7h/image/upload/v1735681234/MealSphere/messDefaultImage.png";
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `card group relative overflow-hidden transition-all duration-500 ${isHovered ? "scale-105 shadow-2xl" : ""}`,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false)
      },
      /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
      /* @__PURE__ */ React.createElement("div", { className: "relative overflow-hidden rounded-t-xl" }, /* @__PURE__ */ React.createElement(
        "img",
        {
          src: imageURL,
          alt: name,
          className: "w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        }
      ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }), /* @__PURE__ */ React.createElement("div", { className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 animate-fadeIn" }, /* @__PURE__ */ React.createElement(import_lucide_react.Star, { className: "w-4 h-4 text-yellow-500 fill-current" }), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-semibold" }, "4.5"))),
      /* @__PURE__ */ React.createElement("div", { className: "p-6 relative z-10" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300" }, name), /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-gray-600 text-sm" }, /* @__PURE__ */ React.createElement(import_lucide_react.MapPin, { className: "w-4 h-4 mr-1" }), /* @__PURE__ */ React.createElement("span", { className: "truncate" }, address || "No address available"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse" }), /* @__PURE__ */ React.createElement("h4", { className: "text-sm font-semibold text-yellow-800" }, "Lunch")), dayDishes.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, dayDishes.slice(0, 2).map((dish, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-gray-700" }, dish.name), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-green-600" }, "\u20B9", dish.price))), dayDishes.length > 2 && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, "+", dayDishes.length - 2, " more items")) : /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 italic" }, "No lunch available")), /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse" }), /* @__PURE__ */ React.createElement("h4", { className: "text-sm font-semibold text-blue-800" }, "Dinner")), nightDishes.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, nightDishes.slice(0, 2).map((dish, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-gray-700" }, dish.name), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-green-600" }, "\u20B9", dish.price))), nightDishes.length > 2 && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, "+", nightDishes.length - 2, " more items")) : /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 italic" }, "No dinner available"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => onMonthlyBooking(name),
          className: `w-full btn-primary flex items-center justify-center gap-2 ${!hasSpots ? "opacity-50 cursor-not-allowed" : ""}`,
          disabled: !hasSpots
        },
        /* @__PURE__ */ React.createElement(import_lucide_react.Calendar, { className: "w-4 h-4" }),
        "Enroll Monthly"
      ), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, reservedForDay ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600" }, "Lunch Reserved \u2713") : !hasDayMenu ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-700 font-medium" }, "Menu not available yet") : /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => onDailyReservation(mess._id, "day"),
          className: `btn-success text-sm flex items-center justify-center gap-1 ${!hasSpots || !isReservationAllowed.day || !hasDayMenu ? "opacity-50 cursor-not-allowed" : ""}`,
          disabled: !hasSpots || !isReservationAllowed.day || !hasDayMenu
        },
        /* @__PURE__ */ React.createElement(import_lucide_react.Utensils, { className: "w-3 h-3" }),
        "Reserve Lunch"
      ), reservedForNight ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600" }, "Dinner Reserved \u2713") : !hasNightMenu ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-700 font-medium" }, "Menu not available yet") : /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => onDailyReservation(mess._id, "night"),
          className: `bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm flex items-center justify-center gap-1 ${!hasSpots || !isReservationAllowed.night || !hasNightMenu ? "opacity-50 cursor-not-allowed" : ""}`,
          disabled: !hasSpots || !isReservationAllowed.night || !hasNightMenu
        },
        /* @__PURE__ */ React.createElement(import_lucide_react.Utensils, { className: "w-3 h-3" }),
        "Reserve Dinner"
      ))))
    );
  };
  var MessCard_default = MessCard;
})();
