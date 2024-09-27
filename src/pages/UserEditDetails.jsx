/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
// import { ThreeDots } from "react-loader-spinner";
import LoadingOverlay from "react-loading-overlay";
import useCustomFetch from "../Hooks/useCustomFetch";

export default function UserEditDetails() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const { REACT_APP_FAKE_API } = process.env;
  const location = useLocation();
  const info = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/user/getSpecificUserDetails`,
    method: "GET",
    headers: {
      Token: `Bearer ${location.state.token}`,
    },
  });

  //   console.log(info, "nnvnangeq");
  // eslint-disable-next-line no-unused-vars
  const [selectedImage, setSelectedImage] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [imageFile, setImageFile] = useState(null);
  //   const post = async (info) => {
  //     try {
  //       // eslint-disable-next-line no-unused-vars
  //       const result = await postRequest(
  //         `${REACT_APP_FAKE_API}/user/approval/${row.userId}`,
  //         info,
  //         {
  //           Token: `Bearer ${token}`,
  //         }
  //       );
  //       if (!result) {
  //         setLoading(true);
  //       }
  //       setLoading(false);
  //       // console.log(result);
  //       alert("Status Updated");
  //       setOpen(false);
  //     } catch (err) {
  //       setLoading(false);
  //       // console.log(err);
  //     }
  //   };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImageFile(file);
    }
  };
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    casteStatus: "",
    dateOfBirth: "",
    phoneNumber: "",
    emailAddress: "",
    gender: "",
    profession: "",
    education: "",
    addressType: "",
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
    district: "",
    state: "",
    country: "",
    familyDetails: {
      fatherName: "",
      motherName: "",
      spouseName: "",
      spouseOccupation: "",
      spouseAge: "",
      spouseGender: "",
      spouseEducation: "",
      noOfChildren: "",
      children: info,
    },
  });

  useEffect(() => {
    if (info.data) {
      console.log("siva1");
      setData({
        firstName: info.data.firstName,
        lastName: info.data.lastName,
        casteStatus: info.data.casteStatus,
        dateOfBirth: info.data.dateOfBirth,
        phoneNumber: info.data.phoneNumber,
        emailAddress: info.data.emailAddress,
        gender: info.data.gender,
        profession: info.data.profession,
        education: info.data.education,
        addressType: info.data.addressType,
        addressLine1: info.data.addressLine1,
        addressLine2: info.data.addressLine2,
        postalCode: info.data.postalCode,
        district: info.data.district,
        state: info.data.state,
        country: info.data.country,
        familyDetails: {
          fatherName: info.data.fatherName,
          motherName: info.data.motherName,
          spouseName: info.data.spouseName,
          spouseOccupation: info.data.spouseProfession,
          spouseAge: info.data.spouseAge,
          spouseGender: info.data.spouseGender,
          spouseEducation: info.data.spouseEducation,
          noOfChildren: info.data.noOfChildren,
          // children:
        },
      });
    }
  }, [info.data]);

  // const [childData, setChildData] = useState([]);

  // useEffect(() => {
  //   const exp2 = [];
  //   let i = 0;
  //   while (i < formik.values.noOfChildren) {
  //     exp2.push({
  //       name: "",
  //       childAge: "",
  //       gender: "",
  //     });
  //     i += 1;
  //   }
  //   setInfo(exp2);

  //   // console.log(info,"aaaaaaaaaaaa");
  // }, [data.noOfChildren]);

  //  const changeHandlerForChildrenData = (e, index) => {
  //   const exp = [...childData];
  //   exp[index][e.target.name] = e.target.value;
  //   setChildData(exp);
  // };

  const handleChange = (e) => {
    console.log(data, "siva");
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleButtonClick = () => {
    setLoading(true);
    // if (handleSubmit()) {
    //   setData({
    //     remarks: comments,
    //     statusOfApproval: action,
    //     membership: radioValue,
    //   });
    // Perform the action-specific logic here
    // console.log(action);
    // if (Object.keys(data).length === 3) {
    //   post();
    // }
  };

  if (info.error) return <h1>Error..</h1>;
  if (info.loading) return <h1>Loading...</h1>;
  return (
    <Box>
      <Grid container spacing={2}>
        <img
          src={info ? info.profilePic : ""}
          alt="Selected"
          style={{
            display: "block",
            width: "150px",
            height: "150px",
            objectFit: "cover",
            margin: "10px auto",
            borderRadius: "50%",
          }}
        />

        <Grid item xs={12}>
          {info.profilePic && (
            <img
              src={info ? info.profilePic : ""}
              alt="Selected"
              style={{
                display: "block",
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "10px auto",
                borderRadius: "50%",
              }}
            />
          )}
          <label
            htmlFor="fileInput"
            style={{
              fontFamily: "ProximaBold",
              cursor: "pointer",
              display: "block",
              width: "100px",
              background: "#1B7DA6",
              color: "white",
              margin: "10px auto",
              padding: "10px 20px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            Upload Photo
          </label>
          <input
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>First Name</Typography>
          <TextField
            fullWidth
            type="text"
            value={data.firstName}
            sx={{ backgroundColor: "#ffffff" }}
            size="small"
            onChange={handleChange}
            name="firstName"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Surname</Typography>
          <TextField
            fullWidth
            type="text"
            value={data.lastName}
            sx={{ backgroundColor: "#ffffff" }}
            size="small"
            onChange={handleChange}
            name="lastName"
          />
        </Grid>
        {/* <Grid item xs={4}>
                <TextField
                  label="Middle Name"
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Last Name"
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Grid> */}
        <Grid item xs={2}>
          <Typography id="modal-modal-description">Date of Birth</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            type="date"
            value={data.dateOfBirth}
            name="dateOfBirth"
            onChange={handleChange}
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <Typography id="modal-modal-description">Mobile No.</Typography>
          <TextField
            fullWidth
            type="text"
            sx={{ backgroundColor: "#ffffff" }}
            value={data.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-description">Email ID</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            type="text"
            onChange={handleChange}
            name="emailAddress"
            value={data.emailAddress}
            size="small"
          />
        </Grid>
        <Grid item xs={2}>
          <Typography id="modal-modal-description">Gender</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={data.gender}
            onChange={handleChange}
            name="gender"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <Typography id="modal-modal-description">Profession</Typography>
          <TextField
            fullWidth
            type="text"
            sx={{ backgroundColor: "#ffffff" }}
            onChange={handleChange}
            name="profession"
            value={data.profession}
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-description">Education</Typography>
          <TextField
            fullWidth
            type="text"
            sx={{ backgroundColor: "#ffffff" }}
            onChange={handleChange}
            name="education"
            value={data.education}
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-description">Father Name</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            type="text"
            onChange={handleChange}
            name="familyDetails"
            value={data.familyDetails.fatherName}
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-description">Mother Name</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            type="text"
            onChange={handleChange}
            name="familyDetails"
            value={data.familyDetails}
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography id="modal-modal-description">Present Address</Typography>
          <TextField
            value={
              info
                ? info.data.address[0].addressLine1.concat(
                    ", ",
                    info.data.address[0].addressLine2
                  )
                : ""
            }
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            size="small"
          />
        </Grid>
        <Grid item xs={2}>
          <Typography id="modal-modal-description">Pin code</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={info ? info.data.address[0].postalCode : ""}
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <Typography id="modal-modal-description">State</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={info ? info.data.address[0].state : ""}
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-description">Country</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={info ? info.data.address[0].country : ""}
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-description">Spouse Name</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={info ? info.data.familyDetails.spouseName : ""}
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-description">No. of Children</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={info ? info.data.familyDetails.children.length : ""}
            size="small"
          />
        </Grid>
        {info &&
          info.data.familyDetails.children.map((item) => (
            <>
              <Grid item xs={7}>
                <Typography id="modal-modal-description">Name</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={item.name}
                  size="small"
                />
              </Grid>
              <Grid item xs={2}>
                <Typography id="modal-modal-description">Age</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={item.childAge}
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <Typography id="modal-modal-description">Gender</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={item.gender}
                  size="small"
                />
              </Grid>
            </>
          ))}
        {/* <Grid item xs={7}>
                <Typography id="modal-modal-description">Name</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={2}>
                <Typography id="modal-modal-description">Age</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={3}>
                <Typography id="modal-modal-description">Gender</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid> */}
        <Grid item xs={6}>
          <Typography id="modal-modal-description">Aadhar Card</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={info ? info.data.aadharCard : ""}
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-description">Voter ID</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={info ? info.data.voterIdCard : ""}
            size="small"
          />
        </Grid>
        <Grid item xs={7}>
          <Typography id="modal-modal-description">Community</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={info ? info.data.category : ""}
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-description">
            Reference 01 (existing members)
          </Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={info ? info.data.reference1 : ""}
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-description">
            Reference 02 (referred by)
          </Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={info ? info.data.reference2 : ""}
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography id="modal-modal-description">
            Tell us about yourself
          </Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={info ? info.data.brieflyTellAboutYourself : ""}
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography id="modal-modal-description">
            Why do you want join All India Telega Balija Kapu Sangam?
          </Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={info ? info.data.reasonToJoinAITBKS : ""}
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography id="modal-modal-description">
            Applicant Choosen Membership
          </Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={info ? info.data.applicantChoosenMembership : ""}
            size="small"
            disabled
          />
        </Grid>
        <Grid sx={{ margin: "2vw auto" }}>
          <Button
            variant="contained"
            autoFocus
            onClick={() => handleButtonClick("rejected")}
            sx={{
              width: "130px",
              borderRadius: "50px",
              backgroundColor: "green",
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            marginRight: "100px",
          }}
        >
          <LoadingOverlay
            active={loading}
            spinner
            text="Sending Email..."
            spinnerStyle={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {null}
          </LoadingOverlay>
        </div>
      )}
    </Box>
  );
}
