import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/MessDashboardNavbar";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ArrowLeft, TrendingUp, Users, Utensils, AlertCircle, DollarSign } from "lucide-react";

const MessStats = () => {
  const { messId } = useParams();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStats();
  }, [messId]);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/mess/${messId}/stats`,
        { withCredentials: true }
      );
      setStats(response.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch statistics");
      console.error("Stats fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-600 font-medium">Loading statistics...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50">
        <Navbar />
        <div className="container mx-auto px-4 py-6 sm:py-8 mt-16 sm:mt-20">
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Error Loading Statistics</p>
              <p className="text-sm mt-1">{error || "No data available"}</p>
            </div>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg border border-indigo-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const colors = ['#4f46e5', '#7c3aed', '#ec4899', '#f59e0b', '#10b981', '#06b6d4', '#8b5cf6'];

  // Prepare day-wise data
  const dayWiseData = dayNames.map((day, idx) => {
    const dayData = {
      name: day,
      day: day,
      dayMeals: 0,
      nightMeals: 0,
    };

    stats.peakBookingTimes.forEach((item) => {
      if (item.day === day) {
        if (item.mealType === 'day') dayData.dayMeals = item.count;
        if (item.mealType === 'night') dayData.nightMeals = item.count;
      }
    });

    return dayData;
  });

  // Prepare hourly data
  const hourlyData = Array.from({ length: 24 }, (_, hour) => ({
    hour: `${hour}:00`,
    day: 0,
    night: 0,
  }));

  stats.hourlyPattern.forEach((item) => {
    const hourIndex = parseInt(item.hour);
    if (hourIndex < 24) {
      if (item.mealType === 'day') hourlyData[hourIndex].day = item.count;
      if (item.mealType === 'night') hourlyData[hourIndex].night = item.count;
    }
  });

  // Revenue pie data
  const revenuePieData = stats.revenueBreakdown.map((item) => ({
    name: item.mealType === 'day' ? 'Lunch' : 'Dinner',
    value: parseFloat(item.totalRevenue),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50">
      <Navbar />
      <div className="container mx-auto px-4 py-6 sm:py-8 mt-16 sm:mt-20">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white rounded-lg text-slate-600 border border-slate-200 transition-colors"
            title="Go Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Mess Statistics</h1>
            <p className="text-sm text-slate-500 mt-1">Analytics and insights for your mess</p>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Utensils className="w-6 h-6" />}
            label="All-Time Meals"
            value={stats.totalMealsServed.allTime}
            color="blue"
          />
          <StatCard
            icon={<TrendingUp className="w-6 h-6" />}
            label="This Month"
            value={stats.totalMealsServed.thisMonth}
            color="green"
          />
          <StatCard
            icon={<Users className="w-6 h-6" />}
            label="This Week"
            value={stats.totalMealsServed.thisWeek}
            color="purple"
          />
          <StatCard
            icon={<AlertCircle className="w-6 h-6" />}
            label="Cancellation Rate"
            value={`${stats.cancellationStats.cancellationRate}%`}
            color="red"
          />
        </div>

        {/* Charts Section */}
        <div className="space-y-6">
          {/* Day-wise Meals Chart */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              Weekly Booking Pattern
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dayWiseData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  cursor={{ fill: 'rgba(79, 70, 229, 0.1)' }}
                />
                <Legend />
                <Bar dataKey="dayMeals" fill="#3b82f6" name="Lunch" radius={[8, 8, 0, 0]} />
                <Bar dataKey="nightMeals" fill="#8b5cf6" name="Dinner" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Hourly Pattern */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
              <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                Hourly Booking Pattern
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={hourlyData.slice(6, 22)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="hour" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                    cursor={{ fill: 'rgba(79, 70, 229, 0.1)' }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="day" 
                    stroke="#3b82f6" 
                    name="Lunch"
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="night" 
                    stroke="#8b5cf6" 
                    name="Dinner"
                    strokeWidth={2}
                    dot={{ fill: '#8b5cf6', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Revenue Breakdown */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
              <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Revenue Breakdown (This Month)
              </h2>
              {revenuePieData.length > 0 ? (
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={revenuePieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ₹${value}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {colors.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-64 flex items-center justify-center text-slate-500">
                  <p>No revenue data available</p>
                </div>
              )}
            </div>
          </div>

          {/* Popular Dishes */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-orange-600" />
              Most Popular Dishes
            </h2>
            {stats.popularDishes.length > 0 ? (
              <div className="space-y-2">
                {stats.popularDishes.map((dish, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: colors[idx % colors.length] }}
                      ></div>
                      <span className="font-medium text-slate-700">{dish.dishName}</span>
                    </div>
                    <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      {dish.count} orders
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500">No dish data available yet</p>
            )}
          </div>

          {/* Revenue Details */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              Revenue Details (This Month)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.revenueBreakdown.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="text-sm text-slate-600 font-medium">
                    {item.mealType === 'day' ? 'Lunch' : 'Dinner'}
                  </p>
                  <p className="text-2xl font-bold text-slate-800 mt-2">
                    ₹{item.totalRevenue.toFixed(2)}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {item.count} meals • ₹{item.avgPerMeal}/meal
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cancellation Stats */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              Cancellation Statistics (This Month)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-600 font-medium">Total Reservations</p>
                <p className="text-3xl font-bold text-blue-700 mt-2">
                  {stats.cancellationStats.totalReservations}
                </p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                <p className="text-sm text-red-600 font-medium">Cancelled</p>
                <p className="text-3xl font-bold text-red-700 mt-2">
                  {stats.cancellationStats.cancelledReservations}
                </p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <p className="text-sm text-emerald-600 font-medium">Cancellation Rate</p>
                <p className="text-3xl font-bold text-emerald-700 mt-2">
                  {stats.cancellationStats.cancellationRate}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, label, value, color }) => {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-100 text-blue-700",
    green: "bg-emerald-50 border-emerald-100 text-emerald-700",
    purple: "bg-purple-50 border-purple-100 text-purple-700",
    red: "bg-red-50 border-red-100 text-red-700",
  };

  return (
    <div className={`${colorClasses[color]} border rounded-xl p-6 shadow-sm`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-75">{label}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <div className="opacity-20">{icon}</div>
      </div>
    </div>
  );
};

export default MessStats;
