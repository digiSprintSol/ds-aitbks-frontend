import { Box, Divider, Typography } from "@mui/material";
import React from "react";

function AboutUs() {
  return (
    <div style={{ padding: "20px 40px" }}>
      <Typography
        variant="h5"
        sx={{ fontFamily: "ProximaBold", color: "#199071" }}
      >
        About Us
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontFamily: "ProximaBold", color: "#360100" }}
      >
        All India Telega Balija Kapu Sangam
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontFamily: "ProximaBold", color: "#144047", marginTop: "50px" }}
      >
        AITBK is the largest global community in the world
      </Typography>
      <Box sx={{ backgroundColor: "#D4E9DA", padding: "20px 20px" }}>
        <Typography
          variant="body1"
          sx={{ fontFamily: "ProximaRegular", fontSize: "1.7vw" }}
        >
          The Andhra Pradesh Telaga, Balija Kapu Sangham (for short “the
          APTBKS”) was registered under the Societies Registration Act in 1959
          to meet the needs and aspirations of members of the above communities
          in twin cities of Hyderabad & Secunderabad, Andhra Pradesh State and
          elsewhere in the country and abroad. The aims and objectives of the
          Sangham are to promote, secure and advance the economic, social,
          cultural and educational activities of the community and to develop
          infrastructure facilities to achieve the above objectives. It also
          acts as a forum for providing convenient meeting place to instill a
          greater sense of fellowship and net-working among its members. The
          Sangham has around 1500 Life members besides Annual members.
        </Typography>
      </Box>
      <Divider
        sx={{
          margin: "50px 0px 20px 0px",
          height: "2px",
          backgroundColor: "black",
          borderWidth: "0px",
        }}
      />

      <Typography
        variant="h5"
        sx={{ fontFamily: "ProximaBold", color: "#144047" }}
      >
        Activities
      </Typography>
      <Box
        sx={{
          backgroundColor: "#C2E5F8",
          padding: "20px",
          margin: "50px 0px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "85%",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "ProximaBold",
              color: "#1B7DA6",
              width: "70%",
              fontSize: "2vw",
            }}
          >
            Education
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "ProximaRegular",
              margin: "20px 0px",
              border: "2px solid transparent",
              width: "80%",
              fontSize: "2vw",
            }}
          >
            The Brahmarshi Sir Raghupathi Venkata Rathnam Naidu Junior College
            was set up in the year 1982 at its premises in Lower Tank Bund,
            Hyderabad which is a Government Aided college. It is open to
            students of all communities and has been rated the 2 best Junior
            College among all Government Aided Junior Colleges in the twin
            cities.
          </Typography>
        </Box>
        <Box
          component="img"
          src="/assets/images/education.png"
          alt="parinaya-vedika"
          sx={{
            maxWidth: "490px",
            height: "auto",
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translate(14vw, -54%)",
            objectFit: "cover",
            background: `linear-gradient(to right, #C2E5F8 50%, #ffffff 50%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "#D4E9DA",
          padding: "20px",
          marginLeft: "170px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "82%",
        }}
      >
        <Box
          component="img"
          src="/assets/images/scholarship_img.png"
          alt="scholarship_img"
          sx={{
            maxWidth: "300px",
            height: "auto",
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translate(-16vw, -52%)",
            objectFit: "cover",
            background: `linear-gradient(to left, #ffffff 50%, #C2E5F8 50%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        />
        <Box sx={{ flex: 1, marginLeft: "180px" }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "ProximaBold",
              color: "#1B7DA6",
              width: "70%",
              fontSize: "2vw",
            }}
          >
            Scholarship
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "ProximaRegular",
              margin: "50px 0px",
              border: "2px solid transparent",
              width: "80%",
              fontSize: "2vw",
            }}
          >
            Scholarships are given to meritorious but poor students to enable
            them to pursue higher education. It also provides coaching for
            job-related examinations.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#C2E5F8",
          padding: "20px",
          margin: "50px 0px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "85%",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "ProximaBold",
              color: "#1B7DA6",
              width: "70%",
              fontSize: "2vw",
            }}
          >
            Parinaya-Vedika
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "ProximaRegular",
              margin: "20px 0px",
              border: "2px solid transparent",
              width: "80%",
              fontSize: "2vw",
            }}
          >
            A marriage bureau called Parinaya Vedika is operated by the Sangham
            to help eligible and marriageable boys and girls find partners. A
            Parichaya-Vedika is also organized for the introduction of
            prospective brides and bridegrooms and their parents.
          </Typography>
        </Box>
        <Box
          component="img"
          src="/assets/images/parinaya_vedika.png"
          alt="parinaya-vedika"
          sx={{
            maxWidth: "290px",
            height: "auto",
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translate(14vw, -54%)",
            objectFit: "cover",
            background: `linear-gradient(to right, #C2E5F8 50%, #ffffff 50%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        />
      </Box>

      <Box
        sx={{
          backgroundColor: "#D4E9DA",
          padding: "15px",
          margin: "20px 0px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontFamily: "ProximaBold", color: "#1B7DA6", fontSize: "2vw" }}
        >
          Functions : The Sangham conducts several functions like :
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "ProximaRegular", fontSize: "2vw" }}
        >
          <ol>
            1. Vana-Bhojanalu in the month of Karthik which is largely attended
            & provides a venue for interaction, fellowship & cultural contacts.
          </ol>
          <ol>2. Festivals like Ugadi, Deepawali etc., are celebrated.</ol>
          <ol>
            3. Sports and Cultural activities are also held for students, youth
            and women.
          </ol>
          <ol>
            4.<strong> Felicitations:</strong> Members of the community who have
            received recognition by way of National or State awards or public
            appreciation are felicitated. Sangham also confers Titles of
            <Typography
              variant="body1"
              sx={{
                fontFamily: "ProximaRegular",
                fontSize: "2vw",
                marginTop: "50px",
              }}
            >
              Kula Sreshta
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: "ProximaRegular", fontSize: "2vw" }}
            >
              Kapu Rathna
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: "ProximaRegular", fontSize: "2vw" }}
            >
              Kapu Yuva Rathna
            </Typography>{" "}
            in recognition of merit service.
          </ol>
          <ol>
            5. <strong>Public Reception:</strong> A largely attended meeting was
            held on 315 July 2009 with the cooperation of all Kapu sanghams in
            the twin cities to felicitate all the elected MPs, MLAs, MLCs of the
            Kapu community in Hyderabad which was appreciated by all concerned.
          </ol>
        </Typography>
      </Box>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "ProximaBold",
          fontSize: "2.5vw",
          padding: "30px 90px",
          color: "#1B7DA6",
          textAlign: "center",
        }}
      >
        This Souvenir is released on the occasion of completion of 50 years
        Golden Jubilee Celebrations (1959-2009).
      </Typography>
    </div>
  );
}

export default AboutUs;
