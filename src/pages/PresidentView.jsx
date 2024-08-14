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

function PresidentView() {
  // const navigate = useNavigate();
  // const usernavigation = () => {
  //   navigate('/president-user')
  // }
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [event, setEvent] = useState(null);
  const [gallery, setGallery] = useState(null);
  const [announcemnt, setAnnouncement] = useState(null);
  const [marketplaces, setMarketplaces] = useState(null);
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="presidentviewhead">
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setUser(1);
            setRole(null);
            setEvent(null);
            setGallery(null);
            setAnnouncement(null);
            setMarketplaces(null);
          }}
        >
          <img src={president1} alt="usersimage" height="30px" width="30px" />
          <h5>Application</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setUser(null);
            setRole(1);
            setEvent(null);
            setGallery(null);
            setAnnouncement(null);
            setMarketplaces(null);
          }}
        >
          <img src={president2} alt="rolesimage" height="30px" width="30px" />
          <h5>Role Management</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setUser(null);
            setRole(null);
            setEvent(1);
            setGallery(null);
            setAnnouncement(null);
            setMarketplaces(null);
          }}
        >
          <img src={president3} alt="eventsimage" height="30px" width="30px" />
          <h5>Events</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setUser(null);
            setRole(null);
            setEvent(null);
            setGallery(1);
            setAnnouncement(null);
            setMarketplaces(null);
          }}
        >
          <img src={president4} alt="galleryimage" height="30px" width="30px" />
          <h5>Upload Image</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setUser(null);
            setRole(null);
            setEvent(null);
            setGallery(null);
            setAnnouncement(1);
            setMarketplaces(null);
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
            setUser(null);
            setRole(null);
            setEvent(null);
            setGallery(null);
            setAnnouncement(null);
            setMarketplaces(1);
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
      </div>
      {user && <PresidentUser />}
      {role && <PresidentCRUD />}
      {event && <UploadEvent />}
      {gallery && <UploadGallery />}
      {announcemnt && <UploadAnnouncement />}
      {marketplaces && <MarketPlaces />}
    </div>
  );
}

export default PresidentView;
