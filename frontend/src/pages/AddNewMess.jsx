
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Navbar from "../components/MessDashboardNavbar";

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const AddMessPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    liveLocation: { type: "Point", coordinates: [0, 0] }, // Match backend GeoJSON format
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // LocationIQ API key
  const LOCATIONIQ_API_KEY = "pk.a4dfe60149deb8fe491513e5931f5656";

  // Debounce search query to prevent excessive API calls
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!searchQuery) {
        setSuggestions([]);
        return;
      }
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(
            `https://api.locationiq.com/v1/autocomplete.php?key=${LOCATIONIQ_API_KEY}&q=${searchQuery}&limit=5&countrycodes=in`
          );
          setSuggestions(response.data);
        } catch (err) {
          console.error("Error fetching suggestions:", err);
          setError("Failed to fetch location suggestions.");
        }
      };
      fetchSuggestions();
    }, 500);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  // Component to handle map interactions and updates
  const MapController = ({ coordinates }) => {
    const map = useMap();

    useEffect(() => {
      if (coordinates[0] !== 0 && coordinates[1] !== 0) {
        map.setView([coordinates[1], coordinates[0]], 15); // Zoom to location
      }
    }, [coordinates, map]);

    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setFormData((prev) => ({
          ...prev,
          liveLocation: { type: "Point", coordinates: [lng, lat] },
        }));
        setSearchQuery(""); // Clear search query on map click
        setSuggestions([]); // Clear suggestions
      },
    });

    return coordinates[0] !== 0 ? (
      <Marker position={[coordinates[1], coordinates[0]]} />
    ) : null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSuggestionSelect = (suggestion) => {
    setFormData((prev) => ({
      ...prev,
      liveLocation: { type: "Point", coordinates: [parseFloat(suggestion.lon), parseFloat(suggestion.lat)] },
      address: suggestion.display_name, // Auto-fill address with suggestion
    }));
    setSearchQuery(suggestion.display_name);
    setSuggestions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("address", formData.address);
      data.append("liveLocation", JSON.stringify(formData.liveLocation));
      if (image) {
        data.append("image", image);
      }

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/mess/register`,
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setSuccess(response.data.message);
      setTimeout(() => navigate("/mess-dashboard"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to register mess");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col p-4 sm:p-5 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <Navbar />

      <div className="container mx-auto px-4 py-6 sm:py-8 mt-16 sm:mt-20 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 mb-4 sm:mb-6 mt-2 sm:mt-4 relative z-20 animate-slideIn">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
            <span className="mr-2">🍽️</span> Register New Mess
          </h2>
        </div>

        {success && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg shadow-md flex items-center animate-slideUp">
            <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p>{success}</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg shadow-md flex items-center animate-slideUp">
            <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p>{error}</p>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto animate-fadeIn">
          <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Mess Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter mess name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Search Location (for Map)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a location in India..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
                {suggestions.length > 0 && (
                  <ul className="absolute z-20 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto shadow-lg">
                    {suggestions.map((suggestion) => (
                      <li
                        key={suggestion.place_id}
                        onClick={() => handleSuggestionSelect(suggestion)}
                        className="p-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                      >
                        {suggestion.display_name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address manually"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Select Location on Map
              </label>
              <MapContainer
                center={[20.5937, 78.9629]} // Center of India
                zoom={5}
                style={{ height: "400px", width: "100%" }}
                className="rounded-lg border border-gray-300"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <MapController coordinates={formData.liveLocation.coordinates} />
              </MapContainer>
              <p className="text-sm text-gray-500 mt-2">
                Selected: Lat: {formData.liveLocation.coordinates[1].toFixed(4)}, Lon: {formData.liveLocation.coordinates[0].toFixed(4)}
              </p>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
              />
              {imagePreview && (
                <div className="mt-4 relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full max-h-48 object-cover rounded-lg shadow-md"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate("/mess-dashboard")}
                className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Registering...
                  </span>
                ) : (
                  "Register Mess"
                )}
              </button>
            </div>
          </form>
        </div>
        </div>
    </div>
  );
};

export default AddMessPage;