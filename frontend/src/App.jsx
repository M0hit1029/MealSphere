import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

// Lazy-loaded components
const Landing = lazy(() => import("./pages/Landing_Page"));
const LoginSignupPage = lazy(() => import("./components/Login"));
const UserTypeSelectionPage = lazy(() => import("./components/UserTypeSelection"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));
const MessDashboard = lazy(() => import("./pages/MessDashboard"));
const Trial = lazy(() => import("./components/Trial"));
const AddMessPage = lazy(() => import("./pages/AddNewMess"));
const RegisteredMembers = lazy(() => import("./pages/RegisteredMembers"));
const Attendance = lazy(() => import("./pages/AttendencePage"));
const UserAttendance = lazy(() => import("./pages/UserAttendance"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/signup" element={<UserTypeSelectionPage />} />
        <Route path="/login-signup/:userType" element={<LoginSignupPage />} />
        <Route element={<ProtectedRoute type="user"/>}>
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Route>
        <Route element={<ProtectedRoute type="messOwner"/>}>
          <Route path="/mess-dashboard" element={<MessDashboard />} />
          <Route path="mess-dashboard/add-mess" element={<AddMessPage/>}/>
          <Route path="mess-dashboard/:messId/registered-members" element={<RegisteredMembers />} />
          <Route path="mess-dashboard/:messId/attendance" element={<Attendance />} />
          <Route path="mess-dashboard/:messId/user-attendance/:userId" element={<UserAttendance />} />
        </Route>
        <Route path="/trial" element={<Trial/>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;