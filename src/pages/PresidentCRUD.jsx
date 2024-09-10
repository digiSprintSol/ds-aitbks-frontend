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
import { Box } from "@mui/system";
import useCustomFetch from "../Hooks/useCustomFetch";

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

  useEffect(() => {
    const range = [
      (currentpage - 1) * rowsperpage + 1,
      currentpage * rowsperpage,
    ];

    if (data) {
      const partdata = data.filter(
        (row) => row.id >= range[0] && row.id <= range[1]
      );
      setCustomdata(partdata);
    }
  }, [currentpage, data]);
  // -----------------------------------------------------------------------------------------------------
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Handle the input change and filter the data
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (data) {
      const filteredResults = data.filter((item) =>
        item.name ? item.name.toLowerCase().includes(value) : {}
      );
      // eslint-disable-next-line no-console
      console.log(filteredData, "kkkk");
      setFilteredData(filteredResults);
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

  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  if (error) return <h1>Error..</h1>;
  if (loading) return <h1>loading...</h1>;

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
            value={searchTerm}
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
              <TableCell>Modify</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData &&
              filteredData.map((row) => (
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
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Modify Role
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={role}
                        label="Modify Role"
                        onChange={handleChange}
                        sx={{
                          minWidth: 200,
                          borderRadius: "20px",
                          boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        }}
                      >
                        <MenuItem value={0}>Committee</MenuItem>
                        <MenuItem value={1}>Accountant</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
        }}
      >
        <div>
          showing {(currentpage - 1) * rowsperpage + 1} to{" "}
          {currentpage * rowsperpage > data.length ? (
            <span>{data.length}</span>
          ) : (
            <span>{currentpage * rowsperpage}</span>
          )}{" "}
          of {data.length} entries
        </div>
        <Pagination
          count={Math.ceil(data.length / rowsperpage)}
          page={currentpage}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </Box>
  );
}

export default PresidentCRUD;

// [
//   {
//     accessId: "Admin",
//     name: "Admin",
//     email: "admin@xyz.com",
//     password: "Admin123",
//     phoneNumber: null,
//     president: true,
//     accountant: true,
//     commitee: true,
//     user: true,
//     dateOfAssignedPosition: null,
//     deleted: false,
//   },
//   {
//     accessId: "President",
//     name: "President User",
//     email: "president@gmail.com",
//     password: "President@123",
//     phoneNumber: "8787878787",
//     president: true,
//     accountant: false,
//     commitee: false,
//     user: false,
//     dateOfAssignedPosition: "2024-08-13T06:56:56.882",
//     deleted: false,
//   },
//   {
//     accessId: "Accountant",
//     name: "Accountant User",
//     email: "accountant@gmail.com",
//     password: "accountant@123",
//     phoneNumber: "8787878787",
//     president: false,
//     accountant: true,
//     commitee: false,
//     user: false,
//     dateOfAssignedPosition: "2024-08-13T06:56:56.882",
//     deleted: false,
//   },
//   {
//     accessId: "Committee",
//     name: "Committee User",
//     email: "committee@gmail.com",
//     password: "committee@123",
//     phoneNumber: "8787878787",
//     president: false,
//     accountant: false,
//     commitee: true,
//     user: false,
//     dateOfAssignedPosition: "2024-08-13T06:56:56.882",
//     deleted: false,
//   },
//   {
//     accessId: "user",
//     name: "user",
//     email: "user@gmail.com",
//     password: "user123",
//     phoneNumber: "76767676",
//     president: true,
//     accountant: false,
//     commitee: false,
//     user: false,
//     dateOfAssignedPosition: "2024-08-13T13:43:45.98",
//     deleted: false,
//   },
// ];
