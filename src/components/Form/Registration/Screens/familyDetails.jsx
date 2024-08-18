import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import {
  gender as genders,
  profession as professions,
  education as educations,
} from "../../../../Lib/constants";
import familyValidationSchema from "../../../../validations/familyValidationSchema";
import { useRootContext } from "../../../../Hooks/useRootContext";

function familyDetails({ setActiveStep }) {
  const { data, setData } = useRootContext();
  const [info, setInfo] = useState([]);

  const formik = useFormik({
    initialValues: {
      fatherName: data.fatherName || "",
      motherName: data.motherName || "",
      spouseName: data.spouseName || "",
      spouseAge: data.spouseAge || "",
      spouseGender: data.spouseGender || "",
      spouseProfession: data.spouseProfession || "",
      spouseEducation: data.spouseEducation || "",
      noOfChildren: data.noOfChildren || "",
      name: data.name || "",
      childAge: data.childAge || "",
      gender: data.gender || "",
    },
    validationSchema: familyValidationSchema,
    onSubmit: (values) => {
      setData((prevData) => ({
        ...prevData,
        familyDetails: {
          fatherName: values.fatherName,
          motherName: values.motherName,
          spouseName: values.spouseName,
          spouseOccupation: values.spouseProfession,
          spouseAge: values.spouseAge,
          spouseGender: values.spouseGender,
          spouseEducation: values.spouseEducation,
          noOfChildren: values.noOfChildren,
          children: info,
        },
      }));
      // // eslint-disable-next-line no-alert
      // alert(JSON.stringify(data, null, 2));
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    },
  });

  // let info = [];
  // const [exp,setExp]= useState({})
  // const changeHandler = (e) => {
  //   setExp({ [e.target.name]: e.target.value })
  //   info.push(exp);
  // }

  useEffect(() => {
    const exp2 = [];
    let i = 0;
    while (i < formik.values.noOfChildren) {
      exp2.push({
        name: "",
        childAge: "",
        gender: "",
      });
      i += 1;
    }
    setInfo(exp2);

    // console.log(info,"aaaaaaaaaaaa");
  }, [formik.values.noOfChildren]);

  // eslint-disable-next-line no-unused-vars
  const changeHandler = (e, index) => {
    // console.log(info,"middleeeeeeeeeeee")
    const exp = [...info];
    exp[index][e.target.name] = e.target.value;
    setInfo(exp);
    // console.log(exp,"kkkkkkkkkkkkkkk")
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Family Details</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Father Name"
            id="fatherName"
            name="fatherName"
            type="string"
            value={formik.values.fatherName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.fatherName && Boolean(formik.errors.fatherName)
            }
            helperText={formik.touched.fatherName && formik.errors.fatherName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="motherName"
            name="motherName"
            label="Mother's Name"
            type="string"
            value={formik.values.motherName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.motherName && Boolean(formik.errors.motherName)
            }
            helperText={formik.touched.motherName && formik.errors.motherName}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            fullWidth
            id="spouseName"
            name="spouseName"
            label="Spouse Name"
            type="string"
            value={formik.values.spouseName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.spouseName && Boolean(formik.errors.spouseName)
            }
            helperText={formik.touched.spouseName && formik.errors.spouseName}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            id="spouseAge"
            name="spouseAge"
            label="Spouse Age"
            type="number"
            value={formik.values.spouseAge}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.spouseAge && Boolean(formik.errors.spouseAge)}
            helperText={formik.touched.spouseAge && formik.errors.spouseAge}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="spouseGender-select-label">SpouseGender</InputLabel>
            <Select
              labelId="spouseGender-select-label"
              id="gender-select"
              value={formik.values.spouseGender}
              name="spouseGender"
              label="Spouse Gender"
              onChange={formik.handleChange}
            >
              {genders.map((gen) => (
                <MenuItem key={gen.label} value={gen.label}>
                  {gen.label}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.spouseGender && formik.errors.spouseGender && (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.spouseGender}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="spouseProfession-select-label">
              Spouse Profession
            </InputLabel>
            <Select
              labelId="spouseProfession-select-label"
              id="spouseProfession-select"
              value={formik.values.spouseProfession}
              name="spouseProfession"
              label="Spouse Profession"
              onChange={formik.handleChange}
            >
              {professions.map((pro) => (
                <MenuItem key={pro.label} value={pro.label}>
                  {pro.label}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.spouseProfession &&
              formik.errors.spouseProfession && (
                <FormHelperText sx={{ color: "red" }}>
                  {formik.errors.spouseProfession}
                </FormHelperText>
              )}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="spouseEducation-select-label">
              Spouse Education
            </InputLabel>
            <Select
              labelId="spouseEducation-select-label"
              id="education-select"
              value={formik.values.spouseEducation}
              name="spouseEducation"
              label="Spouse Education"
              onChange={formik.handleChange}
            >
              {educations.map((edu) => (
                <MenuItem key={edu.label} value={edu.label}>
                  {edu.label}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.spouseEducation &&
              formik.errors.spouseEducation && (
                <FormHelperText sx={{ color: "red" }}>
                  {formik.errors.spouseEducation}
                </FormHelperText>
              )}
          </FormControl>
        </Grid>
        {/* ----------------------------------------- */}
        <Grid item xs={7}>
          <TextField
            fullWidth
            // select
            id="noOfChildren"
            name="noOfChildren"
            label="No. of Children"
            type="number"
            // options={education}
            value={formik.values.noOfChildren}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.noOfChildren && Boolean(formik.errors.noOfChildren)
            }
            helperText={
              formik.touched.noOfChildren && formik.errors.noOfChildren
            }
          />
        </Grid>

        {Array.from({ length: formik.values.noOfChildren }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name Of Child"
                type="string"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                onChange={(e) => changeHandler(e, index)}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                id="childAge"
                name="childAge"
                label="Age Of Child"
                type="number"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                onChange={(e) => changeHandler(e, index)}
                error={
                  formik.touched.childAge && Boolean(formik.errors.childAge)
                }
                helperText={formik.touched.childAge && formik.errors.childAge}
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="gender-select-label">Child Gender</InputLabel>
                <Select
                  labelId="gender-select-label"
                  id="gender-select"
                  onChange={(e) => changeHandler(e, index)}
                  name="gender"
                  label="Child Gender"
                >
                  {genders.map((gen) => (
                    <MenuItem key={gen.label} value={gen.label}>
                      {gen.label}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.gender && formik.errors.gender && (
                  <FormHelperText sx={{ color: "red" }}>
                    {formik.errors.gender}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
          </>
        ))}
      </Grid>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
        }}
      >
        <Button variant="contained" type="submit">
          Next
        </Button>
      </Grid>
    </form>
  );
}

export default familyDetails;

// import React, { useState } from "react";

// const familyDetails = () => {
//   // State to hold the number input value
//   const [inputNumber, setInputNumber] = useState(1);

//   // State to hold the values of the input fields
//   const [inputValues, setInputValues] = useState([]);

//   // Change handler for inputNumber
//   const handleNumberChange = (event) => {
//     const number = Number(event.target.value);
//     setInputNumber(number);

//     // Initialize or truncate the inputValues array based on inputNumber
//     const newInputValues = [...inputValues].slice(0, number);

//     // Add empty strings if the number increases
//     while (newInputValues.length < number) {
//       newInputValues.push("");
//     }

//     setInputValues(newInputValues);
//   };

//   // Change handler for text input fields
//   const handleInputChange = (index, event) => {
//     const newValues = [...inputValues];
//     newValues[index] = event.target.value;
//     setInputValues(newValues);
//   };

//   return (
//     <div>
//       {/* Input to get the number of text fields */}
//       <input
//         type="number"
//         value={inputNumber}
//         onChange={handleNumberChange}
//         min="1"
//         placeholder="Enter the number of input fields"
//       />

//       {/* Render inputNumber of text input fields */}
//       {Array.from({ length: inputNumber }).map((_, index) => (
//         <input
//           // eslint-disable-next-line react/no-array-index-key
//           key={index}
//           type="text"
//           value={inputValues[index] || ""}
//           onChange={(event) => handleInputChange(index, event)}
//           placeholder={`Enter text ${index + 1}`}
//         />
//       ))}

//       {/* Display the stored input values */}
//       <div>
//         <h3>Stored Input Values:</h3>
//         <ul>
//           {inputValues.map((value, index) => (
//             // eslint-disable-next-line react/no-array-index-key
//             <li key={index}>
//               Field {index + 1}: {value}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default familyDetails;
