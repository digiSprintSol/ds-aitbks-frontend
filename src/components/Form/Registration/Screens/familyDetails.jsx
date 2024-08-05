import React from "react";
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
  // Stack,
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
  const exp = [1];

  const formik = useFormik({
    initialValues: {
      fatherName: data.fatherName || "",
      motherName: data.motherName || "",
      spouseName: data.spouseName || "",
      spouseAge: data.spouseAge || "",
      spouseGender: data.spouseGender || "",
      spouseProfession: data.spouseProfession || "",
      spouseEducation: data.spouseEducation || "",
      nativeAddress: data.nativeAddress || "",
      noOfChildren: data.noOfChildren || "",
      nameOfChild: data.nameOfChild || "",
      ageOfChild: data.ageOfChild || "",
      childGender: data.childGender || "",
    },
    validationSchema: familyValidationSchema,
    onSubmit: (values) => {
      setData((prevData) => ({
        ...prevData,
        fatherName: values.fatherName,
        motherName: values.motherName,
        spouseName: values.spouseName,
        spouseAge: values.spouseAge,
        spouseGender: values.spouseGender,
        spouseProfession: values.spouseProfession,
        spouseEducation: values.spouseEducation,
        nativeAddress: values.nativeAddress,
        noOfChildren: values.noOfChildren,
        nameOfChild: values.nameOfChild,
        ageOfChild: values.ageOfChild,
        childGender: values.childGender,
      }));
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < data.noOfChildren; i++) {
        // eslint-disable-next-line no-unused-expressions
        exp.push(i);
      }
      console.log(exp);
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    },
  });

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
            label="spouseAge"
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
              label="spouseGender"
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
              spouseProfession
            </InputLabel>
            <Select
              labelId="spouseProfession-select-label"
              id="spouseProfession-select"
              value={formik.values.spouseProfession}
              name="spouseProfession"
              label="spouseProfession"
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
              spouseEducation
            </InputLabel>
            <Select
              labelId="spouseEducation-select-label"
              id="education-select"
              value={formik.values.spouseEducation}
              name="spouseEducation"
              label="spouseEducation"
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="nativeAddress"
            name="nativeAddress"
            label="Native Address"
            type="string"
            value={formik.values.nativeAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.nativeAddress &&
              Boolean(formik.errors.nativeAddress)
            }
            helperText={
              formik.touched.nativeAddress && formik.errors.nativeAddress
            }
          />
        </Grid>
        <Grid item xs={12}>
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
        {exp.map((item) => (
          <div key={item}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="nameOfChild"
                name="nameOfChild"
                label="Name Of Child"
                type="string"
                value={formik.values.nameOfChild}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.nameOfChild &&
                  Boolean(formik.errors.nameOfChild)
                }
                helperText={
                  formik.touched.nameOfChild && formik.errors.nameOfChild
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="ageOfChild"
                name="ageOfChild"
                label="ageOfChild"
                type="number"
                value={formik.values.ageOfChild}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.ageOfChild && Boolean(formik.errors.ageOfChild)
                }
                helperText={
                  formik.touched.ageOfChild && formik.errors.ageOfChild
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="childGender-select-label">
                  ChildGender
                </InputLabel>
                <Select
                  labelId="childGender-select-label"
                  id="childGender-select"
                  value={formik.values.childGender}
                  name="childGender"
                  label="childGender"
                  onChange={formik.handleChange}
                >
                  {genders.map((gen) => (
                    <MenuItem key={gen.label} value={gen.label}>
                      {gen.label}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.childGender && formik.errors.childGender && (
                  <FormHelperText sx={{ color: "red" }}>
                    {formik.errors.childGender}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
          </div>
        ))}
        {/* <Grid item xs={6}>
        <TextField
          fullWidth
          id="nameOfChild"
          name="nameOfChild"
          label="Name Of Child"
          type="nameOfChild"
          value={formik.values.nameOfChild}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.nameOfChild && Boolean(formik.errors.nameOfChild)
          }
          helperText={formik.touched.nameOfChild && formik.errors.nameOfChild}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          fullWidth
          id="age"
          name="age"
          label="Age"
          type="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
        />
      </Grid>
      <Grid item xs={4}>
        <Select
          fullWidth
          labelId="gender-select-label"
          id="gender-select"
          value={gender}
          label="Gender"
          onChange={handleGenderChange}
        >
          {genders.map((gen) => (
            <MenuItem value={gen.label}>{gen.label}</MenuItem>
          ))}
        </Select>
      </Grid> */}
      </Grid>
      <Button variant="contained" type="submit">
        Next
      </Button>
    </form>
  );
}

export default familyDetails;
