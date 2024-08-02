import * as Yup from "yup";

const familyValidationSchema = Yup.object({
  fatherName: Yup.string().required("Father's Name is required"),
  motherName: Yup.string().required("Mother's Name is required"),
  spouseName: Yup.string().required("Spouse Name is required"),
  spouseAge: Yup.number().required("Age is required").positive().integer(),
  spouseGender: Yup.string().required("Gender is required"),
  spouseProfession: Yup.string().required("Profession is required"),
  spouseEducation: Yup.string().required("Education is required"),
  nativeAddress: Yup.string().required("Native Address is required"),
  noOfChildren: Yup.number()
    .required("No. of Children is required")
    .positive()
    .integer(),
  nameOfChild: Yup.string().required("Name Of Child is required"),
  ageOfChild: Yup.number()
    .required("Age of Child is required")
    .positive()
    .integer(),
  childGender: Yup.string().required("Child Gender is required"),
});

export default familyValidationSchema;
