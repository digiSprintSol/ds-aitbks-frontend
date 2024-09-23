import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import president1 from "./images/president1.png";
import president2 from "./images/president2.png";
import president3 from "./images/president3.png";
import president4 from "./images/president4.png";
import president5 from "./images/president5.png";
// import qrcoode from "./images/qr-code.png";
import president7 from "./images/president7.png";
import president8 from "./images/president8.png";
import president9 from "./images/president9.png";

function PresidentAnimationNav() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
      className="presidentbackgroundcolor"
    >
      <Button
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
          navigate("/president-view", {
            state: { display: location.state.ac, token: location.state.token },
          })
        }
        className="presidentclosebutton"
      >
        Close
      </Button>
      <div className="presidentviewhead">
        <div className="presidentviewheadone">
          <button
            type="button"
            className="presidentviewnav"
            onClick={() => {
              navigate("/president-view", {
                state: { display: 0, token: location.state.token },
              });
            }}
          >
            <img src={president1} alt="usersimage" height="40px" width="40px" />
            <h5>Application</h5>
          </button>
          <button
            type="button"
            className="presidentviewnav"
            onClick={() => {
              navigate("/president-view", {
                state: { display: 1, token: location.state.token },
              });
            }}
          >
            <img src={president2} alt="rolesimage" height="40px" width="40px" />
            <h5>Role Management</h5>
          </button>
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
        </div>
        <div className="presidentviewheadtwo">
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

export default PresidentAnimationNav;
