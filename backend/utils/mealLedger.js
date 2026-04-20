const MealLedger = require('../models/mealLedgerSchema');

function getMealSnapshotFromMess(mess, mealType) {
  const dishes = mealType === 'day'
    ? mess?.menu?.dayMeal?.dishes || []
    : mess?.menu?.nightMeal?.dishes || [];

  const dishNames = dishes
    .map((dish) => dish?.name)
    .filter(Boolean);

  const totalPrice = dishes.reduce((sum, dish) => {
    const price = Number(dish?.price || 0);
    return sum + (Number.isFinite(price) ? price : 0);
  }, 0);

  return { dishNames, totalPrice };
}

async function upsertMealLedgerEntry({
  userId,
  mess,
  messId,
  date,
  mealType,
  reservationStatus = 'reserved',
  attendanceStatus,
  source = 'daily_reservation',
}) {
  const resolvedMessId = mess?._id || messId;
  if (!userId || !resolvedMessId || !date || !mealType) return;

  const { dishNames, totalPrice } = getMealSnapshotFromMess(mess, mealType);

  const resolvedAttendanceStatus = attendanceStatus
    || 'not_marked';

  await MealLedger.findOneAndUpdate(
    { userId, messId: resolvedMessId, date, mealType },
    {
      $set: {
        messName: mess?.name || 'Unknown Mess',
        dishNames,
        totalPrice,
        reservationStatus,
        attendanceStatus: resolvedAttendanceStatus,
        source,
      },
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
}

async function markMealLedgerCancelled({ userId, messId, date, mealType }) {
  if (!userId || !messId || !date || !mealType) return;

  await MealLedger.findOneAndUpdate(
    { userId, messId, date, mealType },
    {
      $set: {
        reservationStatus: 'cancelled',
        attendanceStatus: 'cancelled',
      },
    },
    { new: true }
  );
}

module.exports = {
  upsertMealLedgerEntry,
  markMealLedgerCancelled,
};
