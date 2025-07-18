import { useState } from "react";
import { Link } from "react-router-dom"; // For navigation
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
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
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
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="/lbg.jpg"
        alt="Food Mess Management"
        className="w-full h-[100vh] object-cover brightness-85"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-end justify-center text-right px-10 md:px-20">
        <h2 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-wide">
          <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
            Your Mess,
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
            Organized, Simplified
          </span>
        </h2>
        <p className="text-white mt-6 text-2xl">
          Discover Today’s Menu, Book Meals, and Stay in Control — Seamlessly.
        </p>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <section className="w-full py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-5xl font-extrabold text-amber-500 mb-8 text-center tracking-tight">
          Who We Are
        </h3>
        <p className="text-slate-800 text-xl leading-relaxed max-w-4xl mx-auto text-center">
          MealSphere is your partner in turning culinary chaos into delicious harmony. Born from the hustle of student kitchens and the whirlwind of busy schedules, we’re here to streamline your meals with intuitive tools and a passion for connection. Whether it’s planning a week’s worth of dinners, coordinating with roommates, or simply finding joy in the mess, we’ve got you covered. Our goal is simple: make every bite a moment worth savoring.
        </p>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-4xl font-extrabold text-amber-500 mb-12 text-center tracking-tight">
          Our Key Features
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl bg-white cursor-pointer 
                          transition-shadow duration-300 transform hover:scale-105 ease-out">
            <h4 className="text-2xl font-bold text-amber-500 mb-4">Connect with Messes</h4>
            <p className="text-slate-800 text-lg leading-relaxed">
              Link up with messes near you—whether it’s your dorm, campus canteen, or local dining hall. MealSphere brings people together over shared meals, making every mess a community.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl bg-white cursor-pointer 
                          transition-shadow duration-300 transform hover:scale-105 ease-out">
            <h4 className="text-2xl font-bold text-amber-500 mb-4">Book Your Bite</h4>
            <p className="text-slate-800 text-lg leading-relaxed">
              Check the daily menu and secure your meal in advance. With MealSphere, reserve your spot at any mess effortlessly and enjoy your food without the wait.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl bg-white cursor-pointer 
                          transition-shadow duration-300 transform hover:scale-105 ease-out">
            <h4 className="text-2xl font-bold text-amber-500 mb-4">Fight Food Waste</h4>
            <p className="text-slate-800 text-lg leading-relaxed">
              We connect messes with NGOs and organizations to donate surplus food, ensuring nothing goes to waste and every extra bite reaches someone in need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews({ reviews = [] }) {
  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h4 className="text-3xl font-extrabold text-amber-500 mb-8 text-center">
          What Our Users Say
        </h4>
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.length > 0 ? (
            reviews.map((rev, index) => (
              <div key={index} className="p-6 rounded-xl shadow-md border-l-4 border-amber-400 bg-white">
                <p className="text-gray-800 italic">"{rev.text}"</p>
                <p className="text-amber-700 font-semibold mt-2">— {rev.name}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactAndReviews({ allReviews, onAddReview }) {
  const [review, setReview] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review && name) {
      const newReview = { text: review, name };
      onAddReview(newReview);
      setReview("");
      setName("");
    }
  };

  return (
    <section id="reviews" className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="md:flex md:space-x-8">
          {/* Contact Us */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-extrabold text-amber-500 mb-6 text-center">Contact Us</h3>
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-white border border-amber-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800 placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-white border border-amber-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800 placeholder-gray-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 bg-white border border-amber-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800 placeholder-gray-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Write a Review */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-extrabold text-amber-500 mb-6 text-center">Write a Review</h3>
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full p-3 bg-white border border-amber-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800 placeholder-gray-500"
                  rows="4"
                  placeholder="Share your thoughts..."
                ></textarea>
                <div className="flex justify-between items-center">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="w-2/3 p-3 bg-white border border-amber-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800 placeholder-gray-500"
                    placeholder="Your Name"
                  />
                  <button
                    type="submit"
                    className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-md"
                  >
                    Submit
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
    <footer className="w-full bg-[#0000006f] py-6 mt-auto text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg">© {currentYear} MealSphere. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Landing;