const moment = require('moment-timezone');

function getCurrentIST() {
  return moment().tz('Asia/Kolkata');
}

function isBookingOpen(mealType, now = getCurrentIST()) {
  if (mealType === 'day') {
    return now.hour() < 11;
  }

  if (mealType === 'night') {
    return now.hour() < 19;
  }

  return false;
}

function getBookingClosedMessage(mealType) {
  if (mealType === 'day') {
    return 'Booking closed for lunch. Lunch bookings close at 11:00 AM IST.';
  }

  if (mealType === 'night') {
    return 'Booking closed for dinner. Dinner bookings close at 7:00 PM IST.';
  }

  return 'Booking closed for this meal.';
}

module.exports = {
  getCurrentIST,
  isBookingOpen,
  getBookingClosedMessage,
};
