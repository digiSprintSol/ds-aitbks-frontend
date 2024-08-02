import * as Yup from "yup";

const idValidationSchema = Yup.object({
  aadharNumber: Yup.string()
    .required("Aadhar number is required")
    .matches(/^\d{12}$/, "Aadhar number must be 12 digits"),
  voterId: Yup.string()
    .required("Voter ID is required")
    .matches(/^[A-Z]{3}[0-9]{7}$/, "Invalid Voter ID format"),
  presentOccupation: Yup.string().required("Present occupation is required"),
  introduction: Yup.string()
    .required("Introduction is required")
    .test(
      "max-words",
      "Introduction must be 50 words or less",
      (value) => value && value.split(" ").length <= 50
    ),
  description: Yup.string()
    .required("Description is required")
    .test(
      "max-words",
      "Description must be 200 words or less",
      (value) => value && value.split(" ").length <= 200
    ),
  // referenceOne: Yup.string().required("Reference one is required"),
  // referenceTwo: Yup.string().required("Reference two is required"),
});

export default idValidationSchema;
