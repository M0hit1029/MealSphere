import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Landing() {
  const [allReviews, setAllReviews] = useState([
    { text: "Dorm dinners are a blast now!", name: "Alex, Student" },
    { text: "Meal prep sanity, finally!", name: "Priya, Busy Mom" },
  ]);

  const handleAddReview = (newReview) => {
    setAllReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 flex flex-col overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Features />
      <Reviews reviews={allReviews} />
      <ContactAndReviews allReviews={allReviews} onAddReview={handleAddReview} />
      <Footer />
    </div>
  );
}

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src="/lbg.jpg"
          alt="Food Mess Management"
          className="w-full h-full object-cover brightness-75 scale-105 animate-float"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-blue-900/40 to-indigo-900/60" />
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-8xl font-extrabold leading-tight tracking-wide mb-6">
            <span className="block animate-slideIn">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl animate-glow">
                Your Mess,
              </span>
            </span>
            <span className="block animate-slideIn animate-delay-300">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl animate-glow">
                Organized, Simplified
              </span>
            </span>
          </h1>
          
          <p className="text-white/90 text-xl md:text-3xl font-light mb-8 animate-fadeIn animate-delay-500 max-w-4xl mx-auto leading-relaxed">
            Discover Today's Menu, Book Meals, and Stay in Control — Seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animate-delay-500">
            <Link to="/signup">
              <button className="btn-primary text-lg px-8 py-4 animate-glow">
                Get Started Today
                <span className="ml-2">🚀</span>
              </button>
            </Link>
            <button className="bg-white/10 backdrop-blur-md text-white font-semibold py-4 px-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-lg">
              Watch Demo
              <span className="ml-2">▶️</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="w-full py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-5xl md:text-6xl font-extrabold text-gradient mb-12 text-center tracking-tight animate-slideIn">
            Who We Are
          </h3>
          
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 animate-scaleIn animate-delay-200">
            <p className="text-slate-700 text-xl md:text-2xl leading-relaxed text-center font-light">
              MealSphere is your partner in turning culinary chaos into delicious harmony. Born from the hustle of student kitchens and the whirlwind of busy schedules, we're here to streamline your meals with intuitive tools and a passion for connection.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-8">
                <div className="text-center animate-fadeIn animate-delay-300">
                  <div className="text-4xl font-bold text-gradient">1000+</div>
                  <div className="text-gray-600">Happy Users</div>
                </div>
                <div className="text-center animate-fadeIn animate-delay-500">
                  <div className="text-4xl font-bold text-gradient">50+</div>
                  <div className="text-gray-600">Partner Messes</div>
                </div>
                <div className="text-center animate-fadeIn animate-delay-500">
                  <div className="text-4xl font-bold text-gradient">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Connect with Messes",
      description: "Link up with messes near you—whether it's your dorm, campus canteen, or local dining hall. MealSphere brings people together over shared meals, making every mess a community.",
      icon: "🤝",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Book Your Bite",
      description: "Check the daily menu and secure your meal in advance. With MealSphere, reserve your spot at any mess effortlessly and enjoy your food without the wait.",
      icon: "📱",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Fight Food Waste",
      description: "We connect messes with NGOs and organizations to donate surplus food, ensuring nothing goes to waste and every extra bite reaches someone in need.",
      icon: "🌱",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse animate-delay-300"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h3 className="text-5xl md:text-6xl font-extrabold text-gradient mb-16 text-center tracking-tight animate-slideIn">
          Our Key Features
        </h3>
        
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative p-8 text-white">
                <div className="text-6xl mb-6 animate-bounce-slow group-hover:animate-pulse">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-white/90 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg group-hover:bg-white/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews({ reviews = [] }) {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h4 className="text-4xl font-extrabold text-gradient mb-12 text-center animate-slideIn">
          What Our Users Say
        </h4>
        <div className="grid gap-8 md:grid-cols-2">
          {reviews.length > 0 ? (
            reviews.map((rev, index) => (
              <div 
                key={index} 
                className="card p-8 hover-lift animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {rev.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 italic text-lg mb-3">"{rev.text}"</p>
                    <p className="text-gradient-warm font-semibold">— {rev.name}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center">
              <div className="animate-bounce-slow text-6xl mb-4">💬</div>
              <p className="text-gray-500 text-xl">No reviews yet. Be the first to share your experience!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactAndReviews({ allReviews, onAddReview }) {
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (review && name) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newReview = { text: review, name };
      onAddReview(newReview);
      setReview("");
      setName("");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="w-full py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Us */}
          <div className="animate-slideIn">
            <h3 className="text-4xl font-extrabold text-gradient mb-8 text-center">Contact Us</h3>
            <div className="card-gradient p-8">
              <form className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-white/80 border-2 border-transparent rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-white/80 border-2 border-transparent rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-4 bg-white/80 border-2 border-transparent rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none"
                  ></textarea>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <button type="submit" className="btn-primary w-full text-lg">
                  Send Message
                  <span className="ml-2">📧</span>
                </button>
              </form>
            </div>
          </div>

          {/* Write a Review */}
          <div className="animate-slideIn animate-delay-200">
            <h3 className="text-4xl font-extrabold text-gradient mb-8 text-center">Write a Review</h3>
            <div className="card-gradient p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="w-full p-4 bg-white/80 border-2 border-transparent rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none"
                    rows="4"
                    placeholder="Share your thoughts..."
                  ></textarea>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="w-full p-4 bg-white/80 border-2 border-transparent rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                      placeholder="Your Name"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-secondary px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="spinner w-5 h-5 mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      <>
                        Submit
                        <span className="ml-2">⭐</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 py-12 mt-auto text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4 animate-glow">
            MealSphere
          </h3>
          <p className="text-gray-300 text-lg">Making every meal a delightful experience</p>
        </div>
        
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-2xl hover:scale-110 transform">
            📧
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-2xl hover:scale-110 transform">
            📱
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-2xl hover:scale-110 transform">
            🌐
          </a>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-lg animate-fadeIn">
            © {currentYear} MealSphere. All Rights Reserved. Made with ❤️ for food lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Landing;