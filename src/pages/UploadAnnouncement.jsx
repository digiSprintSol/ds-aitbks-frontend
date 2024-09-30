import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, TextField, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import upload2 from "./images/upload2.png";
import Button from "../components/Button";
import "../App.css";
import { postRequest } from "../HTTP_POST/api";

const AnnouncementSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

function UploadAnnouncement() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = `${location.state.token}`;
  const { REACT_APP_FAKE_API } = process.env;

  const handleViewClick = () => {
    navigate("/view-announcement", { state: { token } });
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await postRequest(
        `${REACT_APP_FAKE_API}/postingAnnouncements`,
        values,
        {
          Token: `Bearer ${token}`,
        }
      );
      // console.log(result);
      // eslint-disable-next-line no-alert
      alert("Anouncement Uploaded...");
      resetForm();
    } catch (err) {
      // console.log(err);
    } finally {
      setSubmitting(false);
    }
    // console.log(values);
  };

  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      validationSchema={AnnouncementSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <Grid
            container
            spacing={1}
            className="uploadannouncementhead"
            sx={{ width: "auto" }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                style={{
                  fontFamily: "ProximaBold",
                  margin: "-55px 0px 20px 0px",
                }}
              >
                Make an Announcement
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={handleViewClick}
                style={{
                  marginLeft: "43vw",
                  position: "absolute",
                  marginBottom: "4vw",
                }}
              >
                View all
              </Button>
            </Grid>
            <Grid item xs={12}>
              <h1 style={{ fontFamily: "ProximaSemiBold" }}>
                Announcement Details
              </h1>
            </Grid>
            <Grid item xs={6}>
              <Field
                as={TextField}
                type="text"
                name="title"
                placeholder="Title"
                className="uploadeventinput1"
                // onChange={Formik.handleChange}
                sx={{ backgroundColor: "white" }}
                error={touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                type="text"
                name="description"
                placeholder="Description"
                className="uploadeventinput2"
                // onChange={Formik.handleChange}
                sx={{ backgroundColor: "white" }}
                error={touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                className="uploadannouncementbuttonclass"
                disabled={isSubmitting}
              >
                <div>
                  <span>Post </span>
                  <img
                    src={upload2}
                    alt="smallupload"
                    height="20vw"
                    width="20vw"
                  />
                </div>
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default UploadAnnouncement;
