import React, { useState } from "react";
// import { useFormik } from "formik";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import PersonalDetails from "./Screens/personalDetails";
import FamilyDetails from "./Screens/familyDetails";
import Identity from "./Screens/identity";
import Declaration from "./Screens/declaration";

function RegistrationOne() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Personal Details", "Family Details", "Identity", "Success"];
  // const navigate = useNavigate();

  // const handleNext = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleRegister = () => {
  //   // console.log("Registration complete");
  //   navigate("/");
  // };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalDetails setActiveStep={setActiveStep} />;
      case 1:
        return <FamilyDetails setActiveStep={setActiveStep} />;
      case 2:
        return <Identity setActiveStep={setActiveStep} />;
      case 3:
        return <Declaration />;
      default:
        return <Typography>Unknown step</Typography>;
    }
  };

  const backButton = () => {
    if (activeStep === 0) {
      return "";
    }
    if (activeStep === 3) {
      return (
        <Button
          style={{
            backgroundColor: "#1B7DA6",
            color: "white",
            marginTop: "0px",
            transform: "translate(-38vw,-6.6vw)",
          }}
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Back
        </Button>
      );
    }

    return (
      <Button
        style={{
          backgroundColor: "#1B7DA6",
          color: "white",
          marginTop: "0px",
          transform: "translate(0vw,-6.6vw)",
        }}
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        Back
      </Button>
    );
  };

  return (
    <div>
      <Stepper
        style={{ margin: "50px auto", width: "600px" }}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography
        variant="h4"
        style={{
          marginTop: "30px",
          textAlign: "center",
          fontFamily: "Proximabold",
        }}
      >
        Request for Membership Application
      </Typography>
      <div style={{ margin: "5px 20px 100px 20px" }}>
        <Box
          style={{
            padding: "40px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#D4E9DA",
          }}
        >
          <Typography
            variant="h5"
            style={{
              fontFamily: "ProximaBold",
              color: "#1B7DA6",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Please Add your Personal Details
          </Typography>
          {/* <form onSubmit={declarationFormik.handleSubmit}> */}
          {renderStepContent(activeStep)}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: activeStep === 3 ? "center" : "space-between",
              margin: "40px 0px 20px 0px",
              width: "100%",
            }}
          >
            {backButton()}
          </div>
          {/* </form> */}
        </Box>
      </div>
    </div>
  );
}
export default RegistrationOne;
