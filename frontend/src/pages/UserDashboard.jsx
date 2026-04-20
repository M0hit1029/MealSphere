import { useState, useEffect, useMemo } from "react";
import Navbar from "../components/UserDashboardNavbar";
import {
  Clock, MapPin, Star, Calendar, Utensils, Hourglass,
  BookOpen, IndianRupee, BarChart3, Search, TrendingUp,
  CheckCircle2, XCircle, ChevronDown, SlidersHorizontal
} from "lucide-react";
import axios from "axios";
import debounce from "lodash/debounce";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MessCard from "../components/MessCard";

const getCurrentISTDate = () => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 5.5 * 60 * 60 * 1000);
};

const isBookingOpenForMeal = (mealType) => {
  const hour = getCurrentISTDate().getHours();
  if (mealType === "day") return hour < 11;
  if (mealType === "night") return hour < 19;
  return false;
};

const getBookingClosedMessage = (mealType) =>
  mealType === "day"
    ? "Booking closed for lunch. Lunch bookings close at 11:00 AM IST."
    : "Booking closed for dinner. Dinner bookings close at 7:00 PM IST.";

function UserDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("Price ascending");
  const [messData, setMessData] = useState([]);
  const [reservedMesses, setReservedMesses] = useState([]);
  const [enrolledMess, setEnrolledMess] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [enrollmentError, setEnrollmentError] = useState("");
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [isReservationAllowed, setIsReservationAllowed] = useState({ day: true, night: true });
  const [showAllMesses, setShowAllMesses] = useState(false);
  const [ledgerDays, setLedgerDays] = useState(30);
  const [mealLedger, setMealLedger] = useState([]);
  const [ledgerSummary, setLedgerSummary] = useState({ totalMeals: 0, totalSpend: 0, averageMealCost: 0 });
  const [monthlyInsights, setMonthlyInsights] = useState({ month: "", mostEatenDish: null, averageMealCost: 0 });
  const [ledgerLoading, setLedgerLoading] = useState(false);

  const debouncedSetSearchQuery = useMemo(
    () => debounce((value) => setSearchQuery(value), 300), []
  );

  useEffect(() => () => debouncedSetSearchQuery.cancel(), [debouncedSetSearchQuery]);

  const checkReservationTime = () =>
    setIsReservationAllowed({ day: isBookingOpenForMeal("day"), night: isBookingOpenForMeal("night") });

  const fetchMesses = async (lat = null, lng = null, fetchAll = false) => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        fetchAll || !lat || !lng
          ? `${import.meta.env.VITE_BASE_URL}/mess/get-all-mess`
          : `${import.meta.env.VITE_BASE_URL}/mess/get-mess-by-latlong?lat=${lat}&lng=${lng}`,
        { withCredentials: true }
      );
      setMessData(response.data.messes || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch messes.");
    } finally {
      setLoading(false);
    }
  };

  const fetchReservations = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/reservations/today`, { withCredentials: true });
      setReservedMesses(response.data.reservations || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch reservations.");
    }
  };

  const fetchEnrolledMess = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/mess/get-enrolled-mess`, { withCredentials: true });
      setEnrolledMess(response.data.userMess);
    } catch (err) {
      setEnrollmentError(err.response?.data?.message || "Failed to fetch enrolled mess.");
      if (err.response?.data?.message === "Request Not accepted yet" && err.response?.data?.userMess)
        setEnrolledMess(err.response.data.userMess);
    }
  };

  const fetchMealLedger = async (days = ledgerDays) => {
    try {
      setLedgerLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/meal-ledger?days=${days}`, { withCredentials: true });
      setMealLedger(response.data.entries || []);
      setLedgerSummary(response.data.summary || { totalMeals: 0, totalSpend: 0, averageMealCost: 0 });
      setMonthlyInsights(response.data.monthlyInsights || { month: "", mostEatenDish: null, averageMealCost: 0 });
    } catch (err) {
      console.error("Failed to fetch meal ledger:", err);
    } finally {
      setLedgerLoading(false);
    }
  };

  useEffect(() => {
    checkReservationTime();
    const interval = setInterval(checkReservationTime, 60000);
    const initAll = (lat, lng, all) => {
      fetchMesses(lat, lng, all);
      fetchReservations();
      fetchEnrolledMess();
      fetchMealLedger(ledgerDays);
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setLocation({ lat: latitude, lng: longitude });
          initAll(latitude, longitude, false);
        },
        () => { setShowAllMesses(true); initAll(null, null, true); },
        { timeout: 10000 }
      );
    } else {
      setShowAllMesses(true);
      initAll(null, null, true);
    }
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { fetchMealLedger(ledgerDays); }, [ledgerDays]);

  const handleToggleMessView = () => {
    setShowAllMesses((prev) => {
      const next = !prev;
      if (next) {
        fetchMesses(null, null, true);
      } else if (location.lat && location.lng) {
        fetchMesses(location.lat, location.lng, false);
      } else {
        navigator.geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            setLocation({ lat: latitude, lng: longitude });
            fetchMesses(latitude, longitude, false);
          },
          () => { setShowAllMesses(true); fetchMesses(null, null, true); },
          { timeout: 5000 }
        );
      }
      return next;
    });
  };

  const handleCancelReservation = async (reservationId, messName, mealType) => {
    if (!window.confirm(`Cancel your ${mealType === "day" ? "lunch" : "dinner"} at ${messName}?`)) return;
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/user/reservations/cancel/${reservationId}`, { withCredentials: true });
      toast.success(`Reservation at ${messName} cancelled`);
      fetchReservations();
      fetchMealLedger(ledgerDays);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to cancel");
    }
  };

  const handleMonthlyBooking = async (messName) => {
    const selectedMess = messData.find((m) => m.name === messName);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/mess/${selectedMess._id}/join`, {}, { withCredentials: true });
      if (response.status === 200)
        toast.info(`Visit ${messName} at ${response.data.enrollment.messId.address} to pay monthly charge.`);
      fetchEnrolledMess();
    } catch (err) {
      if (err.response?.status === 400) toast.warn("Already registered for a mess!");
      else if (err.response?.status === 500) { toast.info("Enrolled! Awaiting owner approval."); fetchEnrolledMess(); }
      else toast.error("Server error");
    }
  };

  const handleDailyReservation = async (messId, mealType) => {
    const selectedMess = messData.find((m) => m._id === messId);
    if (!isBookingOpenForMeal(mealType)) { toast.error(getBookingClosedMessage(mealType)); return; }
    if (!window.confirm(`Reserve ${mealType === "day" ? "lunch" : "dinner"} at ${selectedMess.name}?`)) return;
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/reserve`, { messId, mealType }, { withCredentials: true });
      toast.success(response.data.message || `Reserved at ${selectedMess.name}!`);
      fetchReservations();
      fetchMealLedger(ledgerDays);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to reserve");
    }
  };

  const handleEnrolledMessReservation = async (messId, mealType) => {
    const messName = enrolledMess.messId?.name || "Unknown Mess";
    if (!isBookingOpenForMeal(mealType)) { toast.error(getBookingClosedMessage(mealType)); return; }
    if (!window.confirm(`Attend ${mealType === "day" ? "lunch" : "dinner"} at ${messName}?`)) return;
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/mess/attend/${messId}/${mealType}`, {}, { withCredentials: true });
      toast.success(response.data.message || `Confirmed at ${messName}!`);
      fetchReservations();
      fetchMealLedger(ledgerDays);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to attend");
    }
  };

  const sortedMessOptions = useMemo(() => {
    return [...messData].sort((a, b) => {
      const pa = parseInt(a.price?.replace(/[^0-9]/g, "") || 0);
      const pb = parseInt(b.price?.replace(/[^0-9]/g, "") || 0);
      return sortOption === "Price ascending" ? pa - pb : pb - pa;
    });
  }, [messData, sortOption]);

  const filteredMessOptions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return sortedMessOptions.filter((mess) => {
      if (mess._id === enrolledMess?.messId?._id) return false;
      if (!q) return true;
      const name = (mess.name || "").toLowerCase();
      const dishes = [...(mess?.menu?.dayMeal?.dishes || []), ...(mess?.menu?.nightMeal?.dishes || [])]
        .map((d) => [d?.name, ...(d?.items || [])].filter(Boolean).join(" "))
        .join(" ").toLowerCase();
      return name.includes(q) || dishes.includes(q);
    });
  }, [sortedMessOptions, searchQuery, enrolledMess]);

  const hasDayReservation = reservedMesses.some((r) => r.mealType === "day");
  const hasNightReservation = reservedMesses.some((r) => r.mealType === "night");
  const enrolledMessDayRes = reservedMesses.some((r) => r.messId === enrolledMess?.messId?._id && r.mealType === "day");
  const enrolledMessNightRes = reservedMesses.some((r) => r.messId === enrolledMess?.messId?._id && r.mealType === "night");

  const formatCurrency = (value) => `₹${Number(value || 0).toFixed(2)}`;
  const formatMealType = (t) => (t === "day" ? "Lunch" : "Dinner");

  const getStatusClasses = (status, type) => {
    if (type === "reservation")
      return status === "cancelled" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700";
    if (status === "attended") return "bg-emerald-100 text-emerald-700";
    if (status === "cancelled") return "bg-red-100 text-red-700";
    return "bg-slate-100 text-slate-600";
  };

  const getAttendanceLabel = (entry) => {
    if (["not_marked", "not_applicable"].includes(entry.attendanceStatus)) return "Not marked";
    return entry.attendanceStatus;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12 space-y-8">

        {/* ─── Booking times banner ─── */}
        <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800">
          <Clock className="w-4 h-4 text-amber-500 shrink-0" />
          <span>
            <span className="font-semibold">Booking window:</span> Lunch before 11:00 AM &nbsp;·&nbsp; Dinner before 7:00 PM
          </span>
          <div className="ml-auto flex items-center gap-3 shrink-0">
            <div className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${isReservationAllowed.day ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${isReservationAllowed.day ? "bg-emerald-500" : "bg-red-500"}`} />
              Lunch {isReservationAllowed.day ? "open" : "closed"}
            </div>
            <div className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${isReservationAllowed.night ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${isReservationAllowed.night ? "bg-emerald-500" : "bg-red-500"}`} />
              Dinner {isReservationAllowed.night ? "open" : "closed"}
            </div>
          </div>
        </div>

        {/* ─── Top row: Enrolled mess + Today's reservations ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-5">

          {/* Enrolled Mess */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-100">
              <Star className="w-4 h-4 text-amber-500" />
              <h2 className="font-semibold text-slate-800 text-sm">Your Enrolled Mess</h2>
            </div>

            <div className="p-5">
              {loading ? (
                <div className="flex items-center gap-3 text-slate-500 text-sm py-4">
                  <div className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                  Loading...
                </div>
              ) : enrollmentError === "Request Not accepted yet" && enrolledMess ? (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Hourglass className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{enrolledMess.messId?.name || "Pending Mess"}</h3>
                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />{enrolledMess.messId?.address}
                    </p>
                    <span className="inline-flex mt-2 items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                      Awaiting approval
                    </span>
                  </div>
                </div>
              ) : enrollmentError ? (
                <div className="text-center py-6">
                  <div className="text-4xl mb-2">🏠</div>
                  <p className="text-slate-500 text-sm">
                    {enrollmentError === "User is not enrolled in any mess" ? "You're not enrolled in any mess yet." : enrollmentError}
                  </p>
                </div>
              ) : enrolledMess ? (
                <div>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg shrink-0">
                      {enrolledMess.messId.name?.charAt(0) || "M"}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">{enrolledMess.messId.name}</h3>
                      <p className="text-sm text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />{enrolledMess.messId.address}
                      </p>
                      <span className="inline-flex mt-2 items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                        Monthly Member
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {/* Lunch menu preview */}
                    <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
                      <p className="text-xs font-semibold text-amber-700 mb-2 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Lunch
                      </p>
                      {enrolledMess.messId?.menu?.dayMeal?.dishes?.length > 0 ? (
                        enrolledMess.messId.menu.dayMeal.dishes.slice(0, 2).map((dish, i) => (
                          <div key={i} className="flex justify-between text-xs text-slate-700 py-0.5">
                            <span>{dish.name}</span>
                            <span className="font-medium text-emerald-600">₹{dish.price}</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-slate-400 italic">No menu added</p>
                      )}
                    </div>
                    {/* Dinner menu preview */}
                    <div className="bg-indigo-50 rounded-xl p-3 border border-indigo-100">
                      <p className="text-xs font-semibold text-indigo-700 mb-2 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Dinner
                      </p>
                      {enrolledMess.messId?.menu?.nightMeal?.dishes?.length > 0 ? (
                        enrolledMess.messId.menu.nightMeal.dishes.slice(0, 2).map((dish, i) => (
                          <div key={i} className="flex justify-between text-xs text-slate-700 py-0.5">
                            <span>{dish.name}</span>
                            <span className="font-medium text-emerald-600">₹{dish.price}</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-slate-400 italic">No menu added</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {enrolledMessDayRes ? (
                      <div className="flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-emerald-700 font-medium">
                        <CheckCircle2 className="w-4 h-4" /> Lunch reserved
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEnrolledMessReservation(enrolledMess.messId._id, "day")}
                        disabled={!isReservationAllowed.day}
                        className="flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-medium transition-colors"
                      >
                        <Utensils className="w-3.5 h-3.5" /> Attend Lunch
                      </button>
                    )}
                    {enrolledMessNightRes ? (
                      <div className="flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-emerald-700 font-medium">
                        <CheckCircle2 className="w-4 h-4" /> Dinner reserved
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEnrolledMessReservation(enrolledMess.messId._id, "night")}
                        disabled={!isReservationAllowed.night}
                        className="flex items-center justify-center gap-2 py-2.5 px-4 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-medium transition-colors"
                      >
                        <Utensils className="w-3.5 h-3.5" /> Attend Dinner
                      </button>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* Today's Reservations */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-100">
              <Calendar className="w-4 h-4 text-blue-500" />
              <h2 className="font-semibold text-slate-800 text-sm">Today's Reservations</h2>
              {reservedMesses.length > 0 && (
                <span className="ml-auto bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                  {reservedMesses.length}
                </span>
              )}
            </div>

            <div className="p-5">
              {loading ? (
                <div className="flex items-center gap-3 text-slate-500 text-sm py-4">
                  <div className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                  Loading...
                </div>
              ) : reservedMesses.length === 0 ? (
                <div className="text-center py-8">
                  <Calendar className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-slate-400 text-sm">No reservations today</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {reservedMesses.map((res, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${res.mealType === "day" ? "bg-amber-100 text-amber-600" : "bg-indigo-100 text-indigo-600"}`}>
                        <Utensils className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-800 truncate">{res.messName || "Unknown Mess"}</p>
                        <p className="text-xs text-slate-500">{res.mealType === "day" ? "Lunch" : "Dinner"}</p>
                      </div>
                      <button
                        onClick={() => handleCancelReservation(res.reservationId, res.messName, res.mealType)}
                        className="shrink-0 p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Cancel"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ─── Meal Ledger ─── */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              <h2 className="font-semibold text-slate-800 text-sm">Meal Ledger</h2>
            </div>
            <div className="flex gap-2 sm:ml-auto">
              {[7, 30, 90].map((days) => (
                <button
                  key={days}
                  onClick={() => setLedgerDays(days)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    ledgerDays === days
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {days}d
                </button>
              ))}
            </div>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100">
            <div className="px-5 py-4">
              <p className="text-xs text-slate-500 mb-1">Total spend</p>
              <p className="text-lg font-semibold text-slate-800">{formatCurrency(ledgerSummary.totalSpend)}</p>
              <p className="text-xs text-slate-400">{ledgerSummary.totalMeals} meals</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-xs text-slate-500 mb-1">Top dish this month</p>
              <p className="text-sm font-semibold text-slate-800 truncate">{monthlyInsights.mostEatenDish || "—"}</p>
              <p className="text-xs text-slate-400">{monthlyInsights.month || "Current month"}</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-xs text-slate-500 mb-1">Avg meal cost</p>
              <p className="text-lg font-semibold text-slate-800">{formatCurrency(monthlyInsights.averageMealCost)}</p>
              <p className="text-xs text-slate-400">This month</p>
            </div>
          </div>

          {/* Ledger table */}
          <div className="overflow-x-auto max-h-72 overflow-y-auto">
            {ledgerLoading ? (
              <div className="flex items-center gap-3 text-slate-500 text-sm p-6">
                <div className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                Loading ledger...
              </div>
            ) : mealLedger.length === 0 ? (
              <div className="text-center py-10 text-slate-400 text-sm">
                No meal history for the selected period.
              </div>
            ) : (
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-slate-50 border-b border-slate-100">
                  <tr>
                    {["Date", "Mess", "Meal", "Dish", "Price", "Reservation", "Attendance"].map((h) => (
                      <th key={h} className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-2.5 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {mealLedger.map((entry) => (
                    <tr key={entry.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                        {new Date(entry.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                      </td>
                      <td className="px-4 py-3 font-medium text-slate-800 whitespace-nowrap">{entry.messName}</td>
                      <td className="px-4 py-3 text-slate-600">{formatMealType(entry.mealType)}</td>
                      <td className="px-4 py-3 text-slate-600 max-w-[140px] truncate">
                        {entry.dishNames?.length > 0 ? entry.dishNames.join(", ") : "—"}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{formatCurrency(entry.totalPrice)}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusClasses(entry.reservationStatus, "reservation")}`}>
                          {entry.reservationStatus}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusClasses(entry.attendanceStatus, "attendance")}`}>
                          {getAttendanceLabel(entry)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* ─── Browse Messes ─── */}
        <div>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-5">
            <h2 className="font-semibold text-slate-800 flex items-center gap-2">
              <Utensils className="w-4 h-4 text-indigo-500" />
              Browse Messes
            </h2>

            <div className="flex flex-wrap gap-2 sm:ml-auto">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search mess or dish..."
                  onChange={(e) => debouncedSetSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 w-52"
                />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer"
                >
                  <option value="Price ascending">Price ↑</option>
                  <option value="Price descending">Price ↓</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              </div>

              {/* Nearby / All toggle */}
              <button
                onClick={handleToggleMessView}
                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-xl border font-medium transition-colors ${
                  showAllMesses
                    ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    : "bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                {showAllMesses ? "Show Nearby" : "Showing Nearby"}
              </button>
            </div>
          </div>

          {/* Reservation status bar */}
          {(hasDayReservation || hasNightReservation) && (
            <div className="mb-4 flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              {hasDayReservation && hasNightReservation
                ? "You have reservations for both lunch and dinner today."
                : hasDayReservation
                ? "You have a lunch reservation today."
                : "You have a dinner reservation today."}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex items-center gap-3 text-slate-500 text-sm py-8">
              <div className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
              Loading messes...
            </div>
          )}

          {/* Mess grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredMessOptions.length > 0 ? (
                filteredMessOptions.map((mess, i) => (
                  <MessCard
                    key={i}
                    mess={mess}
                    onMonthlyBooking={handleMonthlyBooking}
                    onDailyReservation={handleDailyReservation}
                    isReservationAllowed={isReservationAllowed}
                    reservedMesses={reservedMesses}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-14">
                  <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-400 text-sm">
                    {searchQuery.trim()
                      ? "No results found. Try a different search."
                      : showAllMesses
                      ? "No messes found."
                      : "No messes nearby. Try showing all messes."}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default UserDashboard;