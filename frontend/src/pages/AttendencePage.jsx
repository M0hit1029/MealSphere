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
  const renderUserList = (users, isEnrolled, mealType) => (
    <div className="space-y-2">
      {users.length > 0 ? (
        users.map((entry, index) => (
          <div
            key={entry.user._id}
            className={`p-3 rounded-lg flex items-center justify-between ${
              isEnrolled && !entry[mealType] ? "bg-red-100" : "bg-green-100"
            }`}
          >
            <span className="text-sm font-medium text-gray-800">
              {entry.user.name || "Unknown User"}
            </span>
            <span className="text-xs text-gray-600">
              {isEnrolled ? (entry[mealType] ? "Attending" : "Absent") : "Attending"}
            </span>
          </div>
        ))
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
                  Enrolled Members (Total: {attendanceData.enrolledMembers.length}, Attending: {dayEnrolled.length})
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
                  Enrolled Members (Total: {attendanceData.enrolledMembers.length}, Attending: {nightEnrolled.length})
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