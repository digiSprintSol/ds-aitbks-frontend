import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string("Enter your first name").required("is required"),
  middleName: yup.string("Enter your middle name").required("is required"),
  lastName: yup.string("Enter your last name").required("is required"),
  dob: yup
    .date("Enter your date of birth")
    .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    .required("Required"),
  mobileNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "must be exactly 10 digits")
    .required("Please enter your phone number"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  address: yup.string().required("is required"),
  address2: yup.string().required("is required"),
  pincode: yup
    .string("must be a number")
    .matches(/[0-9]{6}$/, "must be exactly 6 difits")
    .required("is required"),
  state: yup.string("Enter your state").required("is required"),
  country: yup.string("Enter your country").required("is required"),
  gender: yup.string("Enter your gender").required("is required"),
  education: yup.string("Enter your education").required("is required"),
  profession: yup.string("Enter your profession").required("is required"),
});

export default validationSchema;
