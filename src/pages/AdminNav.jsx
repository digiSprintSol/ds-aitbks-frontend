import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import president3 from "./images/president3.png";
import president4 from "./images/president4.png";
import president5 from "./images/president5.png";
import president7 from "./images/president7.png";
import president8 from "./images/president8.png";
import president9 from "./images/president9.png";
import UploadEvent from "./UploadEvent";
import UploadGallery from "./UploadGallery";
import UploadAwards from "./UploadAwards";
import UploadAnnouncement from "./UploadAnnouncement";
import MarketPlaces from "./MarketPlaces";
import AddFeedback from "./AddFeedback";
import Broadcast from "./Broadcast";

function AdminNav() {
  // const navigate = useNavigate();
  // const usernavigation = () => {
  //   navigate('/president-user')
  // }

  const location = useLocation();

  const [activecount, setActivecount] = useState(location.state.display);

  // eslint-disable-next-line consistent-return
  const displayfunction = (active) => {
    // eslint-disable-next-line default-case
    switch (active) {
      case 0:
        return <UploadEvent />;
      case 1:
        return <UploadGallery />;
      case 2:
        return <UploadAwards />;
      case 3:
        return <UploadAnnouncement />;
      case 4:
        return <MarketPlaces />;
      case 5:
        return <AddFeedback />;
      case 6:
        return <Broadcast />;
    }
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="presidentviewhead">
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(0);
          }}
        >
          <img src={president3} alt="eventsimage" height="30px" width="30px" />
          <h5>Events</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(1);
          }}
        >
          <img src={president4} alt="galleryimage" height="30px" width="30px" />
          <h5>Gallery</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(2);
          }}
        >
          <img src={president4} alt="galleryimage" height="30px" width="30px" />
          <h5>Awards</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(3);
          }}
        >
          <img
            src={president5}
            alt="announcementimage"
            height="30px"
            width="30px"
          />
          <h5>Announcemnt</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(4);
          }}
        >
          <img
            src={president8}
            alt="announcementimage"
            height="25px"
            width="27px"
          />
          <h5>Add marketplaces</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(5);
          }}
        >
          <img
            src={president9}
            alt="announcementimage"
            height="35px"
            width="30px"
          />
          <h5>Add Feedback</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(6);
          }}
        >
          <img
            src={president7}
            alt="announcementimage"
            height="20px"
            width="26px"
          />
          <h5>EmailBroadcast</h5>
        </button>
      </div>
      {displayfunction(activecount)}
    </div>
  );
}

export default AdminNav;
