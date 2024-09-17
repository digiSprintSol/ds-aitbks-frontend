import React from "react";
import { useLocation } from "react-router-dom";

function CulturalEventsImages() {
  const location = useLocation();
  console.log(location.state.row, "hsfkjshfkjf");
  return <div>CulturalEventsImages</div>;
}

export default CulturalEventsImages;
