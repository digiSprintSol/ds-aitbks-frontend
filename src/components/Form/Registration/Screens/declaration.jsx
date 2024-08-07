/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useRootContext } from "../../../../Hooks/useRootContext";
import { postRequest } from "../../../../HTTP_POST/api";

function Declaration() {
  const { data, setData } = useRootContext();
  // eslint-disable-next-line no-unused-vars
  const [response, setResponse] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [fullName, setFullName] = useState("");

  const formik = useFormik({
    initialValues: {
      membershipType: "",
    },
    // validationSchema,
    onSubmit: async (values) => {
      setData((prevData) => ({
        ...prevData,
        membershipType: values.membershipType,
      }));
      setFullName(data.firstName.concat(data.middleName, data.lastName));
      delete data.firstName;
      delete data.middleName;
      delete data.lastName;
      setData(...data, fullName);

      // eslint-disable-next-line no-alert
      // alert(JSON.stringify(data, null, 2));
      try {
        const result = await postRequest(
          "http://localhost:1369/user/register",
          { key: data }
        );
        setResponse(result);
      } catch (err) {
        setError(err.message);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
            }}
          >
            Membership Type:
          </Typography>
          <RadioGroup
            row
            name="membershipType"
            value={formik.values.membershipType}
            onChange={formik.handleChange}
            sx={{
              marginLeft: "20px",
            }}
          >
            <FormControlLabel
              value="trustee"
              control={<Radio />}
              label="Trustee"
            />
            <FormControlLabel
              value="patron"
              control={<Radio />}
              label="Patron"
              sx={{
                marginLeft: "20px",
              }}
            />
            <FormControlLabel
              value="lifeMembership"
              control={<Radio />}
              label="Life Membership"
              sx={{
                marginLeft: "20px",
              }}
            />
          </RadioGroup>
        </Box>
        {formik.touched.membershipType && formik.errors.membershipType ? (
          <Typography variant="body2" color="error">
            {formik.errors.membershipType}
          </Typography>
        ) : null}
        <Typography
          variant="subtitle1"
          style={{ color: "red", fontWeight: "bold" }}
        >
          Declaration
        </Typography>
        <Typography variant="body1">
          I hereby declare that once the membership is granted, I will abide by
          the laws and the other regulation of All India Telega Balija Kapu
          Sangam
        </Typography>
        <FormControlLabel
          required
          control={<Checkbox />}
          label="The information provided above is true and correct to the best of my knowledge and belief"
        />
      </Grid>
      <Button variant="contained" type="submit">
        Register
      </Button>
    </form>
  );
}

export default Declaration;
