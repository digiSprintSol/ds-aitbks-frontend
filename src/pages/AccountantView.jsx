import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
// import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import useCustomFetch from "../Hooks/useCustomFetch";
import Acknowledge from "./Acknowledge";

const useStyles = makeStyles({
  committeetable: {
    fontSize: "1vw",
  },
});

function PresidentView() {
  const { data, loading, error } = useCustomFetch(
    "http://localhost:1369/user/getAllUsers",
    "get"
  );

  const [currentpage, setCurrentpage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [customdata, setCustomdata] = useState([]);
  // const navigate = useNavigate();
  const classes = useStyles();
  const rowsperpage = 3;

  const handleChange = (event, value) => {
    setCurrentpage(value);
  };

  // const handleViewDetails = () => {
  //   navigate('/acknowledge');
  // };

  //  const handleClickOpen = () => {
  //    setOpen(true);
  //  };

  useEffect(() => {
    const range = [];
    range.push((currentpage - 1) * rowsperpage + 1);
    range.push(currentpage * rowsperpage);

    if (data) {
      const partdata = data.content.filter(
        (row) => row.id >= range[0] && row.id <= range[1]
      );
      setCustomdata(partdata);
    }
  }, [currentpage, data]);

  if (error) return <h1>Error..</h1>;
  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <TableContainer
        sx={{ width: "95%", margin: "30px auto" }}
        component={Paper}
      >
        <Table
          sx={{ minWidth: 650 }}
          className={classes.committeetable}
          aria-label="simple table"
        >
          <TableHead className={classes.committeetable}>
            <TableRow sx={{ textAlign: "center" }}>
              <TableCell align="middle" className={classes.committeetable}>
                Name of the Applicant
              </TableCell>
              <TableCell align="middle">
                Date of Application Submitted
              </TableCell>
              <TableCell align="middle">Date of Birth</TableCell>
              <TableCell align="middle">Phone number</TableCell>
              <TableCell align="middle">Email Id</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.content.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                <TableCell align="middle">{row.dateOfBirth}</TableCell>
                <TableCell align="middle">{row.dateOfBirth}</TableCell>
                <TableCell align="middle">{row.phoneNumber}</TableCell>
                <TableCell align="middle">{row.emailAddress}</TableCell>
                <TableCell align="middle">
                  {/* <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      backgroundColor: "#F1C21B",
                      width: "14vw",
                      borderRadius: "15px",
                      height: "2vw",
                    }}
                    // onClick={() => handleViewDetails(row.id)}
                  >
                    View Full Details
                  </Button> */}
                  <Acknowledge />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <hr />
      <br />
      <span style={{ position: "absolute", transform: "Translate(5vw,-1vw)" }}>
        showing {(currentpage - 1) * rowsperpage + 1} to{" "}
        {currentpage * rowsperpage > data.content.length ? (
          <span>{data.content.length}</span>
        ) : (
          <span>{currentpage * rowsperpage}</span>
        )}{" "}
        of {data.content.length} entries
      </span>

      <Pagination
        count={Math.ceil(data.content.length / rowsperpage)}
        sx={{ position: "absolute", transform: "Translate(75vw,-1.5vw)" }}
        page={currentpage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
      <br />
      <hr />
    </div>
  );
}

export default PresidentView;
