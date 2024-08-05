import React from "react";
import Button from "@mui/material/Button";
import "../App.css";
import Marquee from "react-fast-marquee";
import sixty from "./images/sixty.png";
import logo from "./images/logo.png";
import cm1 from "./images/cm1.png";
import cm2 from "./images/cm2.png";
import cm3 from "./images/cm3.png";
import cm4 from "./images/cm4.png";
import cm5 from "./images/cm5.png";
import cm6 from "./images/cm6.png";
import cm7 from "./images/cm7.png";
import ccm1 from "./images/ccm1.png";
import ccm2 from "./images/ccm2.png";
import ccm3 from "./images/ccm3.png";
import ccm4 from "./images/ccm4.png";
import ccm5 from "./images/ccm5.png";
import ccm6 from "./images/ccm6.png";
import ccm7 from "./images/ccm7.png";
import ccm8 from "./images/ccm8.png";
import group1 from "./images/group1.png";
import group2 from "./images/group2.png";
import group3 from "./images/group3.png";
import group4 from "./images/group4.png";
import group5 from "./images/group5.png";
import group6 from "./images/group6.png";
import group7 from "./images/group7.png";
import group8 from "./images/group8.png";

import userIcon from "./images/userIcon.png";
import quoteIcon from "./images/quoteIcon.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import threecircles from "./images/threecircles.png";
import rectangle1 from "./images/Rectangle1.png";
import rectangle2 from "./images/Rectangle2.png";
import rectangle3 from "./images/Rectangle3.png";
import rectangle4 from "./images/Rectangle4.png";
import rectangle5 from "./images/Rectangle5.png";
import rectangle6 from "./images/Rectangle6.png";

// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// import Header from "../components/Header";

