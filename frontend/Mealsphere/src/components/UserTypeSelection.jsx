import { Link } from "react-router-dom";

function UserTypeSelectionPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center p-5 w-full">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">MealSphere</h1>
          <div className="flex items-center space-x-8 text-lg font-medium">
            <Link to="/" className="text-gray-300 hover:text-amber-500 transition-colors duration-200">
              Home
            </Link>
            <a href="#reviews" className="text-gray-300 hover:text-amber-500 transition-colors duration-200">
              Feedback
            </a>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-grow flex items-center justify-center py-16 px-4">
          <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">
            <Link to="/login-signup/messOwner">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl w-full max-w-sm mx-auto border border-white/20 
                hover:shadow-2xl hover:scale-110 hover:border-white/50 transition-transform duration-200 cursor-pointer">
                <h2 className="text-3xl font-extrabold text-white mb-4 text-center">
                  Mess Owner
                </h2>
                <p className="text-gray-200 text-center">
                  Manage your mess services, menus, and customer orders efficiently with MealSphere's dedicated tools for mess owners.
                </p>
              </div>
            </Link>
            <Link to="/login-signup/customer">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl w-full max-w-sm mx-auto border border-white/20 
                hover:shadow-2xl hover:scale-110 hover:border-white/50 transition-transform duration-200 cursor-pointer">
                <h2 className="text-3xl font-extrabold text-white mb-4 text-center">
                  Customer
                </h2>
                <p className="text-gray-200 text-center">
                  Discover delicious meals, place orders, and enjoy hassle-free dining from local mess services with MealSphere.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 text-center">
          <p className="text-gray-400 text-lg">
            © {currentYear} MealSphere. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserTypeSelectionPage;