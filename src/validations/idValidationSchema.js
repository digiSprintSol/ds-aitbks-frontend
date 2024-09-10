import * as Yup from "yup";

const idValidationSchema = Yup.object({
  aadharCard: Yup.string().matches(
    /^\d{12}$/,
    "Aadhar number must be 12 digits"
  ),
  voterIdCard: Yup.string().matches(
    /^[A-Z]{3}[0-9]{7}$/,
    "3 alphabets in captail and rest 7 will be numbers"
  ),
  occupation: Yup.string().required("Present occupation is required"),
  brieflyTellAboutYourself: Yup.string()
    .required("Introduction is required")
    .test(
      "max-words",
      "Introduction must be 50 words or less",
      (value) => value && value.split(" ").length <= 50
    ),
  reasonToJoinAITBKS: Yup.string()
    .required("Description is required")
    .test(
      "max-words",
      "Description must be 200 words or less",
      (value) => value && value.split(" ").length <= 200
    ),
  category: Yup.string("Enter your category").required("is required"),
  reference1: Yup.string().required("Reference one is required"),
  // reference2: Yup.string().required("Reference two is required"),
});

export default idValidationSchema;
