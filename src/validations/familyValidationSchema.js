import * as Yup from "yup";

const familyValidationSchema = Yup.object({
  fatherName: Yup.string().required("Father's Name is required"),
  motherName: Yup.string().required("Mother's Name is required"),
  // spouseName: Yup.string(),
  // spouseAge: Yup.number().positive().integer(),
  // spouseGender: Yup.string(),
  // spouseProfession: Yup.string(),
  // spouseEducation: Yup.string(),
  // noOfChildren: Yup.number()
  //   .required("No. of Children is required")
  //   // .positive()
  //   .integer(),
  // name: Yup.string().required("Name Of Child is required"),
  // name: Yup.string(),
  // childAge: Yup.number()
  //   // .required("Age of Child is required")
  //   .positive()
  //   .integer(),
  // gender: Yup.string().required("Child Gender is required"),
});

export default familyValidationSchema;
