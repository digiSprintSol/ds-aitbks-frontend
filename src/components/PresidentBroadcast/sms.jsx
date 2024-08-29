import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  TextField,
  // Button,
  Box,
} from "@mui/material";

// Define validation schema using Yup
const validationSchema = Yup.object({
  memberType: Yup.string().required("Please select a member type."),
  body: Yup.string().required("Please enter the body of the SMS."),
});

function SmsComponent() {
  return (
    <Formik
      initialValues={{ memberType: "", body: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form values:", values);
      }}
    >
      {({ values, handleChange, errors, touched }) => (
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "800px",
              margin: "auto",
              padding: 3,
              borderRadius: 2,
              backgroundColor: "white",
              boxShadow: 2,
            }}
          >
            <FormControl fullWidth variant="outlined">
              <InputLabel id="memberType-label">Select Member Type</InputLabel>
              <Field
                as={Select}
                name="memberType"
                labelId="memberType-label"
                label="Select Member Type"
                value={values.memberType}
                onChange={handleChange}
                error={touched.memberType && Boolean(errors.memberType)}
              >
                <MenuItem value="trustee">Trustee</MenuItem>
                <MenuItem value="patron">Patron</MenuItem>
                <MenuItem value="lifemember">Life Member</MenuItem>
                <MenuItem value="committeemember">Commitee</MenuItem>
                <MenuItem value="accountant">Accountant</MenuItem>
              </Field>
              {touched.memberType && errors.memberType ? (
                <div style={{ color: "red", fontSize: "0.8em" }}>
                  {errors.memberType}
                </div>
              ) : null}
            </FormControl>
            <TextField
              fullWidth
              variant="outlined"
              name="body"
              label="Body"
              multiline
              rows={4}
              value={values.body}
              onChange={handleChange}
              error={touched.body && Boolean(errors.body)}
              helperText={touched.body && errors.body}
            />

            {/* <Button type="submit" variant="contained" color="primary">
              Submit
            </Button> */}
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default SmsComponent;
