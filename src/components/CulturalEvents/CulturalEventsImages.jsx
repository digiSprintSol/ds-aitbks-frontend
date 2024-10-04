import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CulturalEventsImages.css";
import { Button, Typography, Box } from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import ".pnpm/yet-another-react-lightbox@3.21.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/yet-another-react-lightbox/dist/styles.css";

function CulturalEventsImages() {
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);
  const imageData = [];
  const imageArrangement = () => {
    const n = location.state.row.imageURLs.length;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < n; i++) {
      imageData.push({ src: location.state.row.imageURLs[i] });
    }
  };
  return (
    <div>
      {imageArrangement()}
      <Box sx={{ textAlign: "center", margin: "1.5vw 0vw" }}>
        <Typography variant="h3" sx={{ fontFamily: "ProximaBold" }}>
          {location.state.row.title}
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: "ProximaSemiBold" }}>
          {location.state.row.description}
        </Typography>
      </Box>

      <div className="image-grid">
        {location.state.row.imageURLs.map((item) => (
          <Button
            onClick={() => setOpen(true)}
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <img src={item} alt="event" className="grid-image" />
          </Button>
        ))}
      </div>
      <Lightbox open={open} slides={imageData} close={() => setOpen(false)} />
    </div>
  );
}

export default CulturalEventsImages;
