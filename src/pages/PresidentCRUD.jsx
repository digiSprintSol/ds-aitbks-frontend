/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import useCustomFetch from "../Hooks/useCustomFetch";

function PresidentCRUD() {
  // const { data, loading, error } = useCustomFetch(
  //   "http://localhost:1369/getAll",
  //   "get"
  // );
  const location = useLocation();
  const token = `${location.state.token}`;
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getAll`,
    method: "GET",
    headers: {
      Token: token,
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

  if (error) return <h1>Error..</h1>;
  if (loading) return <h1>loading...</h1>;

  return (
    <Stack>
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
            {data.map((row) => (
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
                <TableCell align="center">{row.name}</TableCell>
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
    </Stack>
  );
}

export default PresidentCRUD;
