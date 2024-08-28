import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import president1 from "./images/president1.png";
import president2 from "./images/president2.png";
import president3 from "./images/president3.png";
import president4 from "./images/president4.png";
import president5 from "./images/president5.png";
import president6 from "./images/president6.png";
import PresidentUser from "./PresidentUser";
import PresidentCRUD from "./PresidentCRUD";
import UploadEvent from "./UploadEvent";
import UploadGallery from "./UploadGallery";
import UploadAnnouncement from "./UploadAnnouncement";
import MarketPlaces from "./MarketPlaces";
import Qrcode from "./Qrcode";
import EmailBroadcast from "./EmailBroadcast";

function PresidentView() {
  // const navigate = useNavigate();
  // const usernavigation = () => {
  //   navigate('/president-user')
  // }

  const [activecount, setActivecount] = useState(0);

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
        return <UploadAnnouncement />;
      case 5:
        return <MarketPlaces />;
      case 6:
        return <Qrcode />;
      case 7:
        return <EmailBroadcast />;
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
          <img src={president1} alt="usersimage" height="30px" width="30px" />
          <h5>Application</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(1);
          }}
        >
          <img src={president2} alt="rolesimage" height="30px" width="30px" />
          <h5>Role Management</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(2);
          }}
        >
          <img src={president3} alt="eventsimage" height="30px" width="30px" />
          <h5>Events</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(3);
          }}
        >
          <img src={president4} alt="galleryimage" height="30px" width="30px" />
          <h5>Upload Image</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(4);
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
            setActivecount(5);
          }}
        >
          <img
            src={president6}
            alt="announcementimage"
            height="25px"
            width="25px"
          />
          <h5>Add marketplaces</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(6);
          }}
        >
          <img
            src={president6}
            alt="announcementimage"
            height="25px"
            width="25px"
          />
          <h5>Modify QR</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(6);
          }}
        >
          <img
            src={president6}
            alt="announcementimage"
            height="25px"
            width="25px"
          />
          <h5>EmailBroadcast</h5>
        </button>
      </div>
      {displayfunction(activecount)}
    </div>
  );
}

export default PresidentView;
