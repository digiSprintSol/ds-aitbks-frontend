import React from "react";
import { useLocation } from "react-router-dom";
import "./CulturalEventsImages.css";

function CulturalEventsImages() {
  const location = useLocation();
  return (
    <div className="image-grid">
      {location.state.row.imageURLs.map((item) => (
        <img src={item} alt="event" className="grid-image" />
      ))}
    </div>
  );
}

export default CulturalEventsImages;
