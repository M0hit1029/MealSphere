import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Landing() {
  const [allReviews, setAllReviews] = useState([
    { text: "MealSphere transformed our mess management completely. Highly recommended!", name: "Alex Kumar, Student" },
    { text: "Finally, a solution that makes meal planning effortless and efficient.", name: "Priya Sharma, Working Professional" },
    { text: "The booking system is intuitive and saves so much time every day.", name: "Rahul Patel, Hostel Resident" },
  ]);

  const handleAddReview = (newReview) => {
    setAllReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lbg.jpg"
          alt="Food Management"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Streamline Your
            <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Mess Management
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with local messes, book meals in advance, and enjoy hassle-free dining with our comprehensive management platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/signup">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 text-lg">
                Get Started Today
              </button>
            </Link>
            <button className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
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
      { threshold: 0.2 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About MealSphere
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                MealSphere revolutionizes mess management by connecting students, working professionals, and mess owners through an intuitive digital platform. We understand the challenges of meal planning and aim to make dining convenient and accessible.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our platform streamlines the entire process from menu discovery to meal booking, while helping reduce food waste through better planning and coordination.
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-amber-600 mb-2">1000+</div>
                  <div className="text-gray-600">Happy Users</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                  <div className="text-gray-600">Partner Messes</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Our Mission</h3>
                      <p className="text-gray-600 text-sm">Simplifying meal management for everyone</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">🌱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Sustainability</h3>
                      <p className="text-gray-600 text-sm">Reducing food waste through smart planning</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">🤝</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Community</h3>
                      <p className="text-gray-600 text-sm">Building connections through shared meals</p>
                    </div>
                  </div>
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
      title: "Smart Mess Discovery",
      description: "Find and connect with messes in your area. Browse menus, check availability, and read reviews from other users to make informed dining decisions.",
      icon: "🔍",
      color: "blue"
    },
    {
      title: "Easy Meal Booking",
      description: "Reserve your meals in advance with our simple booking system. Check daily menus and secure your spot without the hassle of waiting in queues.",
      icon: "📱",
      color: "green"
    },
    {
      title: "Reduce Food Waste",
      description: "Help minimize food waste through better meal planning. Our system connects surplus food with those in need, creating a more sustainable dining ecosystem.",
      icon: "🌱",
      color: "amber"
    }
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    amber: "from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how MealSphere makes mess management simple, efficient, and sustainable
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card group transition-all duration-500 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[feature.color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews({ reviews = [] }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Users Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="flex text-amber-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{review.text}"</p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-6xl mb-4">💬</div>
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
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (review && name) {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newReview = { text: review, name };
      onAddReview(newReview);
      setReview("");
      setName("");
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle contact form submission
    console.log("Contact form submitted:", contactForm);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Us */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none resize-none"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-4 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Write a Review */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Share Your Experience</h3>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div>
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none resize-none"
                    rows="4"
                    placeholder="Tell us about your experience with MealSphere..."
                    required
                  ></textarea>
                </div>
                <div className="flex gap-4">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="flex-1 p-4 bg-white border border-gray-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                    placeholder="Your Name"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Review"}
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
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
              MealSphere
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Revolutionizing mess management through technology. Connect, book, and enjoy meals with ease while contributing to a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                📧
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                📱
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                🌐
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about-section" className="hover:text-amber-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#features" className="hover:text-amber-400 transition-colors duration-300">Features</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors duration-300">Reviews</a></li>
              <li><Link to="/signup" className="hover:text-amber-400 transition-colors duration-300">Get Started</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} MealSphere. All rights reserved. Made with ❤️ for better dining experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Landing;