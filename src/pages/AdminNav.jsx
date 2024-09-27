import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import UploadEvent from "./UploadEvent";
import UploadGallery from "./UploadGallery";
import UploadAwards from "./UploadAwards";
import UploadAnnouncement from "./UploadAnnouncement";
import MarketPlaces from "./MarketPlaces";
import AddFeedback from "./AddFeedback";
import Broadcast from "./Broadcast";
import PostScholar from "./PostScholar";

function AdminNav() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();

  // eslint-disable-next-line no-unused-vars
  const [activecount, setActivecount] = useState(0);
  useEffect(() => {
    setActivecount(location.state.display2);
  }, []);
  // console.log(activecount, "47593");
  // eslint-disable-next-line consistent-return
  const displayfunction = (active) => {
    // eslint-disable-next-line default-case
    switch (active) {
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
    <div
      style={{
        paddingTop: "2vw",
        backgroundColor: "#D4E9DA",
        paddingBottom: "2vw",
      }}
    >
      <Button
        className="btn"
        sx={{
          fontFamily: "ProximaBold",
          color: "white",
          backgroundColor: "#23A380",
          marginLeft: "89.7vw",
          "&:hover": {
            backgroundColor: "#1F735B",
          },
          boxShadow:
            "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
        }}
        onClick={() =>
          navigate("/admin-animation-page", {
            state: { token: location.state.token, ac: activecount },
          })
        }
      >
        Menu
      </Button>
      {displayfunction(activecount)}
    </div>
  );
}

export default AdminNav;
