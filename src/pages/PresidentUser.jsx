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
import { makeStyles } from "@mui/styles";
import useCustomFetch from "../Hooks/useCustomFetch";
import PresidentModal from "../components/Modal/presidentModal";

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

function PresidentUser() {
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
        (currentpage - 1) * rowsperpage + rowsperpage > data.content.length
          ? (currentpage - 1) * rowsperpage +
            (rowsperpage -
              ((currentpage - 1) * rowsperpage +
                rowsperpage -
                data.content.length))
          : (currentpage - 1) * rowsperpage + rowsperpage;
      // eslint-disable-next-line no-plusplus
      for (let i = (currentpage - 1) * rowsperpage + 1; i <= exp; i++) {
        partdata.push(data.content[i - 1]);
      }
      setCustomdata(partdata);
    }
  }, [currentpage, data]);

  if (error) return <h1>Error..</h1>;
  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <TableContainer sx={{ width: "95%", margin: "auto" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ textAlign: "center" }}>
              <TableCell
                align="middle"
                sx={{ fontFamily: "ProximaBold" }}
                className={classes.committeetable}
              >
                Name of the Applicant
              </TableCell>
              <TableCell
                align="middle"
                sx={{ fontFamily: "ProximaBold" }}
                className={classes.committeetable}
              >
                Date of Birth
              </TableCell>
              <TableCell
                align="middle"
                sx={{ fontFamily: "ProximaBold" }}
                className={classes.committeetable}
              >
                Phone number
              </TableCell>
              <TableCell
                align="middle"
                sx={{ fontFamily: "ProximaBold" }}
                className={classes.committeetable}
              >
                Email Id
              </TableCell>
              <TableCell
                align="middle"
                sx={{ fontFamily: "ProximaBold" }}
                className={classes.committeetable}
              >
                Status of Committee
              </TableCell>
              <TableCell
                align="middle"
                sx={{ fontFamily: "ProximaBold" }}
                className={classes.committeetable}
              >
                Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customdata.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  fontFamily: "ProximaRegular",
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                <TableCell align="middle">{row.dateOfBirth}</TableCell>
                <TableCell align="middle">{row.phoneNumber}</TableCell>
                <TableCell align="middle">{row.emailAddress}</TableCell>
                {row.status ? (
                  <TableCell
                    align="middle"
                    className={
                      // eslint-disable-next-line no-nested-ternary
                      row.status === "accepted"
                        ? classes.accepted
                        : row.status === "Waiting"
                        ? classes.waiting
                        : classes.declined
                    }
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    {row.status}
                  </TableCell>
                ) : (
                  <TableCell align="middle">Yet to be approved</TableCell>
                )}

                <TableCell align="middle">
                  <PresidentModal row={row} token={token} />
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

export default PresidentUser;
