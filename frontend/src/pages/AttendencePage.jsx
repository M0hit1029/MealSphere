import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AttendancePage = () => {
  const { messId } = useParams();
  const [attendance, setAttendance] = useState({ day: 0, night: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/mess/${messId}/attendance`,
          { withCredentials: true }
        );
        setAttendance(response.data || { day: 0, night: 0 });
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch attendance.");
      } finally {
        setLoading(false);
      }
    };
    fetchAttendance();
  }, [messId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Attendance for Mess</h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <p>Loading attendance...</p>
        </div>
      ) : error ? (
        <div className="text-red-600 text-center">{error}</div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-lg font-semibold">
            Day Meal Attendees: {attendance.day}
          </p>
          <p className="text-lg font-semibold">
            Night Meal Attendees: {attendance.night}
          </p>
        </div>
      )}
    </div>
  );
};

export default AttendancePage;