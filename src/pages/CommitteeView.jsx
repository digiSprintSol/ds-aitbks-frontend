/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
// import Stack from "@mui/material/Stack";
import useCustomFetch from "../Hooks/useCustomFetch";
import CommitteePopup from "./CommitteePopup";

const useStyles = makeStyles({
  committeetable: {
    fontSize: "1vw",
  },
  accepted: {
    backgroundColor: "white",
    color: "green",
  },
  waiting: {
    backgroundColor: "white",
    color: "#F1C21B",
  },
  declined: {
    backgroundColor: "white",
    color: "#F3561F",
  },
});

function CommitteeView() {
  const location = useLocation();
  const token = `${location.state.token}`;
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/user/getAllUsers`,
    method: "GET",
    headers: {
      Token: `Bearer ${token}`,
    },
  });

  const [currentpage, setCurrentpage] = useState(1);
  const [customdata, setCustomdata] = useState([]);
  const classes = useStyles();

  const rowsperpage = 5;

  const handleChange = (event, value) => {
    setCurrentpage(value);
  };

  useEffect(() => {
    if (data) {
      const partdata = [];
      const exp =
        // rowsperpage > data.content.length ? data.content.length : rowsperpage;
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

  if (error) return <h1>No users to display...</h1>;
  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <TableContainer
        sx={{ width: "95%", margin: "30px auto" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ textAlign: "center", fontFamily: "ProximaBold" }}>
              <TableCell align="middle">Name of the Applicant</TableCell>
              {/* <TableCell align="middle">
                Date of Application Submitted
              </TableCell> */}
              <TableCell align="middle">Date of Birth</TableCell>
              <TableCell align="middle">Phone number</TableCell>
              <TableCell align="middle">Email Id</TableCell>
              <TableCell
                align="middle"
                sx={{ fontFamily: "ProximaBold" }}
                className={classes.committeetable}
              >
                Status of Committee1
              </TableCell>
              <TableCell
                align="middle"
                sx={{ fontFamily: "ProximaBold" }}
                className={classes.committeetable}
              >
                Status of Committee2
              </TableCell>
              <TableCell
                align="middle"
                sx={{ fontFamily: "ProximaBold" }}
                className={classes.committeetable}
              >
                Status of Committee3
              </TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customdata.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                {/* <TableCell align="middle">{row.dateOfBirth}</TableCell> */}
                <TableCell align="middle">{row.dateOfBirth}</TableCell>
                <TableCell align="middle">{row.phoneNumber}</TableCell>
                <TableCell align="middle">{row.emailAddress}</TableCell>

                {row.committeeOneRemarksForApplicant &&
                row.committeeOneApproval === true ? (
                  <TableCell
                    align="middle"
                    className={classes.accepted}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Accepted
                  </TableCell>
                ) : row.committeeOneRemarksForApplicant &&
                  row.committeeOneApproval === false ? (
                  <TableCell
                    align="middle"
                    className={classes.declined}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Declined
                  </TableCell>
                ) : (
                  <TableCell align="middle">Yet to be approved</TableCell>
                )}

                {/* -------------------------------------------------------------------------- */}

                {row.committeeTwoRemarksForApplicant &&
                row.committeeTwoApproval === true ? (
                  <TableCell
                    align="middle"
                    className={classes.accepted}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Accepted
                  </TableCell>
                ) : row.committeeTwoRemarksForApplicant &&
                  row.committeeTwoApproval === false ? (
                  <TableCell
                    align="middle"
                    className={classes.declined}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Declined
                  </TableCell>
                ) : (
                  <TableCell align="middle">Yet to be approved</TableCell>
                )}

                {/* -------------------------------------------------------------------------- */}

                {row.committeeThreeRemarksForApplicant &&
                row.committeeThreeApproval === true ? (
                  <TableCell
                    align="middle"
                    className={classes.accepted}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Accepted
                  </TableCell>
                ) : row.committeeThreeRemarksForApplicant &&
                  row.committeeThreeApproval === false ? (
                  <TableCell
                    align="middle"
                    className={classes.declined}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Declined
                  </TableCell>
                ) : (
                  <TableCell align="middle">Yet to be approved</TableCell>
                )}

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
                  >
                    View Full Details
                  </Button> */}
                  <CommitteePopup
                    row={row}
                    token={token}
                    id={location.state.id}
                  />
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
        {currentpage * rowsperpage > data.length ? (
          <span>{data.length}</span>
        ) : (
          <span>{currentpage * rowsperpage}</span>
        )}{" "}
        of {data.length} entries
      </span>
      {/* <span style={{ position: "absolute", transform: "Translate(50vw,-1vw)" }}>
        Display
        <input type="number" value={rowsperpage} onChange={changeHandler} />
      </span> */}
      <Pagination
        count={Math.ceil(data.length / rowsperpage)}
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

export default CommitteeView;
