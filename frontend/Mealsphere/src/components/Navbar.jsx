import React, { useState, useEffect } from "react";
import { Menu, User, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-white/20' 
          : 'bg-white/10 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Enhanced Animation */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
          <div className="relative text-3xl font-extrabold tracking-wide">
            <span className={`bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg transition-all duration-300 ${
              isScrolled ? 'from-blue-600 to-purple-600' : 'from-yellow-500 to-orange-500'
            }`}>
              MealSphere
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#home" isScrolled={isScrolled}>Home</NavLink>
          <NavLink href="#about-section" isScrolled={isScrolled}>About</NavLink>
          <NavLink href="#features" isScrolled={isScrolled}>Features</NavLink>
          <NavLink href="#reviews" isScrolled={isScrolled}>Reviews</NavLink>
          
          <Link to="/signup">
            <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                <User size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                Join Us
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-3 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'text-gray-700 hover:bg-gray-100' 
              : 'text-white hover:bg-white/20'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <Menu 
              size={24} 
              className={`absolute transition-all duration-300 ${
                isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
              }`} 
            />
            <X 
              size={24} 
              className={`absolute transition-all duration-300 ${
                isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
              }`} 
            />
          </div>
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
            <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#about-section" onClick={() => setIsMenuOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>
              Features
            </MobileNavLink>
            <MobileNavLink href="#reviews" onClick={() => setIsMenuOpen(false)}>
              Reviews
            </MobileNavLink>
            
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <User size={20} />
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, isScrolled }) => (
  <a
    href={href}
    className={`relative font-medium transition-all duration-300 group ${
      isScrolled 
        ? 'text-gray-700 hover:text-blue-600' 
        : 'text-white/90 hover:text-yellow-400'
    }`}
  >
    {children}
    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
      isScrolled 
        ? 'bg-blue-600' 
        : 'bg-yellow-400'
    }`}></span>
  </a>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2"
  >
    {children}
  </a>
);

export default Navbar;