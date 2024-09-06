import * as yup from "yup";

const UploadDonationValidation = yup.object({
  // profilePic: yup.mixed().required("File is required"),
  fullName: yup.string("Enter your full name").required("is required"),
  dob: yup.date("Enter your date of birth").required("is required"),
  transactionDate: yup
    .date("Enter your date of transaction")
    .required("is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "must be exactly 10 digits")
    .required("Please enter your phone number"),
  emailId: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  transactionId: yup.string("Enter transaction ID").required("is required"),
  amountPaid: yup.string().required("is required"),
});

export default UploadDonationValidation;
