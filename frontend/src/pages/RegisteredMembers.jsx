import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/MessDashboardNavbar";

const RegisteredMembers = () => {
  const { messId } = useParams();
  const navigate = useNavigate();
  const [acceptedMembers, setAcceptedMembers] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchMembers();
  }, [messId]);

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/messOwner/${messId}/members`,
        { withCredentials: true }
      );
      setAcceptedMembers(response.data.acceptedMembers);
      setPendingRequests(response.data.pendingRequests);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch members");
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (enrollmentId) => {
    try {
      setLoading(true);
      if (window.confirm("Do you want to accept this member?")) {
        await axios.put(
          `${import.meta.env.VITE_BASE_URL}/messOwner/enrollment/${enrollmentId}/accept`,
          {},
          { withCredentials: true }
        );
        setSuccess("Member accepted successfully");
        await fetchMembers();
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to accept member");
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async (enrollmentId) => {
    try {
      setLoading(true);
      if (window.confirm("Do you want to reject this request?")) {
        await axios.delete(
          `${import.meta.env.VITE_BASE_URL}/messOwner/enrollment/${enrollmentId}/reject?messId=${messId}`,
          { withCredentials: true }
        );
        setSuccess("Request rejected successfully");
        await fetchMembers();
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reject request");
    } finally {
      setLoading(false);
    }
  };

  const handleViewAttendance = (userId) => {
    navigate(`/mess-dashboard/${messId}/user-attendance/${userId}`);
  };

  return (
    <div className="flex flex-col p-4 sm:p-5 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50">
      <Navbar />
      <div className="container mx-auto px-4 py-6 sm:py-8 mt-16 sm:mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Mess Members</h2>

        {success && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg">
            {success}
          </div>
        )}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center p-12">
            <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Accepted Members Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Accepted Members</h3>
              {acceptedMembers.length === 0 ? (
                <p className="text-gray-500">No accepted members yet.</p>
              ) : (
                <div className="space-y-4">
                  {acceptedMembers.map((member) => (
                    <div
                      key={member._id}
                      className="border p-4 rounded-lg flex justify-between items-center"
                    >
                      <div>
                        <button
                          onClick={() => handleViewAttendance(member.userId._id)}
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          {member.userId.name}
                        </button>
                        <p className="text-gray-500">{member.userId.email}</p>
                        <p className="text-sm text-gray-400">
                          Joined: {new Date(member.joinedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pending Requests Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Pending Requests</h3>
              {pendingRequests.length === 0 ? (
                <p className="text-gray-500">No pending requests.</p>
              ) : (
                <div className="space-y-4">
                  {pendingRequests.map((request) => (
                    <div
                      key={request._id}
                      className="border p-4 rounded-lg flex justify-between items-center"
                    >
                      <div>
                        <p className="font-medium">{request.userId.name}</p>
                        <p className="text-gray-500">{request.userId.email}</p>
                        <p className="text-sm text-gray-400">
                          Requested: {new Date(request.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAccept(request._id)}
                          className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
                          disabled={loading}
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(request._id)}
                          className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                          disabled={loading}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisteredMembers;