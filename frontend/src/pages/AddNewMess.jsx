import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
    liveLocation: { coordinates: [0, 0] }, // [longitude, latitude]
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSelecting, setIsSelecting] = useState(false); // New flag to control useEffect
  const navigate = useNavigate();

  // LocationIQ API key
  const LOCATIONIQ_API_KEY = "pk.a4dfe60149deb8fe491513e5931f5656";

  // Fetch location suggestions from LocationIQ for map only
  useEffect(() => {
    const fetchSuggestions = async () => {
        console.log(isSelecting);
      if(!isSelecting){
        setIsSelecting(true); // Reset the flag after suggestion selection
        return;
      }
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
  }, [searchQuery]); // Add isSelecting as dependency

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
          liveLocation: { coordinates: [lng, lat] },
        }));
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

  const handleSuggestionSelect = (suggestion) => {
    setIsSelecting(false); // Set flag to true to skip useEffect
    setFormData((prev) => ({
      ...prev,
      liveLocation: { coordinates: [parseFloat(suggestion.lon), parseFloat(suggestion.lat)] },
    }));
    setSearchQuery(suggestion.display_name); // Set the input to the suggestion's display name
    setSuggestions([]); // Clear suggestions to close dropdown
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/mess/register`,
        formData,
        { withCredentials: true }
      );
      setSuccess(response.data.message);
      setTimeout(() => navigate("/mess-dashboard"), 1500); // Redirect after success
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Mess</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Mess Name</label>
            <input
              type="text"
              name="name"
              placeholder="Mess Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Search Location (for Map)</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a location in India..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <label className="block text-gray-700 font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address manually"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Select Location on Map</label>
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

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => navigate("/mess-dashboard")}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
            >
              {loading ? "Registering..." : "Register Mess"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMessPage;