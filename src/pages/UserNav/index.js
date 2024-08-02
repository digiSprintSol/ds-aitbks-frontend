// import React, { useState } from "react";
// import { useFormik } from "formik";
// import {
//   Box,
//   Stepper,
//   Step,
//   StepLabel,
//   Button,
//   Typography,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import validationSchema from "../../../validations/validationSchema";
// import PersonalDetails from "./Screens/personalDetails";
// import FamilyDetails from "./Screens/familyDetails";
// import Identity from "./Screens/identity";
// import Declaration from "./Screens/declaration";

// function RegistrationOne() {
//   const [activeStep, setActiveStep] = useState(0);
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       middleName: "",
//       lastName: "",
//       dob: "",
//       mobileNumber: "",
//       email: "",
//       address: "",
//       pincode: "",
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       setActiveStep((prevActiveStep) => prevActiveStep + 1);
//       // eslint-disable-next-line no-alert
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   const steps = ["Personal Details", "Family Details", "Identity", "Success"];
//   const navigate = useNavigate();

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleRegister = () => {
//     // console.log("Registration complete");
//     navigate("/");
//   };

//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return <PersonalDetails formik={formik} />;
//       case 1:
//         return <FamilyDetails formik={formik} />;
//       case 2:
//         return <Identity formik={formik} />;
//       case 3:
//         return <Declaration formik={formik} />;
//       default:
//         return <Typography>Unknown step</Typography>;
//     }
//   };

//   return (
//     <div>
//       <Stepper
//         style={{ margin: "50px auto", width: "600px" }}
//         activeStep={activeStep}
//         alternativeLabel
//       >
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <Typography
//         variant="h4"
//         style={{ marginTop: "30px", textAlign: "center", fontWeight: "bold" }}
//       >
//         Request for Membership Application
//       </Typography>
//       <div style={{ margin: "5px 20px 100px 20px" }}>
//         <Box
//           style={{
//             padding: "50px 80px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             backgroundColor: "#D4E9DA",
//           }}
//         >
//           <Typography
//             variant="h5"
//             style={{
//               color: "#1B7DA6",
//               textAlign: "center",
//               fontWeight: "bold",
//             }}
//           >
//             Please Add your Personal Details
//           </Typography>
//           <form onSubmit={formik.handleSubmit}>
//             {renderStepContent(activeStep)}
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 justifyContent: activeStep === 3 ? "center" : "space-between",
//                 margin: "40px 0px 20px 0px",
//                 width: "100%",
//               }}
//             >
//               {activeStep !== 3 ? (
//                 <>
//                   <Button
//                     style={{ backgroundColor: "#1B7DA6", color: "white" }}
//                     onClick={handleBack}
//                     disabled={activeStep === 0}
//                   >
//                     Back
//                   </Button>
//                   <Button variant="contained" onClick={handleNext}>
//                     Next
//                   </Button>
//                 </>
//               ) : (
//                 <Button
//                   variant="contained"
//                   style={{ borderRadius: "30px" }}
//                   onClick={handleRegister}
//                 >
//                   Register
//                 </Button>
//               )}
//             </div>
//           </form>
//         </Box>
//       </div>
//     </div>
//   );
// }
// export default RegistrationOne;
