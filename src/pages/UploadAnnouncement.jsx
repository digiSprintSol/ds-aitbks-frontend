import React from "react";
import upload2 from "./images/upload2.png";
import "../App.css";

function UploadAnnouncement() {
  return (
    <div className="uploadannouncementhead">
      <h1>Make a Announcement</h1>
      <h1>Announcement Details</h1>
      <input type="text" placeholder="Title" className="uploadeventinput1" />
      <br />
      <br />
      <input
        type="text"
        placeholder="Description"
        className="uploadeventinput2"
      />
      <br />
      <br />
      <button type="button" className="uploadannouncementbuttonclass">
        <div>
          <span>Post </span>
          <img src={upload2} alt="smallupload" height="15vw" width="15vw" />
        </div>
      </button>
    </div>
  );
}

export default UploadAnnouncement;
