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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
          : 'bg-white/10 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="relative">
          <div className={`text-2xl font-bold transition-all duration-300 ${
            isScrolled 
              ? 'text-gray-900' 
              : 'text-white'
          }`}>
            <span className={`${
              isScrolled 
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent' 
                : 'text-white'
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
          <NavLink href="#reviews" isScrolled={isScrolled}>Contact</NavLink>
          
          <Link to="/signup">
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-orange-700 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              <User size={18} />
              Join Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
            isScrolled 
              ? 'text-gray-700 hover:bg-gray-100' 
              : 'text-white hover:bg-white/20'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg shadow-xl border-t border-gray-200/50">
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
              Contact
            </MobileNavLink>
            
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2">
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

const NavLink = ({ href, children, isScrolled }) => (
  <a
    href={href}
    className={`relative font-medium transition-all duration-300 group ${
      isScrolled 
        ? 'text-gray-700 hover:text-amber-600' 
        : 'text-white/90 hover:text-amber-400'
    }`}
  >
    {children}
    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
      isScrolled 
        ? 'bg-amber-600' 
        : 'bg-amber-400'
    }`}></span>
  </a>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 rounded-lg hover:bg-amber-50 transition-all duration-300"
  >
    {children}
  </a>
);

export default Navbar;