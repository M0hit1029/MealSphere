import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Store, ArrowRight, Users, Utensils, Calendar, BarChart3, Settings, Shield } from "lucide-react";
import Navbar from "./Navbar";

function UserTypeSelectionPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <Navbar />
      <HeroSection isVisible={isVisible} />
      <Footer />
    </div>
  );
}

function HeroSection({ isVisible }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Choose Your
            <span className="block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mt-2">
              Account Type
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
            Join MealSphere as a mess owner to manage your business or as a customer to discover amazing meals
          </p>
          
          {/* User Type Cards */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
            {/* Mess Owner Card */}
            <Link to="/login-signup/messOwner" className="group">
              <div className="card hover-lift bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200 p-6 sm:p-8 text-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Store className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Mess Owner
                  </h2>
                  
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                    Manage your mess services, menus, and customer orders efficiently with our comprehensive management tools
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg">
                      <Users className="w-6 h-6 text-orange-500 mb-2" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">Manage Members</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg">
                      <Utensils className="w-6 h-6 text-orange-500 mb-2" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">Update Menus</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg">
                      <BarChart3 className="w-6 h-6 text-orange-500 mb-2" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">Track Analytics</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg">
                      <Settings className="w-6 h-6 text-orange-500 mb-2" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">Mess Settings</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    <span className="text-sm sm:text-base">Start Managing</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Customer Card */}
            <Link to="/login-signup/customer" className="group">
              <div className="card hover-lift bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 p-6 sm:p-8 text-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <User className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Customer
                  </h2>
                  
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                    Discover delicious meals, place orders, and enjoy hassle-free dining from local mess services
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg">
                      <Utensils className="w-6 h-6 text-blue-500 mb-2" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">Browse Menus</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg">
                      <Calendar className="w-6 h-6 text-blue-500 mb-2" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">Reserve Meals</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg">
                      <Store className="w-6 h-6 text-blue-500 mb-2" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">Find Nearby</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg">
                      <Shield className="w-6 h-6 text-blue-500 mb-2" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">Secure Orders</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    <span className="text-sm sm:text-base">Start Ordering</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Back to Home Button */}
          <Link to="/">
            <button className="btn-secondary text-sm sm:text-base">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-3 sm:mb-4">
              MealSphere
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Revolutionizing mess management through technology. Connect, book, and enjoy meals with ease.
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><Link to="/" className="hover:text-amber-400 transition-colors duration-300">Home</Link></li>
              <li><Link to="/signup" className="hover:text-amber-400 transition-colors duration-300">Get Started</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © {currentYear} MealSphere. All rights reserved. Made with ❤️ for better dining experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default UserTypeSelectionPage;