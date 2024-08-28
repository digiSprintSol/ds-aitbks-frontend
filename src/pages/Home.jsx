import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import "../App.css";
// import "../components/Header/style.module.css"
import Marquee from "react-fast-marquee";
import styles from "../components/Footer/style.module.css";

// import fap from "./images/fap.png";

import {
  cmdata,
  cmdata2,
  ccmdata,
  marqueedata,
  gallery,
  help,
  count,
} from "../Lib/constants";
import logo from "./images/logo.png";

import sixty from "./images/sixty.png";
import userIcon from "./images/userIcon.png";
import quoteIcon from "./images/quoteIcon.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import threecircles from "./images/threecircles.png";
import home1 from "./images/home1.png";
import home2 from "./images/home2.png";
import useCustomFetch from "../Hooks/useCustomFetch";

function Home() {
  const navigate = useNavigate();
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getAllAnnouncements`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  // const data1 = useCustomFetch({
  //   url: `${REACT_APP_FAKE_API}/getImages`,
  //   method: "GET",
  //   headers: {
  //     Token: token,
  //   },
  // });

  const data2 = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getEvents`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  // const [imgPath1, setImgPath1] = useState("");
  // const [imgPath2, setImgPath2] = useState("");

  useEffect(() => {
    // if (data1.data) {
    //   const fileName1 = data1.data.pathOfDocumnet.split("\\").pop();
    //   const exp1 = "/documents/images/".concat(fileName1);
    //   setImgPath1(exp1);
    // }
    // if (data2.data) {
    //   const fileName2 = data2.data.pathOfDocumnet.split("\\").pop();
    //   const exp2 = "/documents/images/".concat(fileName2);
    //   setImgPath2(exp2);
    // }
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const contactRef = useRef();

  if (error || data2.error) return <h1>Error..</h1>;
  if (loading || data2.loading) return <h1>loading...</h1>;

  return (
    <div className="homepage">
      <header>
        <div className="header">
          <div className="right">
            <Link to="/">
              <img
                src="/assets/images/community_logo.png"
                alt="logo"
                className="logo"
              />
            </Link>
            <img
              src="/assets/images/community_title.png"
              alt="title"
              className="title"
            />
          </div>
          <div className="left">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/" className="link" onClick={handleMenuOpen}>
              Members
            </Link>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Trustee</MenuItem>
              <MenuItem onClick={handleMenuClose}>Patron</MenuItem>
              <MenuItem onClick={handleMenuClose}>Life Members</MenuItem>
            </Menu>
            <Link to="/" className="link">
              Events
            </Link>
            <Link
              to="/"
              className="link"
              onClick={() => {
                contactRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </Link>
            <Link to="/market-places" className="link">
              Market Places
            </Link>
            <Button
              className="btn"
              onClick={() => navigate("/auth/registration-one")}
              sx={{
                fontFamily: "ProximaBold",
                color: "white",
                backgroundColor: "#23A380",
                "&:hover": {
                  backgroundColor: "#1F735B",
                },
                boxShadow:
                  "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
              }}
            >
              Register
            </Button>

            <Button
              className="btn"
              onClick={() => navigate("/auth/login")}
              sx={{
                fontFamily: "ProximaBold",
                color: "white",
                backgroundColor: "#23A380",
                "&:hover": {
                  backgroundColor: "#1F735B",
                },
                boxShadow:
                  "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </header>
      <Marquee className="marquee">
        {data.map((d) => (
          <span style={{ paddingRight: "40px" }} key={d.announcementTitle}>
            {d.announcementTitle} | {d.announcementDescription}
          </span>
        ))}
      </Marquee>
      <Box>
        <Marquee velocity={10}>
          <img
            src={home1}
            loading="lazy"
            alt="homepageimage"
            height="400px"
            width="100%"
          />
          <img
            src={home2}
            loading="lazy"
            alt="homepageimage"
            height="400px"
            width="100%"
          />
          {/* <img
            src={imgPath1}
            loading="lazy"
            alt="homepageimage"
            height="400px"
            width="100%"
          /> */}
          {/* <img
            src={imgPath2}
            loading="lazy"
            alt="homepageimage"
            height="400px"
            width="100%"
          /> */}
        </Marquee>
      </Box>
      <div className="firstpart">
        <div className="welcomeclass">
          <h1>Welcome</h1>
          <img src={sixty} alt="sixty" height="20%" width="20%" />
          <h5>Years in Community Service</h5>
          <img src={logo} alt="logo" height="35%" width="35%" />
        </div>
        <h1 className="firstparaheading">
          All India Telaga Balija Kapu Sangham
        </h1>
        <p className="firstpara">
          The Andhra Pradesh Telaga, Balija Kapu Sangham (for short “the
          APTBKS”) was registered under the Societies Registration Act in 1959
          to meet the needs and aspirations of members of the above communities
          in twin cities of Hyderabad & Secunderabad, Andhra Pradesh State, and
          elsewhere in the country and abroad. The aims and objectives of the
          Sangham are to promote, secure, and advance the Economic, Social,
          cultural, and educational activities of the community and to develop
          infrastructure facilities to achieve the above objectives. It also
          acts as a forum for providing a convenient meeting place to instill a
          greater sense of fellowship and networking among its members. The
          APTBKS is committed to fostering unity and cooperation among its
          members, encouraging participation in community development programs,
          and providing support for entrepreneurial initiatives. The Sangham
          seeks to empower its members through various capacity-building
          programs and training sessions, aimed at enhancing their skills and
          knowledge in diverse fields
        </p>
        <br />
        <br />
        <br />
        <Button
          variant="outlined"
          sx={{ backgroundColor: "#23A380", color: "white" }}
        >
          {" "}
          Learn more
        </Button>
        <br />
        <br />
        <hr />
      </div>

      {/* 2nd part ------------------------------------------------------------------------------ */}
      <div className="secondpart">
        <h1
          style={{
            color: "#144047",
            fontSize: "4vw",
            transform: "translate(0,-2vw)",
            fontFamily: "ProximaBold",
          }}
        >
          Office Bearers
        </h1>
        <div className="grid-container">
          {cmdata.map((item) => (
            <div className="item1">
              <img src={item.photo} alt="cm" height="50%" width="50%" />
              <hr />
              <h4
                style={{
                  border: "2px solid transparent",
                  width: "15vw",
                  marginLeft: "3vw",
                  fontFamily: "ProximaBold",
                }}
              >
                {item.heading}
              </h4>
              <p style={{ fontFamily: "ProximaRegular" }}>{item.para}</p>
            </div>
          ))}
        </div>
        <br />
        {/* ---------------------------------------------------------------------------- */}
        <div className="grid-container2">
          {cmdata2.map((item) => (
            <div className="item1">
              <img src={item.photo} alt="cm" height="50%" width="50%" />
              <hr />
              <h4
                style={{
                  border: "2px solid transparent",
                  width: "12vw",
                  marginLeft: "5vw",
                  fontFamily: "ProximaBold",
                }}
              >
                {item.heading}
              </h4>
              <p style={{ fontFamily: "ProximaRegular" }}>{item.para}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />

      {/* 3rd part ------------------------------------------------------------- */}
      <div>
        <h1
          style={{
            color: "#144047",
            fontSize: "4vw",
            marginLeft: "2vw",
            fontFamily: "ProximaBold",
          }}
        >
          Central Committee Members
        </h1>
        <div className="grid-container" style={{ padding: "0 8vw" }}>
          {ccmdata.map((item) => (
            <div className="item1">
              <img src={item.photo} alt="cm" />
              <hr />
              <h4
                style={{
                  border: "2px solid transparent",
                  width: "12vw",
                  marginLeft: "3vw",
                  fontFamily: "ProximaBold",
                }}
              >
                {item.heading}
              </h4>
            </div>
          ))}
        </div>
        <br />
        {/* --------------------------------------------------------------------- */}
        <div className="grid-container3">
          {cmdata2.map((item) => (
            <div className="item1">
              <img src={item.photo} alt="cm" />
              <hr />
              <h4
                style={{
                  border: "2px solid transparent",
                  width: "12vw",
                  marginLeft: "5vw",
                  fontFamily: "ProximaBold",
                  transform: "translate(-1.5vw,0)",
                }}
              >
                {item.heading}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* 4th part --------------------------------------------------------------------------- */}
      <div className="fourthpart">
        <img src={image1} alt="tracedimage" width="95%" />
        <h1 style={{ fontFamily: "ProximaSemibold" }}>Change Everything</h1>
        <h1 style={{ fontFamily: "ProximaBold" }}>We’re here to help us</h1>
        <p style={{ fontFamily: "ProximaRegular" }}>
          All these years we were helped our community in different aspects.
          Conducted multiple events for the community upliftment.
        </p>
        <div className="fourthpartinside">
          {help.map((item) => (
            <div
              style={{
                textAlign: "center",
                cursor: "pointer",
                animation: "bounce 1s linear infinite",
              }}
            >
              <img src={item.image} alt="group" height="60%" width="70%" />
              <h1 style={{ fontFamily: "ProximaSemibold" }}>{item.heading}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* 5th part ---------------------------------------------------------------------------------- */}
      <div className="fifthpart">
        <img
          src={image2}
          alt="backgroundimage"
          className="feedbackimagebackground"
        />
        <h1 style={{ fontFamily: "ProximaBold" }}>Yours Feedbacks</h1>
        <div className="fifthpartinside">
          <h1 style={{ fontFamily: "ProximaBold" }}>
            What People are Talking About us
          </h1>
          <Marquee className="marqueefeedback">
            {marqueedata.map((item) => (
              <div className="fifthpartinsidetwo">
                <img src={userIcon} alt="user_icon" height="50%" width="16%" />
                <div>
                  <h1 style={{ fontFamily: "ProximaBold" }}>{item.name}</h1>
                  <p style={{ fontFamily: "ProximaRegular" }}>{item.tag}</p>
                  <p style={{ fontFamily: "ProximaRegular" }}>{item.info}</p>
                </div>
                <img
                  src={quoteIcon}
                  alt="quote_icon"
                  height="40%"
                  width="15%"
                />
              </div>
            ))}
          </Marquee>
        </div>
        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#1B7DA6",
            marginLeft: "70%",
          }}
          onClick={() => navigate("/feedback")}
        >
          VIEW ALL
        </Button>
      </div>

      {/* 6th part ---------------------------------------------------------------------------------------- */}
      <div className="sixthpart">
        <h1 style={{ fontFamily: "ProximaSemibold" }}>
          We’re here to support our people
        </h1>
        <h1 style={{ fontFamily: "ProximaBold" }}>
          Helping for the people and support Kapu community and under previlaged
        </h1>
        <div className="sixthpartinside">
          <img src={image3} alt="image3" height="25%" width="35%" />
          <img src={threecircles} alt="threecirlces" height="90%" width="45%" />
        </div>
        <Button
          variant="contained"
          disableElevation
          onClick={() => navigate("/donation")}
          sx={{
            backgroundColor: "#23A380",
            marginLeft: "1vw",
            width: "20%",
            borderRadius: "15px",
            marginTop: "5%",
            marginBottom: "7%",
          }}
        >
          START DONATING THEM
        </Button>
      </div>

      {/* 7th part -------------------------------------------------------------------------------------------- */}
      <div className="seventhpart">
        <img src={image5} alt="tracedimage" />
        <h1 style={{ fontFamily: "ProximaBold" }}>Awards</h1>
        <div className="gallerycontainer">
          {gallery.map((item) => (
            <div className="galleryitem1">
              <img src={item} alt="grouppicture" height="95%" width="95%" />
            </div>
          ))}
        </div>
        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#23A380",
            marginLeft: "5vw",
            width: "20%",
            borderRadius: "15px",
            marginTop: "5%",
          }}
        >
          VIEW MORE PHOTOS
        </Button>
      </div>
      {/* 7-2th part -------------------------------------------------------------------------------------------- */}

      <div className="seventhpart">
        <img src={image5} alt="tracedimage" />
        <h1 style={{ fontFamily: "ProximaBold" }}>Gallery</h1>
        <div className="gallerycontainer">
          {gallery.map((item) => (
            <div className="galleryitem1">
              <img src={item} alt="grouppicture" height="95%" width="95%" />
            </div>
          ))}
        </div>
        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#23A380",
            marginLeft: "5vw",
            width: "20%",
            borderRadius: "15px",
            marginTop: "5%",
          }}
          onClick={() => navigate("/gallery")}
        >
          VIEW MORE PHOTOS
        </Button>
      </div>
      {/* --------------------------------------------------------------------------------------- */}

      {/* 8th part ------------------------------------------------------------------------------------------------- */}
      <div className="eighthpart">
        <img src={image6} alt="tracedimage" height="45%" width="48%" />
        <h1 style={{ fontFamily: "ProximaSemibold" }}>
          Let’s support us to help us
        </h1>
        <h1 style={{ fontFamily: "ProximaBold" }}>
          Join your hands with us for a better life and future for our
          community.
        </h1>
        <div className="eighthpartinside">
          {count.map((item) => (
            <div>
              <img src={item.image} alt="group" />
              <h1 style={{ fontFamily: "ProximaBold" }}>{item.heading}</h1>
              <p style={{ fontFamily: "ProximaRegular" }}>{item.para}</p>
            </div>
          ))}
        </div>
        <Button
          variant="contained"
          disableElevation
          onClick={() => navigate("/about-us")}
          sx={{
            backgroundColor: "#23A380",
            marginLeft: "5vw",
            width: "12%",
            borderRadius: "15px",
            marginBottom: "5%",
          }}
        >
          Know More
        </Button>
      </div>
      <div className={styles.footer} ref={contactRef}>
        <img
          src="/assets/images/footer.png"
          alt="footer_bg"
          className={styles.footer_img}
        />
        <div className={styles.content}>
          <Grid container spacing={1}>
            <Grid item sm={2} />
            <Grid item sm={3}>
              <div className={styles.column}>
                <Typography variant="h4" className={styles.footer_text}>
                  Links
                </Typography>
                <Divider className={styles.divider} sx={{ width: "40%" }} />
                <Link to="/" className={styles.link}>
                  About Us
                </Link>
                <Link to="/" className={styles.link}>
                  Gallery
                </Link>
                <Link to="/" clas sName={styles.link}>
                  Events
                </Link>
                <Link to="/" className={styles.link}>
                  Terms of Use
                </Link>
                <Link to="/" className={styles.link}>
                  Copyright Policy
                </Link>
                <Link to="/" className={styles.link}>
                  Privacy Policy
                </Link>
              </div>
            </Grid>
            <Grid item sm={3}>
              <div className={styles.column}>
                <Typography variant="h4" className={styles.footer_text}>
                  Contact
                </Typography>
                <Divider className={styles.divider} sx={{ width: "60%" }} />
                <Link to="/" className={styles.link}>
                  Contact Page
                </Link>
                <Typography variant="body1" className={styles.footer_text}>
                  contact@allindiakapusangam.com
                </Typography>
                <Typography variant="body1" className={styles.footer_text}>
                  040 2761 2388
                </Typography>
              </div>
            </Grid>
            <Grid item sm={3}>
              <div className={styles.column}>
                <Typography variant="h4" className={styles.footer_text}>
                  Office Contact
                </Typography>
                <Divider className={styles.divider} sx={{ width: "90%" }} />
                <Typography variant="body1" className={styles.footer_text}>
                  1-2-605/2/A, Lower Tank Bund Road, Kavadi Guda, Hyderabad,
                  Telangana 500082
                </Typography>
                <div style={{ width: "100%", marginLeft: "80px" }}>
                  <iframe
                    title="Google Maps Location"
                    style={{
                      width: "100%",
                      height: "100px",
                      frameborder: "0",
                      scrolling: "no",
                      marginTop: "10",
                      marginwidth: "0",
                    }}
                    src="https://maps.google.com/maps?width=100%25&amp;height=100px&amp;hl=en&amp;q=1-2-605/2/A,%20Lower%20Tank%20Bund%20Road,%20%20Kavadi%20Guda,%20Hyderabad,%20%20Telangana%20500082+(All%20India%20Telega%20Balija%20Kapu%20Sangam)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.gps.ie/">gps systems</a>
                  </iframe>
                </div>
              </div>
            </Grid>
            <Grid item sm={1} />
          </Grid>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright @2024 by AITBKS | All Rights Reserved
      </div>
    </div>
  );
}

export default Home;
