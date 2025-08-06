import React, { useState, useEffect } from "react";
import { Menu, LogOut, Home, MessageCircle, Settings, AppWindow } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MessDashboardNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/messOwner/logout`,
        {},
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        navigate('/login-signup/messOwner', { state: { fromLogout: true } });
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
          : 'bg-white/80 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Enhanced Animation */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300 animate-pulse"></div>
          <div className="relative text-3xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg animate-glow">
              MealSphere
            </span>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavButton icon={Home} href="/">
            Home
          </NavButton>
          <NavButton icon={AppWindow} href="/mess-dashboard">
            Dashboard
          </NavButton>
          <button
            onClick={handleLogout}
            className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <LogOut size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              Logout
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} />
          {isMenuOpen && (
            <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping"></div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-200/50">
          <div className="flex flex-col p-6 space-y-4">
            <MobileNavLink icon={Home} href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink icon={AppWindow} href="/mess-dashboard" onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </MobileNavLink>
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavButton = ({ icon: Icon, href, children }) => (
  <a
    href={href}
    className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 group flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-orange-50"
  >
    <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const MobileNavLink = ({ icon: Icon, href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-700 hover:text-orange-600 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:translate-x-2 flex items-center gap-3"
  >
    <Icon size={18} />
    {children}
  </a>
);

export default MessDashboardNavbar;