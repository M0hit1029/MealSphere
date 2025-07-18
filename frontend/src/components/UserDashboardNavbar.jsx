import React, { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserDashboardNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/user/logout',
        {},
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        navigate('/login-signup/customer');
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-lg 
      bg-white/30 backdrop-blur-lg text-[#333] transition-all"
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo with Gradient & Shadow */}
        <div className="text-3xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent 
            drop-shadow-lg">
            MealSphere
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="text-[#333] hover:text-yellow-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#feedback"
            className="text-[#333] hover:text-yellow-500 transition-colors"
          >
            Feedback
          </a>
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 rounded-lg bg-amber-500 
            text-white hover:bg-amber-700 transition-colors flex items-center gap-2"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-amber-600 hover:bg-amber-200 p-2 rounded-full transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full 
          bg-white/80 text-[#333] shadow-md backdrop-blur-md"
        >
          <div className="flex flex-col p-4 space-y-3">
            <a
              href="#home"
              className="py-2 px-3 rounded 
              text-[#333] hover:bg-amber-200 hover:text-amber-700 
              transition"
            >
              Home
            </a>
            <a
              href="#feedback"
              className="py-2 px-3 rounded 
              text-[#333] hover:bg-amber-200 hover:text-amber-700 
              transition"
            >
              Feedback
            </a>
            <button
              onClick={handleLogout}
              className="w-full py-2 px-3 rounded 
              bg-amber-500 text-white 
              hover:bg-amber-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default UserDashboardNavbar;