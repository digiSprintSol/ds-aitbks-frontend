/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import LoadingOverlay from "react-loading-overlay";
import { useRootContext } from "../../../../Hooks/useRootContext";
import { postRequest } from "../../../../HTTP_POST/api";
// import { instance } from "../../../../https";
// import { registrationData } from "../../../../Lib/constants";

function Declaration() {
  const [loading, setLoading] = React.useState(false);
  const { data: finalData, setData } = useRootContext();
  const { REACT_APP_FAKE_API } = process.env;
  const navigate = useNavigate();
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6ImFkbWluQHh5ei5jb20iLCJ1c2VySWQiOiJBZG1pbiIsInR5cGUiOiJBZG1pbjEyMyIsImFjY2VzcyI6WyJVU0VSIl0sImlhdCI6MTcyMzYxMjc4NywiZXhwIjoxNzIzNjE2Mzg3fQ.0ZuCEnMtnx06xjM6w5G3HoSwA8v6kru3UXiYO10ZMx4";
  // eslint-disable-next-line no-unused-vars
  const fetchData = async (url, payload) => {
    // try {
    //   const response = await instance.post(url, {
    //     ...finalData,
    //     profilePic: "https://example.com/profilepic.jpg",
    //     // reference2: "Ms. Laura Brown",
    //     // brieflyTellAboutYourself:
    //     //   "I am a dedicated software engineer with over 10 years of experience in the tech industry. I am passionate about coding and problem-solving.",
    //     // occupation: "Software Engineer",
    //     // category: "Professional",
    //     // reference1: "Dr. Alan Smith",
    //     requestForMembershipApplicationFromDeclaration: true,
    //     // reasonToJoinAITBKS:
    //     //   "I am interested in joining AITBKS to connect with like-minded professionals and contribute to the community's growth.",
    //   });
    //   // eslint-disable-next-line no-console
    //   console.log(response.data);
    // } catch (err) {
    //   // eslint-disable-next-line no-console
    //   console.log(err);
    // } finally {
    //   // eslint-disable-next-line no-console
    //   console.log(false);
    // }

    try {
      // eslint-disable-next-line no-unused-vars
      const result = await postRequest(
        url,
        {
          ...finalData,
          // profilePic: "https://example.com/profilepic.jpg",
          decalartionForRegOne: true,
        },
        {
          Token: `Bearer ${token}`,
        }
      );
      if (!result) {
        setLoading(true);
      }
      setLoading(false);
      // eslint-disable-next-line no-alert
      alert("Registered Successfully");
      navigate("/");
      // console.log(result);
    } catch (err) {
      setLoading(false);
      // console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      applicantChoosenMembership: "",
    },
    // validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      setData((prevData) => ({
        ...prevData,
        values,
      }));
      // // eslint-disable-next-line no-alert
      // alert(JSON.stringify(finalData, null, 2));
      fetchData(`${REACT_APP_FAKE_API}/user/register`, finalData);
    },
  });

  return (
    <LoadingOverlay
      active={loading}
      spinner
      text="Sending Email..."
      styles={{
        overlay: (base) => ({
          ...base,
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 2000,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }),
        spinner: (base) => ({
          ...base,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -30%)",
          color: "green",
        }),
        content: (base) => ({
          ...base,
          color: "green",
        }),
      }}
    >
      <div style={{ filter: loading ? "blur(5px)" : "none" }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Membership Type:
              </Typography>
              <RadioGroup
                row
                name="membershipType"
                value={formik.values.applicantChoosenMembership}
                onChange={formik.handleChange}
                sx={{
                  marginLeft: "20px",
                }}
              >
                <FormControlLabel
                  value="trustee"
                  control={<Radio />}
                  label="Trustee"
                />
                <FormControlLabel
                  value="patron"
                  control={<Radio />}
                  label="Patron"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                />
                <FormControlLabel
                  value="lifeMembership"
                  control={<Radio />}
                  label="Life Membership"
                  sx={{
                    marginLeft: "20px",
                  }}
                />
              </RadioGroup>
            </Box>
            {formik.touched.membershipType && formik.errors.membershipType ? (
              <Typography variant="body2" color="error">
                {formik.errors.membershipType}
              </Typography>
            ) : null}
            <Typography
              variant="subtitle1"
              style={{ color: "red", fontWeight: "bold" }}
            >
              Declaration
            </Typography>
            <Typography variant="body1">
              I hereby declare that once the membership is granted, I will abide
              by the laws and the other regulation of All India Telega Balija
              Kapu Sangam
            </Typography>
            {formik.touched.applicantChoosenMembership &&
            formik.errors.applicantChoosenMembership ? (
              <Typography variant="body2" color="error">
                {formik.errors.applicantChoosenMembership}
              </Typography>
            ) : null}
            <Typography
              variant="subtitle1"
              style={{ color: "red", fontWeight: "bold" }}
            >
              Declaration
            </Typography>
            <Typography variant="body1">
              I hereby declare that once the membership is granted, I will abide
              by the laws and the other regulation of All India Telega Balija
              Kapu Sangam
            </Typography>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="The information provided above is true and correct to the best of my knowledge and belief"
            />
          </Grid>
          {/* <Button variant="contained" type="submit">
        Register
      </Button> */}
          <Grid
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: "#1B7DA6" }}
            >
              Register
            </Button>
          </Grid>
        </form>
      </div>
    </LoadingOverlay>
  );
}

export default Declaration;
