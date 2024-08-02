import * as yup from "yup";

const loginSchema = yup.object({
  username: yup.string("Enter your username").required("is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default loginSchema;
