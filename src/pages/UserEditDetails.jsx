/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  gender as genders,
  // profession as professions,
  // education as educations,
  states,
  // country as countries,
  // addressType,
  district,
} from "../Lib/constants";
// import { ThreeDots } from "react-loader-spinner";
import useCustomFetch from "../Hooks/useCustomFetch";
import { postRequest } from "../HTTP_POST/api";
import { updateData } from "../HTTP_PUT/api";
import LoadingComponent from "../components/Loading/loadingComponent";

export default function UserEditDetails() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [childData, setChildData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [result, setResult] = useState(null);
  const { REACT_APP_FAKE_API } = process.env;
  const location = useLocation();
  const info = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/user/getSpecificUserDetails`,
    method: "GET",
    headers: {
      Token: `Bearer ${location.state.token}`,
    },
  });

  const districtStateMapping = {
    Adilabad: "Telangana",
    "Alluri Sitharama Raju": "Andhra Pradesh",
    Anakapalli: "Andhra Pradesh",
    Ananthapuram: "Andhra Pradesh",
    Annamayya: "Andhra Pradesh",
    Bapatla: "Andhra Pradesh",
    "Bhadadri Kothagudem": "Telangana",
    Chitoor: "Telangana",
    "Dr. B.R. Ambedkar Konaseema": "Andhra Pradesh",
    "East Godavari": "Andhra Pradesh",
    Eluru: "Andhra Pradesh",
    Guntur: "Andhra Pradesh",
    Hanumakonda: "Telangana",
    Hyderabad: "Telangana",
    Jagtial: "Telangana",
    Jangaon: "Telangana",
    "Jayashankar Bhoopalpally": "Telangana",
    "Jogulamba Gadwal": "Telangana",
    Kakinada: "Andhra Pradesh",
    Kamareddy: "Telangana",
    Karimnagar: "Telangana",
    Khammam: "Telangana",
    "Kona Seema": "Telangana",
  };
  //   console.log(info, "nnvnangeq");
  // eslint-disable-next-line no-unused-vars
  const [selectedImage, setSelectedImage] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [imageFile, setImageFile] = useState(null);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8";
  const imageApi = async () => {
    if (imageFile) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", imageFile);
      try {
        // eslint-disable-next-line no-unused-vars
        const res = await postRequest(
          `${REACT_APP_FAKE_API}/upload?folderName=user-passport-photo`,
          formData,
          {
            Token: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          }
        );

        setResult(res);
      } catch (err) {
        // eslint-disable-next-line no-console
        // console.log(err);
        // eslint-disable-next-line no-alert
        alert("Maximum upload size reached...");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (imageFile) {
      // eslint-disable-next-line no-restricted-globals, no-alert
      if (confirm("Do you want to upload...")) {
        imageApi();
      }
    }
  }, [imageFile]);

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
    fatherName: "",
    motherName: "",
    spouseName: "",
    spouseOccupation: "",
    // spouseAge: "",
    // spouseGender: "",
    spouseEducation: "",
    numberOfchildren: "",
    children: "",
    aadharCard: "",
    voterIdCard: "",
    category: "",
    reference1: "",
    reasonToJoinAITBKS: "",
    brieflyTellAboutYourself: "",
    applicantChoosenMembership: "",
  });

  // console.log(Object.keys(info.data.familyDetails).length,"safjensd");
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
        addressType: info.data.address[0].addressType,
        addressLine1: info.data.address[0].addressLine1,
        addressLine2: info.data.address[0].addressLine2,
        postalCode: info.data.address[0].postalCode,
        district: info.data.address[0].district,
        state: info.data.address[0].state,
        country: info.data.address[0].country,
        fatherName: info.data.familyDetails.fatherName,
        motherName: info.data.familyDetails.motherName,
        spouseName: info.data.familyDetails.spouseName,
        spouseOccupation: info.data.familyDetails.spouseOccupation,
        // spouseAge: info.data.familyDetails.spouseAge,
        // spouseGender: info.data.familyDetails.spouseGender,
        spouseEducation: info.data.familyDetails.spouseEducation,
        numberOfchildren: info.data.familyDetails.numberOfchildren,
        children: childData,
        aadharCard: info.data.aadharCard,
        voterIdCard: info.data.voterIdCard,
        category: info.data.category,
        reference1: info.data.reference1,
        reasonToJoinAITBKS: info.data.reasonToJoinAITBKS,
        brieflyTellAboutYourself: info.data.brieflyTellAboutYourself,
        applicantChoosenMembership: info.data.applicantChoosenMembership,
      });
    }
  }, [info.data]);

  // useEffect(() => {
  //   if (info.numberOfchildren) {

  //   }
  // },[info.data])

  // console.log(data,"sgqgqgq")

  useEffect(() => {
    const exp2 = [];
    let i = 0;
    if (info.data) {
      if (info.data.familyDetails.children.length > 0) {
        while (i < info.data.familyDetails.children.length) {
          exp2.push({
            name: info.data.familyDetails.children[i].name,
            childAge: info.data.familyDetails.children[i].childAge,
            gender: info.data.familyDetails.children[i].gender,
          });
          i += 1;
        }
      }
    }
    while (i < data.numberOfchildren) {
      exp2.push({
        name: "",
        childAge: "",
        gender: "",
      });
      i += 1;
    }
    setChildData(exp2);
    // console.log(info, "aaaaaaaaaaaa");
  }, [data.numberOfchildren]);

  const changeHandlerForChildrenData = (e, index) => {
    const exp = [...childData];
    exp[index][e.target.name] = e.target.value;
    setChildData(exp);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data, "siva");
  };

  const handlePut = async () => {
    try {
      setLoading(true);
      console.log("haskjhfj");
      const result2 = await updateData(
        `${REACT_APP_FAKE_API}/user/update`,
        {
          ...info.data,
          // eslint-disable-next-line no-nested-ternary
          profilePic: info.data.profilePic
            ? `${info.data.profilePic}`
            : result
            ? `${result.url}`
            : "",
          firstName: data.firstName,
          lastName: data.lastName,
          casteStatus: data.casteStatus,
          dateOfBirth: data.dateOfBirth,
          phoneNumber: data.phoneNumber,
          emailAddress: data.emailAddress,
          gender: data.gender,
          profession: data.profession,
          education: data.education,
          address: [
            {
              ...info.data.address[0],
              addressLine1: data.addressLine1,
              addressLine2: data.addressLine2,
              postalCode: data.postalCode,
              district: data.district,
              state: data.state,
              country: data.country,
              addressType: data.addressType,
            },
          ],
          familyDetails: {
            fatherName: data.fatherName,
            motherName: data.motherName,
            spouseName: data.spouseName,
            spouseOccupation: data.spouseOccupation,
            spouseAge: data.spouseAge,
            spouseGender: data.spouseGender,
            spouseEducation: data.spouseEducation,
            numberOfchildren: data.numberOfchildren,
            children: childData,
          },
          aadharCard: data.aadharCard,
          voterIdCard: data.voterIdCard,
          category: data.category,
          reference1: data.reference1,
          reasonToJoinAITBKS: data.reasonToJoinAITBKS,
          brieflyTellAboutYourself: data.brieflyTellAboutYourself,
          applicantChoosenMembership: data.applicantChoosenMembership,
        },
        {
          Token: `Bearer ${location.state.token}`,
        }
      );
      // eslint-disable-next-line no-console
      console.log("message:", result2, "3333");
      alert("Role updated..");
    } catch (error2) {
      // eslint-disable-next-line no-console
      console.error("Failed to update data", error2);
    } finally {
      setLoading(false);
      // eslint-disable-next-line no-alert
    }
  };

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    setData({ ...data, district: selectedDistrict });
    if (districtStateMapping[selectedDistrict]) {
      setData({ ...data, state: districtStateMapping[selectedDistrict] });
    }
  };

  if (info.error) return <h1>Error..</h1>;
  if (info.loading) return <LoadingComponent />;
  return (
    <>
      {loading && <LoadingComponent />}
      <Box sx={{ backgroundColor: "#D4E9DA" }}>
        <Grid container spacing={2} sx={{ width: "80vw", margin: "auto" }}>
          {/* <img
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
        /> */}

          <Grid item xs={12}>
            {info && info.data.profilePic ? (
              <img
                src={info ? info.data.profilePic : ""}
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
            ) : (
              <>
                {selectedImage && (
                  <img
                    src={selectedImage}
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
              </>
            )}
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
              type="number"
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
              name="fatherName"
              value={data.fatherName}
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
              name="motherName"
              value={data.motherName}
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography id="modal-modal-description">Address Line 1</Typography>
            <TextField
              value={info ? data.addressLine1 : ""}
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              size="small"
              onChange={handleChange}
              name="addressLine1"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography id="modal-modal-description">Address Line 2</Typography>
            <TextField
              value={info ? data.addressLine2 : ""}
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              size="small"
              onChange={handleChange}
              name="addressLine2"
            />
          </Grid>
          <Grid item xs={3}>
            <Typography id="modal-modal-description">Pin code</Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={info ? data.postalCode : ""}
              onChange={handleChange}
              name="postalCode"
              size="small"
            />
          </Grid>
          <Grid item xs={3}>
            <Typography>District</Typography>
            <FormControl
              fullWidth
              size="small"
              sx={{ backgroundColor: "white", borderRadius: "5px" }}
            >
              <Select
                id="district"
                name="district"
                value={data.district}
                onChange={handleDistrictChange}
              >
                {district.map((dis) => (
                  <MenuItem key={dis.label} value={dis.label}>
                    {dis.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Typography id="modal-modal-description">State</Typography>
            <FormControl
              fullWidth
              size="small"
              sx={{ backgroundColor: "white", borderRadius: "5px" }}
            >
              <Select
                id="state"
                name="state"
                onChange={handleChange}
                value={data.state}
              >
                {states.map((dis) => (
                  <MenuItem key={dis.label} value={dis.label}>
                    {dis.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Typography id="modal-modal-description">Country</Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={info ? data.country : ""}
              size="small"
              onChange={handleChange}
              name="country"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography id="modal-modal-description">Spouse Name</Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={info ? data.spouseName : ""}
              size="small"
              onChange={handleChange}
              name="spouseName"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography id="modal-modal-description">
              Spouse Occupation
            </Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={info ? data.spouseOccupation : ""}
              size="small"
              onChange={handleChange}
              name="spouseOccupation"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography id="modal-modal-description">
              No. of Children
            </Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff", width: "30vw" }}
              value={info ? data.numberOfchildren : ""}
              size="small"
              onChange={handleChange}
              name="numberOfchildren"
              type="number"
            />
          </Grid>
          {/* {info &&
          data.children &&
          data.children.map((item) => (
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
          ))} */}

          {childData.length > 0 &&
            childData.map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    size="small"
                    id="name"
                    name="name"
                    label="Name Of Child"
                    type="string"
                    value={info && childData ? _.name : ""}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    onChange={(e) => changeHandlerForChildrenData(e, index)}
                    sx={{ backgroundColor: "white", borderRadius: "5px" }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    size="small"
                    id="childAge"
                    name="childAge"
                    label="Age Of Child"
                    type="number"
                    value={info && childData ? _.childAge : ""}
                    inputProps={{ min: 0 }}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    onChange={(e) => changeHandlerForChildrenData(e, index)}
                    sx={{ backgroundColor: "white", borderRadius: "5px" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl
                    fullWidth
                    size="small"
                    sx={{ backgroundColor: "white", borderRadius: "5px" }}
                  >
                    <InputLabel id="gender-select-label">
                      Child Gender
                    </InputLabel>
                    <Select
                      labelId="gender-select-label"
                      id="gender-select"
                      onChange={(e) => changeHandlerForChildrenData(e, index)}
                      name="gender"
                      label="Child Gender"
                      value={info && childData ? _.gender : ""}
                    >
                      {genders.map((gen) => (
                        <MenuItem key={gen.label} value={gen.label}>
                          {gen.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
              value={info ? data.aadharCard : ""}
              size="small"
              onChange={handleChange}
              name="aadharCard"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography id="modal-modal-description">Voter ID</Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={info ? data.voterIdCard : ""}
              size="small"
              onChange={handleChange}
              name="voterIdCard"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography id="modal-modal-description">Community</Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={info ? data.category : ""}
              size="small"
              onChange={handleChange}
              name="category"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography id="modal-modal-description">Caste Status</Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={info ? data.casteStatus : ""}
              size="small"
              onChange={handleChange}
              name="casteStatus"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography id="modal-modal-description">
              Reference 01 (existing members)
            </Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={info ? data.reference1 : ""}
              size="small"
              onChange={handleChange}
              name="reference1"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography id="modal-modal-description">
              Tell us about yourself
            </Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={info ? data.brieflyTellAboutYourself : ""}
              size="small"
              onChange={handleChange}
              name="brieflyTellAboutYourself"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography id="modal-modal-description">
              Why do you want join All India Telega Balija Kapu Sangam?
            </Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={info ? data.reasonToJoinAITBKS : ""}
              size="small"
              onChange={handleChange}
              name="reasonToJoinAITBKS"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography id="modal-modal-description">
              Applicant Choosen Membership
            </Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={info ? data.applicantChoosenMembership : ""}
              size="small"
              disabled
            />
          </Grid>
          <Grid sx={{ margin: "2vw auto" }}>
            <Button
              variant="contained"
              autoFocus
              onClick={() => handlePut()}
              sx={{
                width: "130px",
                borderRadius: "50px",
                backgroundColor: "green",
                "&:hover": {
                  backgroundColor: "green",
                  opacity: "0.9",
                },
              }}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
