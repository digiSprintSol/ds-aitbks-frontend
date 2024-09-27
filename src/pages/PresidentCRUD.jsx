/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Circles } from "react-loader-spinner";
import { Box } from "@mui/system";
import useCustomFetch from "../Hooks/useCustomFetch";
import { updateData } from "../HTTP_PUT/api";

function PresidentCRUD() {
  // const { data, loading, error } = useCustomFetch(
  //   "http://localhost:1369/getAll",
  //   "get"
  // );
  const location = useLocation();
  const navigate = useNavigate();
  const token = `${location.state.token}`;
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getAll`,
    method: "GET",
    headers: {
      Token: `Bearer ${token}`,
    },
  });

  // console.log(data, "data");

  const [currentpage, setCurrentpage] = useState(1);
  const [customdata, setCustomdata] = useState([]);
  const rowsperpage = 5;
  // console.log(customdata, "customdata");

  const handleChange = (event, value) => {
    setCurrentpage(value);
  };

  const [roledata, setRoleData] = useState(null);
  const roleChangeHandler = (index, e) => {
    if (data) {
      const exp = { ...data[index] };
      // console.log(Object.keys(exp).length, data[index], "geggee");
      // eslint-disable-next-line no-restricted-syntax
      for (const i in exp) {
        // console.log("siva1","siva1")
        // console.log(exp[i], true, "dhhdhfaak");
        if (exp[i] === true) {
          exp[i] = false;
        }
      }
      if (e.target.value === 0) {
        // eslint-disable-next-line dot-notation
        exp["president"] = true;
      } else if (e.target.value === 1) {
        // eslint-disable-next-line dot-notation
        exp["commitee"] = true;
      } else if (e.target.value === 2) {
        // eslint-disable-next-line dot-notation
        exp["accountant"] = true;
      }
      setRoleData(exp);
    }
  };

  const handlePut = async (id) => {
    try {
      const result = await updateData(
        `${REACT_APP_FAKE_API}/updateInternalUser/${id}`,
        roledata,
        {
          Token: `Bearer ${token}`,
        }
      );
      // eslint-disable-next-line no-console
      console.log("message:", result);
      // eslint-disable-next-line no-alert
      alert("Role updated..");
    } catch (error2) {
      // eslint-disable-next-line no-console
      console.error("Failed to update data", error2);
    }
  };

  useEffect(() => {
    if (data && currentpage > 0) {
      const partdata = [];
      const exp =
        (currentpage - 1) * rowsperpage + rowsperpage > data.length
          ? (currentpage - 1) * rowsperpage +
            (rowsperpage -
              ((currentpage - 1) * rowsperpage + rowsperpage - data.length))
          : (currentpage - 1) * rowsperpage + rowsperpage;
      // eslint-disable-next-line no-plusplus
      for (let i = (currentpage - 1) * rowsperpage + 1; i <= exp; i++) {
        partdata.push(data[i - 1]);
      }
      setCustomdata(partdata);
    }
  }, [currentpage, data]);
  // -----------------------------------------------------------------------------------------------------
  // const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      // console.log(value, "kkkdddd");
      setCurrentpage(20);
      // setCurrentpage(1);
    } else if (data) {
      const filteredResults = data.filter((item) =>
        item.name ? item.name.toLowerCase() === value : {}
      );
      // eslint-disable-next-line no-console
      // console.log(filteredResults, "kkkk");
      if (filteredResults) {
        setCustomdata(filteredResults);
      }
    }
  };

  const status = (row) => {
    if (row.president && row.accountant && row.commitee && row.user) {
      return "Admin";
    }

    // eslint-disable-next-line no-else-return
    else if (row.president) {
      return "President";
    } else if (row.commitee) {
      return "Committee";
    } else if (row.accountant) {
      return "Accountant";
    } else if (row.user) {
      return "User";
    } else {
      return null;
    }
  };

  // useEffect(() => {
  //   setFilteredData(customdata);
  // }, [data]);
  if (error) return <h1>Error..</h1>;
  if (loading)
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          backdropFilter: "blur(5px)",
        }}
      >
        <Circles
          height="90"
          width="90"
          color="#4fa94d"
          ariaLabel="circles-loading"
          visible
        />
      </Box>
    );

  return (
    <Box
      sx={{
        backgroundColor: "#D4E9DA",
        padding: 5,
        margin: "10px auto",
      }}
    >
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          marginLeft: "100px",
        }}
      >
        <Grid item xs={7}>
          <TextField
            type="text"
            // value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search by full name"
            style={{ width: "20vw" }}
            size="small"
          />
        </Grid>
        <Grid item xs={5}>
          <Button
            variant="contained"
            onClick={() => navigate("/add-members", { state: { token } })}
          >
            Add Members
          </Button>
        </Grid>
      </Grid>

      <TableContainer sx={{ width: "95%", margin: "auto" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ textAlign: "center" }}>
              <TableCell align="center">Name of the Applicant</TableCell>
              <TableCell align="center">Effective Date</TableCell>
              <TableCell align="center">Phone number</TableCell>
              <TableCell align="center">Email Id</TableCell>
              <TableCell align="center">Current Status</TableCell>
              <TableCell align="center">Modify</TableCell>
              <TableCell align="center">Confirm</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customdata &&
              customdata.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.add}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  {/* {(row.president &&
                    row.accountant &&
                    row.commitee &&
                    row.user)?(<TableCell align="center">Admin</TableCell>):
                    (row.president) ?(
                    <TableCell align="center">President</TableCell>
                   ):
                  (row.accountant)?(
                    <TableCell align="center">Accountant</TableCell>
                  ):
                  (row.commitee)?(
                    <TableCell align="center">Committee</TableCell>)
                  } */}
                  <TableCell align="center">{status(row)}</TableCell>
                  <TableCell align="center">
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">
                        Modify Role
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Modify Role"
                        onChange={(e) =>
                          roleChangeHandler(
                            (currentpage - 1) * rowsperpage + index,
                            e
                          )
                        }
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
                  </TableCell>
                  <TableCell align="center">
                    <CheckIcon onClick={() => handlePut(row.accessId)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <hr />
      <br />
      <span
        style={{
          position: "absolute",
          transform: "Translate(5vw,-0.7vw)",
          fontFamily: "ProximaRegular",
        }}
      >
        showing {(currentpage - 1) * rowsperpage + 1} to{" "}
        {currentpage * rowsperpage > data.length ? (
          <span>{data.length}</span>
        ) : (
          <span>{currentpage * rowsperpage}</span>
        )}{" "}
        of {data.length} entries
      </span>

      <Pagination
        count={Math.ceil(data.length / rowsperpage)}
        sx={{ position: "absolute", transform: "Translate(65vw,-1.2vw)" }}
        page={currentpage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
      <br />
      <hr />
    </Box>
  );
}

export default PresidentCRUD;
