/* eslint-disable react/prop-types */
import React from "react";
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

function Declaration() {
  const { data, setData } = useRootContext();

  const formik = useFormik({
    initialValues: {
      membershipType: "",
    },
    // validationSchema,
    onSubmit: (values) => {
      setData((prevData) => ({
        ...prevData,
        membershipType: values.membershipType,
      }));
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(data, null, 2));
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
