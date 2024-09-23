import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import president3 from "./images/president3.png";
import president4 from "./images/president4.png";
import president5 from "./images/president5.png";
// import qrcoode from "./images/qr-code.png";
import president7 from "./images/president7.png";
import president8 from "./images/president8.png";
import president9 from "./images/president9.png";

function AdminAnimationNav() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
      className="presidentbackgroundcolor"
    >
      <button
        type="button"
        style={{
          padding: "10px 15px",
          borderRadius: "17px",
          border: "none",
          backgroundImage: "linear-gradient(148deg, #ffdead, #ffa04c)",
          fontWeight: "bold",
          marginLeft: "90vw",
        }}
        onClick={() =>
          navigate("/president-view", {
            state: { display: location.state.ac, token: location.state.token },
          })
        }
        className="presidentclosebutton"
      >
        Close
      </button>
      <div className="presidentviewhead">
        <div className="presidentviewheadone">
          <button
            type="button"
            className="presidentviewnav"
            onClick={() => {
              navigate("/president-view", {
                state: { display: 2, token: location.state.token },
              });
            }}
          >
            <img
              src={president3}
              alt="eventsimage"
              height="40px"
              width="40px"
            />
            <h5>Events</h5>
          </button>
          <button
            type="button"
            className="presidentviewnav"
            onClick={() => {
              navigate("/president-view", {
                state: { display: 3, token: location.state.token },
              });
            }}
          >
            <img
              src={president4}
              alt="galleryimage"
              height="40px"
              width="40px"
            />
            <h5>Gallery</h5>
          </button>
          <button
            type="button"
            className="presidentviewnav"
            onClick={() => {
              navigate("/president-view", {
                state: { display: 4, token: location.state.token },
              });
            }}
          >
            <img
              src={president4}
              alt="galleryimage"
              height="40px"
              width="40px"
            />
            <h5>Awards</h5>
          </button>
          <button
            type="button"
            className="presidentviewnav"
            onClick={() => {
              navigate("/president-view", {
                state: { display: 5, token: location.state.token },
              });
            }}
          >
            <img
              src={president5}
              alt="announcementimage"
              height="40px"
              width="40px"
            />
            <h5>Announcemnt</h5>
          </button>
        </div>
        <div className="presidentviewheadtwo">
          <button
            type="button"
            className="presidentviewnav"
            onClick={() => {
              navigate("/president-view", {
                state: { display: 6, token: location.state.token },
              });
            }}
          >
            <img
              src={president8}
              alt="announcementimage"
              height="40px"
              width="40px"
            />
            <h5>Add marketplaces</h5>
          </button>
          <button
            type="button"
            className="presidentviewnav"
            onClick={() => {
              navigate("/president-view", {
                state: { display: 7, token: location.state.token },
              });
            }}
          >
            <img
              src={president9}
              alt="announcementimage"
              height="45px"
              width="40px"
            />
            <h5>Add Feedback</h5>
          </button>
          <button
            type="button"
            className="presidentviewnav"
            onClick={() => {
              navigate("/president-view", {
                state: { display: 8, token: location.state.token },
              });
            }}
          >
            <img
              src={president7}
              alt="announcementimage"
              height="33px"
              width="40px"
            />
            <h5>EmailBroadcast</h5>
          </button>
          <button
            type="button"
            className="presidentviewnav"
            onClick={() => {
              navigate("/president-view", {
                state: { display: 9, token: location.state.token },
              });
            }}
          >
            <img
              src={president7}
              alt="announcementimage"
              height="33px"
              width="40px"
            />
            <h5>Add ScholarShip</h5>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminAnimationNav;