function Home() {
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));
  const cmdata = [
    {
      photo: cm1,
      heading: "Sri.Sri Hari Kotela",
      para: "President",
    },
    {
      photo: cm2,
      heading: "Sri. Venkateshwara Rao Sunkara",
      para: "Vice-President-1",
    },
    {
      photo: cm3,
      heading: "Sri. Janardhan Jawahar Bommadevara",
      para: "Vice-President-2",
    },
    {
      photo: cm4,
      heading: "Sri. Vinayaka Swamy Patsa",
      para: "General Secretary",
    },
  ];

  const cmdata2 = [
    {
      photo: cm5,
      heading: "Sri.Mareswara Rao Guruju",
      para: "Joint Secretary-1",
    },
    {
      photo: cm6,
      heading: "Sri. Shanker Babu Katragadda",
      para: "Joint Secretary-2",
    },
    {
      photo: cm7,
      heading: "CA Sri S. Ramana Rao",
      para: "Treasurer",
    },
  ];

  const ccmdata = [
    {
      photo: ccm1,
      heading: "Sri Venkata Ratnam Anugolu  ",
    },
    {
      photo: ccm2,
      heading: "Sri Narasimha Rao Bandaru",
    },
    {
      photo: ccm3,
      heading: "Sri Parameswara Rao Parasa",
    },
    {
      photo: ccm4,
      heading: "Sri Narendra Babu N",
    },
    {
      photo: ccm5,
      heading: "Sri Ravinder Chaluvadi",
    },
    {
      photo: ccm6,
      heading: "Sri Venkata Krishna Rao Thota",
    },
    {
      photo: ccm7,
      heading: "Sri Trivikram Vidyasagar Jampa",
    },
    {
      photo: ccm8,
      heading: "Sri. Harikrishna Pothula",
    },
  ];

  const gallery = [
    rectangle1,
    rectangle2,
    rectangle3,
    rectangle4,
    rectangle5,
    rectangle6,
  ];

  const marqueedata = [
    {
      name: "Gopala krishna m",
      tag: "IAS",
      info: "AITBK is Doing Extremely very well. working very well for the community Empowerment",
    },
    {
      name: "Narendra Babu N",
      tag: "IAS",
      info: "AITBK is Doing Extremely very well. working very well for the community Empowerment",
    },
    {
      name: "Ravinder Chaluvadi",
      tag: "IAS",
      info: "AITBK is Doing Extremely very well. working very well for the community Empowerment",
    },
    {
      name: "Harikrishna Pothula",
      tag: "IAS",
      info: "AITBK is Doing Extremely very well. working very well for the community Empowerment",
    },
    {
      name: "S.Ramana Rao",
      tag: "IAS",
      info: "AITBK is Doing Extremely very well. working very well for the community Empowerment",
    },
  ];

  return (
    <div className="homepage">
      {/* <Header /> */}
      <Marquee className="marquee">
        Welcome to All India Telaga Kapu Balija Sangam.
      </Marquee>
      {/* <div>
        <Box sx={{ flexGrow: 10}}>
          <Grid container spacing={5}>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
      </div>    */}
      {/* <div>
        <div className='grid-container'>
          <div className='item1'><b>Welcome</b> <hr style={{color:'#41965B'}}/></div>
          <div className='item2'>
            <img src={sixty} height='120%' width='70%' alt="sixty" />
            <p>Years in Community Service</p>
          </div>
          <div className='item3'><img src={logo} height='120%' width='120%' alt='logo'/></Stack>
          <div className='item4'>{ null}</div>
          <div className='item5'><h1>ALL INDIA TELAGA BALIJA KAPU SANGAM</h1></div>
          <div className='item6'>
            <p>The Andhra Pradesh Telaga, Balija Kapu Sangham (for short “the APTBKS”) was registered under the Societies Registration Act in 1959 to meet the needs and aspirations of members of the above communities in twin cities of Hyderabad & Secunderabad, Andhra Pradesh State, and elsewhere in the country and abroad. The aims and objectives of the Sangham are to promote, secure, and advance the Economic, Social, cultural, and educational activities of the community and to develop infrastructure facilities to achieve the above objectives. It also acts as a forum for providing a convenient meeting place to instill a greater sense of fellowship and networking among its members. The APTBKS is committed to fostering unity and cooperation among its members, encouraging participation in community development programs, and providing support for entrepreneurial initiatives. The Sangham seeks to empower its members through various capacity-building programs and training sessions, aimed at enhancing their skills and knowledge in diverse fields</p>
          </div>
        </div>
      </div> */}
      <div className="firstpart">
        <div className="welcomeclass">
          <h1>Welcome</h1>
          <img src={sixty} alt="sixty" height="20%" width="20%" />
          <h5>Years in Community Service</h5>
          <img src={logo} alt="logo" height="60%" width="60%" />
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
        <hr />
      </div>

      {/* 2nd part ------------------------------------------------------------------------------ */}
      <div className="secondpart">
        <h1
          style={{
            color: "#144047",
            fontSize: "4vw",
            transform: "translate(0,-2vw)",
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
                }}
              >
                {item.heading}
              </h4>
              <p>{item.para}</p>
            </div>
          ))}
        </div>
        <br />
        {/* ---------------------------------------------------------------------------- */}
        <div className="grid-container2">
          {cmdata2.map((item) => (
            <div className="item2">
              <img src={item.photo} alt="cm" height="50%" width="50%" />
              <hr />
              <h4
                style={{
                  border: "2px solid transparent",
                  width: "12vw",
                  marginLeft: "5vw",
                }}
              >
                {item.heading}
              </h4>
              <p>{item.para}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />

      {/* 3rd part ------------------------------------------------------------- */}
      <div>
        <h1 style={{ color: "#144047", fontSize: "4vw", marginLeft: "2vw" }}>
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
        <h1>Change Everything</h1>
        <h1>We’re here to help us</h1>
        <p>
          All these years we were helped our community in different aspects.
          Conducted multiple events for the community upliftment.
        </p>
        <div className="fourthpartinside">
          <div>
            <img src={group1} alt="group" />
            <h1>Cultural Events</h1>
            <p>
              When nothing Prevents our to we like best, every pleasure to be.
            </p>
          </div>
          <div>
            <img src={group2} alt="group" />
            <h1>Scholarships</h1>
            <p>
              When nothing Prevents our to we like best, every pleasure to be.
            </p>
          </div>
          <div>
            <img src={group3} alt="group" />
            <h1>Vana Bhojanalu</h1>
            <p>
              When nothing Prevents our to we like best, every pleasure to be.
            </p>
          </div>
          <div>
            <img src={group4} alt="group" />
            <h1>Parinaya Vedika</h1>
            <p>
              When nothing Prevents our to we like best, every pleasure to be.
            </p>
          </div>
        </div>
      </div>

      {/* 5th part ---------------------------------------------------------------------------------- */}
      <div className="fifthpart">
        <img
          src={image2}
          alt="backgroundimage"
          className="feedbackimagebackground"
        />
        <h1>Yours Feedbacks</h1>
        <div className="fifthpartinside">
          <h1>What People are Talking About us</h1>
          <Marquee className="marqueefeedback">
            {marqueedata.map((item) => (
              <div className="fifthpartinsidetwo">
                <img src={userIcon} alt="user_icon" height="50%" width="16%" />
                <div>
                  <h1>{item.name}</h1>
                  <p>{item.tag}</p>
                  <p>{item.info}</p>
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
            position: "relative",
            zIndex: "2",
            marginLeft: "70%",
          }}
        >
          VIEW ALL
        </Button>
      </div>

      {/* 6th part ---------------------------------------------------------------------------------------- */}
      <div className="sixthpart">
        <h1>We’re here to support our people</h1>
        <h1>
          Helping for the people and support Kapu community and under previlaged
        </h1>
        <div className="sixthpartinside">
          <img src={image3} alt="image3" height="25%" width="35%" />
          <img src={threecircles} alt="threecirlces" height="90%" width="45%" />
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
            marginBottom: "7%",
          }}
        >
          START DONATING THEM
        </Button>
      </div>

      {/* 7th part -------------------------------------------------------------------------------------------- */}
      <div className="seventhpart">
        <img src={image5} alt="tracedimage" />
        <h1>Gallery</h1>
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

      {/* 8th part ------------------------------------------------------------------------------------------------- */}
      <div className="eighthpart">
        <img src={image6} alt="tracedimage" height="40%" width="45%" />
        <h1>Let’s support us to help us</h1>
        <h1>
          Join your hands with us for a better life and future for our
          community.
        </h1>
        <div className="eighthpartinside">
          <div>
            <img src={group5} alt="group" />
            <h1>4850+</h1>
            <p>Total Events</p>
          </div>
          <div>
            <img src={group6} alt="group" />
            <h1>3686+</h1>
            <p>Raised Funds</p>
          </div>
          <div>
            <img src={group7} alt="group" />
            <h1>480+</h1>
            <p>Scholarships</p>
          </div>
          <div>
            <img src={group8} alt="group" />
            <h1>2068+</h1>
            <p>Happy Members</p>
          </div>
        </div>
        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#23A380",
            marginLeft: "5vw",
            width: "15%",
            borderRadius: "15px",
            marginBottom: "5%",
          }}
        >
          Know More
        </Button>
      </div>
    </div>
  );
}

export default Home;
