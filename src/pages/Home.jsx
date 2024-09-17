/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
  Button,
  Skeleton,
  Avatar,
} from "@mui/material";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import styles from "../components/Footer/style.module.css";

import {
  cmdata,
  cmdata2,
  ccmdata,
  ccmdata2,
  marqueedata,
  // gallery,
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
// import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import threecircles from "./images/threecircles.png";
import home1 from "./images/home1.jpg";
import home2 from "./images/home2.jpeg";
import home3 from "./images/home3.jpg";
import home4 from "./images/home4.jpg";
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

  // const data2 = useCustomFetch({
  //   url: `${REACT_APP_FAKE_API}/getEvents`,
  //   method: "GET",
  //   headers: {
  //     Token: token,
  //   },
  // });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const contactRef = useRef();

  const imageClickHandler = () => {
    navigate("/getscholar");
  };

  if (error) return <h1>Error..</h1>;
  // const loading2 = true;
  if (loading)
    return (
      <div>
        <Box sx={{ width: 1400, display: "flex" }}>
          <Skeleton
            variant="circular"
            animation="wave"
            sx={{ padding: "30px", marginTop: "15px", marginLeft: "20px" }}
          >
            <Avatar />
          </Skeleton>
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={400}
            height={38}
            sx={{ margin: "40px 20px 0px 30px", borderRadius: "30px" }}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={120}
            height={35}
            sx={{ margin: "40px 20px 0px 430px", borderRadius: "30px" }}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={100}
            height={35}
            sx={{ margin: "40px 20px 0px 0px", borderRadius: "30px" }}
          />
        </Box>
        <Box sx={{ padding: "20px" }}>
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={1240}
            height={50}
            sx={{ marginTop: "5px", borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={1240}
            height={350}
            sx={{ marginTop: "5px", borderRadius: "10px" }}
          />
        </Box>
      </div>
    );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
              <MenuItem onClick={() => navigate("/trustee")}>Trustee</MenuItem>
              <MenuItem onClick={() => navigate("/patron")}>Patron</MenuItem>
              <MenuItem onClick={() => navigate("/lifemembers")}>
                Life Members
              </MenuItem>
            </Menu>
            {/* <Link to="/events" className="link">
              Events
            </Link> */}
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
        {data.map((d, index) => (
          <span
            style={{
              paddingRight: "40px",
              backgroundColor: index === data.length - 1 ? "white" : "#54AB66",
              padding:
                index === data.length - 1 ? "10px 20px 5px 20px" : "0px 20px",
              color: index === data.length - 1 ? "#82372A" : "white",
              fontWeight: index === data.length - 1 ? "bold" : "normal",
              fontFamily: "ProximaSemiBold",
            }}
            key={d.title}
          >
            {d.title} | {d.description}
          </span>
        ))}
      </Marquee>

      <Box>
        <Slider {...settings}>
          <img
            src={home1}
            loading="lazy"
            alt="homepageimage"
            height="440px"
            width="100%"
          />
          <img
            src={home2}
            loading="lazy"
            alt="homepageimage"
            height="440px"
            width="100%"
          />
          <img
            src={home3}
            loading="lazy"
            alt="homepageimage"
            height="440px"
            width="100%"
          />
          <img
            src={home4}
            loading="lazy"
            alt="homepageimage"
            height="440px"
            width="100%"
          />
          {/* <img
            src={imgPath1}
            loading="lazy"
            alt="homepageimage"
            height="400px"
            width="100%"
          /> */}
        </Slider>
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
        <Typography variant="body1" className="firstpara">
          The Andhra Pradesh Telaga, Balija Kapu Sangham (for short “the
          AITBKS”) was registered under the Societies Registration Act in 1959
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
        </Typography>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#23A380",
            color: "white",
            "&:hover": {
              backgroundColor: "#1F735B",
            },
          }}
          onClick={() => navigate("/about-us")}
        >
          Learn more
        </Button>
        <br />
        <br />
        <hr />
      </div>

      <div className="secondpart">
        <h1
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#144047",
            fontSize: "4vw",
            transform: "translate(0,-2vw)",
            fontFamily: "ProximaBold",
          }}
        >
          Founders
          <hr
            style={{
              width: "13%",
              border: "2px solid #41965B",
              marginTop: "0.1vw",
            }}
          />
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
      </div>
      <hr />
      {/* 2nd part ------------------------------------------------------------------------------ */}
      <div className="secondpart">
        <h1
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#144047",
            fontSize: "4vw",
            transform: "translate(0,-2vw)",
            fontFamily: "ProximaBold",
          }}
        >
          Office Bearers
          <hr
            style={{
              width: "20%",
              border: "2px solid #41965B",
              marginTop: "0.1vw",
            }}
          />
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#144047",
            fontSize: "4vw",
            marginLeft: "2vw",
            fontFamily: "ProximaBold",
          }}
        >
          Central Committee Members
          <hr
            style={{
              width: "45%",
              border: "2px solid #41965B",
              marginTop: "0.1vw",
            }}
          />
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
          {ccmdata2.map((item) => (
            <div className="item1" style={{ width: "22vw" }}>
              <img src={item.photo} alt="ccm" />
              <hr />
              <h4
                style={{
                  border: "2px solid transparent",
                  width: "12vw",
                  marginLeft: "5.5vw",
                  fontFamily: "ProximaBold",
                  // transform: "translate(-1.5vw,0)",
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
        <h1 style={{ fontFamily: "ProximaBold" }}>
          We’re here to help ourselves
        </h1>
        <p style={{ fontFamily: "ProximaRegular" }}>
          All these years we have helped our community in different aspects.
          Conducted multiple events for the community upliftment.
        </p>
        <div className="fourthpartinside">
          {help.map((item, key) => (
            <div
              style={{
                textAlign: "center",
                cursor: "pointer",
                animation: "bounce 1s linear infinite",
              }}
            >
              <Button
                onClick={key === 1 ? imageClickHandler : null}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <img
                  src={item.image}
                  alt="group"
                  height="210vw"
                  width="210vw"
                />
              </Button>

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
          <img
            src={threecircles}
            alt="threecirlces"
            height="525vw"
            width="570vw"
          />
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
      {/* <div className="seventhpart">
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
          onClick={() => navigate("/awards")}
        >
          VIEW MORE PHOTOS
        </Button>
      </div> */}
      {/* 7-2th part -------------------------------------------------------------------------------------------- */}

      {/* <div className="seventhpart">
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
      </div> */}
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
        {/* <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#23A380",
            marginLeft: "5vw",
            width: "12%",
            borderRadius: "15px",
          }}
        >
          Know More
        </Button> */}
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
