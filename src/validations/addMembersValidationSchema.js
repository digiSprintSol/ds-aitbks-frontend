import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name should be at least 2 characters long"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number should be 10 digits")
    .required("Phone number is required"),
});

export default validationSchema;
