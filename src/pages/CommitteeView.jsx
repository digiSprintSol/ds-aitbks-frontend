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
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Stack from "@mui/material/Stack";
import useCustomFetch from "../Hooks/useCustomFetch";
import CommitteePopup from "./CommitteePopup";
import LoadingComponent from "../components/Loading/loadingComponent";

const useStyles = makeStyles({
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

  const data1 = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/fetchUsersById/Committee`,
    method: "GET",
    headers: {
      Token: `Bearer ${token}`,
    },
  });

  const data2 = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/fetchUsersById/66cc34c8e549e83dc4cecf02`,
    method: "GET",
    headers: {
      Token: `Bearer ${token}`,
    },
  });

  const data3 = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/fetchUsersById/66cc3510e549e83dc4cecf03`,
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

  function displayDate(mydate) {
    const d = new Date(mydate);
    let month = d.getMonth() + 1;
    let date = d.getDate();
    if (String(month).length === 1) {
      month = "0".concat(month);
    }
    if (String(date).length === 1) {
      date = "0".concat(date);
    }
    return `${date}-${month}-${d.getFullYear()}`;
  }

  if (error || data1.error || data2.error || data3.error)
    return <h1>No users to display...</h1>;
  if (loading || data1.loading || data2.loading || data3.loading)
    return <LoadingComponent />;

  return (
    <div>
      <Typography
        style={{
          fontFamily: "ProximaBold",
          fontSize: "3vw",
          marginLeft: "39vw",
          marginTop: "1vw",
        }}
      >
        Applicant Details
      </Typography>
      <TableContainer
        sx={{ width: "95%", margin: "30px auto" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ textAlign: "center", fontFamily: "ProximaBold" }}>
              <TableCell align="middle">Name of the applicant</TableCell>
              {/* <TableCell align="middle">
                Date of Application Submitted
              </TableCell> */}
              <TableCell align="middle">Date of Birth</TableCell>
              <TableCell align="middle">Phone number</TableCell>
              <TableCell align="middle">Email Id</TableCell>
              <TableCell align="middle" sx={{ fontFamily: "ProximaBold" }}>
                Status of Committee1
              </TableCell>
              <TableCell align="middle" sx={{ fontFamily: "ProximaBold" }}>
                Status of Committee2
              </TableCell>
              <TableCell align="middle" sx={{ fontFamily: "ProximaBold" }}>
                Status of Committee3
              </TableCell>
              <TableCell align="middle" sx={{ fontFamily: "ProximaBold" }}>
                Details
              </TableCell>
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
                  {`${row.firstName} ${row.lastName}`}
                </TableCell>
                {/* <TableCell align="middle">{row.dateOfBirth}</TableCell> */}
                <TableCell align="middle">
                  {displayDate(row.dateOfBirth)}
                </TableCell>
                <TableCell align="middle">{row.phoneNumber}</TableCell>
                <TableCell align="middle">{row.emailAddress}</TableCell>

                {row.committeeOneChoosenMembershipForApplicant &&
                row.committeeOneApproval === "accepted" ? (
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
                ) : row.committeeOneChoosenMembershipForApplicant &&
                  row.committeeOneApproval === "rejected" ? (
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
                ) : row.committeeOneChoosenMembershipForApplicant &&
                  row.committeeOneApproval === "waiting" ? (
                  <TableCell
                    align="middle"
                    className={classes.waiting}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Waiting
                  </TableCell>
                ) : (
                  <TableCell align="middle">Yet to be approved</TableCell>
                )}

                {/* -------------------------------------------------------------------------- */}

                {row.committeeTwoChoosenMembershipForApplicant &&
                row.committeeTwoApproval === "accepted" ? (
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
                ) : row.committeeTwoChoosenMembershipForApplicant &&
                  row.committeeTwoApproval === "rejected" ? (
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
                ) : row.committeeTwoChoosenMembershipForApplicant &&
                  row.committeeTwoApproval === "waiting" ? (
                  <TableCell
                    align="middle"
                    className={classes.waiting}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Waiting
                  </TableCell>
                ) : (
                  <TableCell align="middle">Yet to be approved</TableCell>
                )}

                {/* -------------------------------------------------------------------------- */}

                {row.committeeThreeChoosenMembershipForApplicant &&
                row.committeeThreeApproval === "accepted" ? (
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
                ) : row.committeeThreeChoosenMembershipForApplicant &&
                  row.committeeThreeApproval === "rejected" ? (
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
                ) : row.committeeThreeChoosenMembershipForApplicant &&
                  row.committeeThreeApproval === "waiting" ? (
                  <TableCell
                    align="middle"
                    className={classes.waiting}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Waiting
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
                    name1={data1 ? data1.data.name : ""}
                    name2={data2 ? data2.data.name : ""}
                    name3={data3 ? data3.data.name : ""}
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
      {/* <span style={{ position: "absolute", transform: "Translate(50vw,-1vw)" }}>
        Display
        <input type="number" value={rowsperpage} onChange={changeHandler} />
      </span> */}
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
    </div>
  );
}

export default CommitteeView;
