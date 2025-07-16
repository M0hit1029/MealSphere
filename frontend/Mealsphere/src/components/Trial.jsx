import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Trial = () => {
  const mapRef = useRef(null);
  const [marker, setMarker] = useState(null);
  const [landmark, setLandmark] = useState("");

  useEffect(() => {
    const map = L.map("map").setView([20.5937, 78.9629], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const newMarker = L.marker([20.5937, 78.9629], { draggable: true }).addTo(map);

    newMarker.on("dragend", (event) => {
      const { lat, lng } = event.target.getLatLng();
      console.log("Selected Location:", lat, lng);
    });

    map.on("click", (e) => {
      newMarker.setLatLng(e.latlng);
      console.log("Clicked Location:", e.latlng.lat, e.latlng.lng);
    });

    setMarker(newMarker);
    mapRef.current = map;

    return () => {
      map.remove();
    };
  }, []);

  const searchLandmark = async () => {
    if (!landmark) return;
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${landmark}`);
    const data = await response.json();
    if (data.length > 0) {
      const { lat, lon } = data[0];
      mapRef.current.setView([lat, lon], 15);
      marker?.setLatLng([lat, lon]);
    } else {
      alert("Landmark not found!");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter landmark"
        value={landmark}
        onChange={(e) => setLandmark(e.target.value)}
      />
      <button onClick={searchLandmark}>Search</button>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
};

export default Trial;
