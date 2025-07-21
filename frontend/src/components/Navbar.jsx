import React, { useState, useEffect } from "react";
import { Menu, User, X } from "lucide-react";
import { Link } from "react-router-dom";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
          : 'bg-white/80 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo with Enhanced Animation */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300 animate-pulse"></div>
          <div className="relative text-2xl sm:text-3xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg animate-glow">
              MealSphere
            </span>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavButton onClick={() => scrollToSection('home')}>
            Home
          </NavButton>
          <NavButton onClick={() => scrollToSection('about-section')}>
            About
          </NavButton>
          <NavButton onClick={() => scrollToSection('features')}>
            Features
          </NavButton>
          <NavButton onClick={() => scrollToSection('contact')}>
            Contact
          </NavButton>
          
          <Link to="/signup">
            <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span className="relative z-10 flex items-center gap-2">
                <User size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                Join Us
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} />
          {isMenuOpen && (
            <div className="absolute inset-0 bg-amber-500/20 rounded-full animate-ping"></div>
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
            <MobileNavLink onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }}>
              Home
            </MobileNavLink>
            <MobileNavLink onClick={() => { scrollToSection('about-section'); setIsMenuOpen(false); }}>
              About
            </MobileNavLink>
            <MobileNavLink onClick={() => { scrollToSection('features'); setIsMenuOpen(false); }}>
              Features
            </MobileNavLink>
            <MobileNavLink onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}>
              Contact
            </MobileNavLink>
            
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <User size={18} />
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="relative text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 group flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-amber-50"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

const MobileNavLink = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:translate-x-2 flex items-center gap-3 text-left w-full"
  >
    {children}
  </button>
);

export default Navbar;