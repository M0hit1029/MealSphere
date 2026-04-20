import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Users, Utensils } from "lucide-react";
import Navbar from "../components/MessDashboardNavbar";
function Attendance() {
  const { messId } = useParams();
  const [attendanceData, setAttendanceData] = useState({
    enrolledMembers: [],
    nonEnrolledCustomers: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");
  const [markingKey, setMarkingKey] = useState("");

  const fetchAttendance = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/mess/${messId}/today-attendance`,
        { withCredentials: true }
      );
      setAttendanceData(response.data);
      console.log(response.data, "Attendance data fetched successfully");
    } catch (err) {
      console.error("Fetch attendance error:", err);
      setError(err.response?.data?.message || "Failed to fetch attendance data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (messId) {
      fetchAttendance();
    } else {
      setError("Mess ID is missing.");
      setLoading(false);
    }
  }, [messId]);

  const dayEnrolled = attendanceData.enrolledMembers.filter((member) => member.comingDay);
  const dayNonEnrolled = attendanceData.nonEnrolledCustomers.filter((customer) => customer.comingDay);
  const nightEnrolled = attendanceData.enrolledMembers.filter((member) => member.comingNight);
  const nightNonEnrolled = attendanceData.nonEnrolledCustomers.filter((customer) => customer.comingNight);

  const handleMarkAttendance = async (userId, mealType, attended) => {
    const key = `${userId}-${mealType}`;
    try {
      setActionError("");
      setMarkingKey(key);
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/mess/${messId}/attendance/${userId}/${mealType}`,
        { attended },
        { withCredentials: true }
      );
      await fetchAttendance();
    } catch (err) {
      console.error("Mark attendance error:", err);
      setActionError(err.response?.data?.message || "Failed to update attendance.");
    } finally {
      setMarkingKey("");
    }
  };

  const renderUserList = (users, isEnrolled, mealType) => (
    <div className="space-y-2">
      {users.length > 0 ? (
        users.map((entry) => {
          const attended = mealType === "comingDay" ? entry.dayMarked : entry.nightMarked;
          const reserveFlag = mealType === "comingDay" ? entry.comingDay : entry.comingNight;
          const meal = mealType === "comingDay" ? "day" : "night";
          const key = `${entry.user._id}-${meal}`;

          return (
          <div
            key={entry.user._id}
            className={`p-3 rounded-lg flex items-center justify-between gap-3 ${
              attended ? "bg-green-100" : "bg-slate-100"
            }`}
          >
            <div>
              <p className="text-sm font-medium text-gray-800">{entry.user.name || "Unknown User"}</p>
              <p className="text-xs text-gray-600">
                {isEnrolled
                  ? reserveFlag
                    ? "Reserved"
                    : "Not reserved (owner can still mark)"
                  : "Reserved"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${attended ? "bg-green-200 text-green-800" : "bg-slate-200 text-slate-700"}`}>
                {attended ? "Present" : "Not marked"}
              </span>
              <button
                type="button"
                onClick={() => handleMarkAttendance(entry.user._id, meal, !attended)}
                disabled={markingKey === key}
                className={`text-xs font-semibold px-3 py-1 rounded-md transition-all ${attended ? "bg-amber-500 text-white hover:bg-amber-600" : "bg-blue-600 text-white hover:bg-blue-700"} ${markingKey === key ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {markingKey === key ? "Saving..." : attended ? "Unmark" : "Mark Present"}
              </button>
            </div>
          </div>
          );
        })
      ) : (
        <p className="text-sm text-gray-500 italic">
          {isEnrolled ? "No enrolled members" : "No non-enrolled customers"} for this meal.
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col p-4 sm:p-6">
      <Navbar />
      <div className="mt-16 sm:mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-gradient mb-6 sm:mb-8 flex items-center gap-2">
        <Users className="w-8 h-8 text-blue-500" />
        Today's Attendance
      </h1>
      </div>

      {loading ? (
        <div className="card p-8 text-center">
          <div className="spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Loading attendance data...</p>
        </div>
      ) : error ? (
        <div className="card p-8 text-center bg-red-50 border-red-200">
          <div className="text-6xl mb-4">⚠️</div>
          <p className="text-red-600 text-lg">{error}</p>
        </div>
      ) : (
        <div className="space-y-8">
          {actionError && (
            <div className="card p-4 bg-red-50 border-red-200 text-red-700 text-sm">
              {actionError}
            </div>
          )}
          {/* Day Attendance Section */}
          <div className="card p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4 flex items-center gap-2">
              <Utensils className="w-6 h-6" />
              Day Attendance (Lunch)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Enrolled Members */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Enrolled Members (Total: {attendanceData.enrolledMembers.length}, Reserved: {dayEnrolled.length})
                </h3>
                {renderUserList(attendanceData.enrolledMembers, true, "comingDay")}
              </div>
              {/* Non-Enrolled Customers */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Non-Enrolled Customers (Total: {dayNonEnrolled.length})
                </h3>
                {renderUserList(dayNonEnrolled, false, "comingDay")}
              </div>
            </div>
          </div>

          {/* Night Attendance Section */}
          <div className="card p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
              <Utensils className="w-6 h-6" />
              Night Attendance (Dinner)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Enrolled Members */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Enrolled Members (Total: {attendanceData.enrolledMembers.length}, Reserved: {nightEnrolled.length})
                </h3>
                {renderUserList(attendanceData.enrolledMembers, true, "comingNight")}
              </div>
              {/* Non-Enrolled Customers */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Non-Enrolled Customers (Total: {nightNonEnrolled.length})
                </h3>
                {renderUserList(nightNonEnrolled, false, "comingNight")}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Attendance;