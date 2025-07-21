import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { User, Calendar } from "lucide-react";
import Navbar from "../components/MessDashboardNavbar";
function UserAttendance() {
  const { messId, userId } = useParams();
  const [attendanceData, setAttendanceData] = useState({
    totalDays: 0,
    presentDays: 0,
    absentDays: 0,
    records: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUserAttendance = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/mess/${messId}/user-attendance/${userId}`,
        { withCredentials: true }
      );
      setAttendanceData(response.data);
    } catch (err) {
      console.error("Fetch user attendance error:", err);
      setError(err.response?.data?.message || "Failed to fetch user attendance data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (messId && userId) {
      fetchUserAttendance();
    } else {
      setError("Mess ID or User ID is missing.");
      setLoading(false);
    }
  }, [messId, userId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col p-4 sm:p-6">
      <Navbar />
      <div className="mt-16 sm:mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-gradient mb-6 sm:mb-8 flex items-center gap-2">
        <User className="w-8 h-8 text-blue-500" />
        User Attendance
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
          {/* Summary Section */}
          <div className="card p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-gray-600" />
              Attendance Summary
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-100 rounded-lg text-center">
                <p className="text-sm font-medium text-gray-600">Total Days</p>
                <p className="text-2xl font-bold text-blue-800">{attendanceData.totalDays}</p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg text-center">
                <p className="text-sm font-medium text-gray-600">Present Days</p>
                <p className="text-2xl font-bold text-green-800">{attendanceData.presentDays}</p>
              </div>
              <div className="p-4 bg-red-100 rounded-lg text-center">
                <p className="text-sm font-medium text-gray-600">Absent Days</p>
                <p className="text-2xl font-bold text-red-800">{attendanceData.absentDays}</p>
              </div>
            </div>
          </div>

          {/* Attendance Records Section */}
          <div className="card p-6 bg-gradient-to-r from-white to-gray-50 border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-gray-600" />
              Attendance Records
            </h2>
            {attendanceData.records.length > 0 ? (
              <div className="space-y-4">
                {attendanceData.records.map((record, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-white shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="mb-2 sm:mb-0">
                      <p className="text-sm font-medium text-gray-800">
                        {formatDate(record.date)}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div
                        className={`px-4 py-2 rounded-lg text-sm font-medium text-center ${
                          record.attendedDay ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        Lunch: {record.attendedDay ? "Attended" : "Absent"}
                      </div>
                      <div
                        className={`px-4 py-2 rounded-lg text-sm font-medium text-center ${
                          record.attendedNight ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        Dinner: {record.attendedNight ? "Attended" : "Absent"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">No attendance records available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserAttendance;