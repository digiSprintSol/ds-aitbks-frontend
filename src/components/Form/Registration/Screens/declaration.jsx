/* eslint-disable react/prop-types */
import React from "react";
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
import { useRootContext } from "../../../../Hooks/useRootContext";
import useCustomFetch from "../../../../Hooks/useCustomFetch";

function Declaration() {
  const { setData } = useRootContext();

  const formik = useFormik({
    initialValues: {
      membershipType: "",
    },
    // validationSchema,
    onSubmit: (values) => {
      setData((prevData) => ({
        ...prevData,
        membershipType: values.membershipType,
      }));
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(null, 2));
    },
  });

  const data1 = {
    userId: "user0013",
    profilePic: "https://example.com/profilepic.jpg",
    fullName: "John Doe",
    dateOfBirth: "1985-05-15T06:58:07.967Z",
    gender: "Male",
    category: "Professional",
    address: [
      {
        addressId: 1,
        addressLine1: "123 Elm Street",
        addressLine2: "Apt 4B",
        country: "USA",
        state: "CA",
        city: "Los Angeles",
        postalCode: "90001",
        creationDate: "2024-08-06T06:58:07.967Z",
        lastModifiedDate: "2024-08-06T06:58:07.967Z",
        defaultAddress: true,
        addressType: "Home",
      },
    ],
    emailAddress: "rmonshu00@gmail.com",
    phoneNumber: "9898989008",
    education: "Bachelor's Degree in Computer Science",
    profession: "Software Engineer",
    familyDetails: {
      fatherName: "Richard Doe",
      motherName: "Emily Doe",
      spouseName: "Jane Doe",
      spouseOccupation: "Graphic Designer",
      childern: [
        {
          name: "Alice Doe",
          education: "High School",
          profession: "Student",
          isMarried: "No",
          childAge: "16",
        },
      ],
      married: true,
    },
    aadharCard: "1234-5678-9101",
    voterIdCard: "VOTER-123456",
    occupation: "Software Engineer",
    brieflyTellAboutYourself:
      "I am a dedicated software engineer with over 10 years of experience in the tech industry. I am passionate about coding and problem-solving.",
    reasonToJoinAITBKS:
      "I am interested in joining AITBKS to connect with like-minded professionals and contribute to the community's growth.",
    reference1: "Dr. Alan Smith",
    reference2: "Ms. Laura Brown",
    categoryOfMembership: "Gold",
    requestForMembershipApplicationFromDeclaration: true,
    password: "securepassword123",
    confrimPassowrd: "securepassword123",
    createdDate: "2024-08-06T06:58:07.967Z",
    lastModifiedDate: "2024-08-06T06:58:07.967Z",
    nativePlace: "San Francisco, CA",
    status: "Pending",
    paymentInfo: {
      trasactionId: "TXN123456789",
      amountPaid: "100.00",
      transactionDate: "2024-08-06",
      paymentDetailDocument: "https://example.com/paymentdetails.pdf",
    },
    applicantChoosenMembership: "Gold",
    committeeChoosenMembershipForApplicant: "",
    presidentChoosenMembershipForApplicant: "",
    presidentRemarksForApplicant: "",
    committeeRemarksForApplicant: "",
    applicationForMembershipDeclaration: true,
    memberOfOtherCommunity: true,
  };

  const { data, loading, error } = useCustomFetch(
    `http://localhost:1369/user/register`,
    "post",
    data1
  );

  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }
  if (data) {
    // eslint-disable-next-line no-console
    console.log(data, "data");
  }

  return (
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
            value={formik.values.membershipType}
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
                marginLeft: "20px",
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
          I hereby declare that once the membership is granted, I will abide by
          the laws and the other regulation of All India Telega Balija Kapu
          Sangam
        </Typography>
        <FormControlLabel
          required
          control={<Checkbox />}
          label="The information provided above is true and correct to the best of my knowledge and belief"
        />
      </Grid>
      <Button variant="contained" type="submit">
        Register
      </Button>
    </form>
  );
}

export default Declaration;
