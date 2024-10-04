import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { updateData } from "../HTTP_PUT/api";
import LoadingComponent from "../components/Loading/loadingComponent";

function EditRoleManagement() {
  const location = useLocation();
  const navigate = useNavigate();
  const [roledata, setRoleData] = useState(location.state.row);
  const [loading, setLoading] = useState(false);
  function checkRole(role) {
    if (role.user) {
      return "User";
    }
    // eslint-disable-next-line no-else-return
    else if (role.president) {
      return "President";
    } else if (role.accountant) {
      return "Accountant";
    } else if (role.admin) {
      return "Admin";
    } else if (role.commitee) {
      return "Committee";
    }
    return "";
  }
  const [data, setData] = useState({
    name: location.state.row.name,
    email: location.state.row.email,
    phonenumber: "",
    role: checkRole(roledata),
  });

  const roleChangeHandler = (e) => {
    const exp = { ...location.state.row };
    // eslint-disable-next-line no-restricted-syntax
    for (const i in exp) {
      if (exp[i] === true) {
        exp[i] = false;
      }
    }
    if (e.target.value === 0) {
      // eslint-disable-next-line dot-notation
      exp["president"] = true;
      setData({ ...data, role: "President" });
    } else if (e.target.value === 1) {
      // eslint-disable-next-line dot-notation
      exp["commitee"] = true;
      setData({ ...data, role: "Committee" });
    } else if (e.target.value === 2) {
      // eslint-disable-next-line dot-notation
      exp["accountant"] = true;
      setData({ ...data, role: "Accountant" });
    }
    setRoleData(exp);
  };

  const display = 1;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const { REACT_APP_FAKE_API } = process.env;
  const handlePut = async (id) => {
    try {
      setLoading(true);
      const result = await updateData(
        `${REACT_APP_FAKE_API}/updateInternalUser/${id}`,
        { ...roledata, name: data.name, email: data.email },
        {
          Token: `Bearer ${location.state.token}`,
        }
      );
      // eslint-disable-next-line no-console
      console.log("message:", result);
    } catch (error2) {
      // eslint-disable-next-line no-console
      console.error("Failed to update data", error2);
    } finally {
      setLoading(false);
      // eslint-disable-next-line no-alert
      alert("Role updated..");
      navigate("/president-view", {
        state: { token: location.state.token, display },
      });
    }
  };

  return (
    <>
      {loading && <LoadingComponent />}
      <Grid
        container
        spacing={3}
        sx={{ textAlign: "center", margin: "10px 0" }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ fontFamily: "ProximaSemiBold" }}>
            EDIT FORM
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Name</Typography>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            value={data.name}
            size="small"
            name="name"
            onChange={changeHandler}
          />
        </Grid>

        <Grid item xs={3}>
          <Typography>Phone number</Typography>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            size="small"
            name="phonenumber"
            onChange={changeHandler}
          />
        </Grid>

        <Grid item xs={3}>
          <Typography>Email</Typography>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            value={data.email}
            size="small"
            name="email"
            onChange={changeHandler}
          />
        </Grid>

        <Grid item xs={3}>
          <Typography>Current Role</Typography>
        </Grid>
        <Grid item xs={9}>
          <TextField fullWidth value={data.role} size="small" />
        </Grid>

        <Grid item xs={3}>
          <Typography>Modify Role</Typography>
        </Grid>
        <Grid item xs={9}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Modify Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Modify Role"
              onChange={(e) => roleChangeHandler(e)}
              sx={{
                width: "15vw",
                borderRadius: "20px",
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <MenuItem value={0}>President</MenuItem>
              <MenuItem value={1}>Committee</MenuItem>
              <MenuItem value={2}>Accountant</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={8} sx={{ margin: "auto" }}>
          <Button
            variant="contained"
            onClick={() => handlePut(location.state.row.accessId)}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default EditRoleManagement;
