import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PresidentUser from "./PresidentUser";
import PresidentCRUD from "./PresidentCRUD";
import UploadEvent from "./UploadEvent";
import UploadGallery from "./UploadGallery";
import UploadAwards from "./UploadAwards";
import UploadAnnouncement from "./UploadAnnouncement";
import MarketPlaces from "./MarketPlaces";
import AddFeedback from "./AddFeedback";
import Broadcast from "./Broadcast";
import PostScholar from "./PostScholar";

function PresidentView() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();

  // eslint-disable-next-line no-unused-vars
  const [activecount, setActivecount] = useState(0);
  useEffect(() => {
    setActivecount(location.state.value);
  });
  // eslint-disable-next-line consistent-return
  const displayfunction = (active) => {
    // eslint-disable-next-line default-case
    switch (active) {
      case 0:
        return <PresidentUser />;
      case 1:
        return <PresidentCRUD />;
      case 2:
        return <UploadEvent />;
      case 3:
        return <UploadGallery />;
      case 4:
        return <UploadAwards />;
      case 5:
        return <UploadAnnouncement />;
      case 6:
        return <MarketPlaces />;
      case 7:
        return <AddFeedback />;
      case 8:
        return <Broadcast />;
      case 9:
        return <PostScholar />;
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button
        type="button"
        style={{
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          backgroundImage: "linear-gradient(148deg, #ffdead, #ffa04c)",
          fontWeight: "bold",
          marginLeft: "90vw",
        }}
        onClick={() =>
          navigate("/president-animation-page", {
            state: { token: location.state.token, ac: activecount },
          })
        }
      >
        Menu
      </button>
      {displayfunction(activecount)}
    </div>
  );
}

export default PresidentView;
