import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../App.css";
import Marquee from "react-fast-marquee";
import MarketPlace from "../components/MarketPlace/search";
// import fap from "./images/fap.png";

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
import sixty from "./images/sixty.png";
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
import useCustomFetch from "../Hooks/useCustomFetch";

// import { styled } from '@mui/material/styles';

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

  // const [announcements, setAnnouncements] = useState([]);

  // const { data, loading, error } = useCustomFetch(
  //   "http://localhost:1369/getAllAnnouncements",
  //   "get"
  // );

  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getAllAnnouncements`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  //  const getAnnouncements = () => {
  //    try {
  //      const data = useCustomFetch("http://localhost:1369/getAnnouncements", "get");
  //      setAnnouncements(data);
  //      console.log(announcements);
  //    } catch (error) {
  //      console.error("Error fetching announcements:", error);
  //    }
  //  };

  //   useEffect(() => {
  //     console.log(data[0].announcementTitle, data[0].announcementDescription);
  //  }, []);

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

  const help = [
    {
      image: group1,
      heading: "Cultural Events",
    },
    {
      image: group2,
      heading: "Scholarships",
    },
    {
      image: group3,
      heading: "Awards",
    },
    {
      image: group4,
      heading: "Parinaya Vedika",
    },
  ];

  const count = [
    {
      image: group5,
      heading: "4850+",
      para: "Total Events",
    },
    {
      image: group6,
      heading: "3686+",
      para: "Raised Funds",
    },
    {
      image: group7,
      heading: "480+",
      para: "Scholarships",
    },
    {
      image: group8,
      heading: "2068+",
      para: "Happy Members",
    },
  ];

  if (error) return <h1>Error..</h1>;
  if (loading) return <h1>loading...</h1>;

  return (
    <div className="homepage">
      <Marquee className="marquee">
        {/* अखिल भारतीय तेलगा कापू बलिजा संगम में आपका स्वागत है। */}
        {/* {data[0].announcementTitle} &nbsp;|&nbsp;
        {data[0].announcementDescription} */}
        {data.map((d) => (
          <span style={{ paddingRight: "40px" }} key={d.announcementTitle}>
            {d.announcementTitle} | {d.announcementDescription}
          </span>
        ))}
      </Marquee>
      <Box sx={{ backgroundColor: "#e0e0e0", width: "100%", height: "40vw" }}>
        {null}
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
            <div style={{ textAlign: "center" }}>
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
        >
          VIEW MORE PHOTOS
        </Button>
      </div>
      {/* --------------------------------------------------------------------------------------- */}
      <MarketPlace />
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
    </div>
  );
}

export default Home;
