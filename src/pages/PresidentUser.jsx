import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import useCustomFetch from "../Hooks/useCustomFetch";
import PresidentModal from "../components/Modal/presidentModal";
import LoadingComponent from "../components/Loading/loadingComponent";

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
  const token = `${location?.state?.token}`;
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/user/getAllUsers`,
    method: "GET",
    headers: {
      Token: `Bearer ${token}`,
    },
  });

  // eslint-disable-next-line no-unused-vars
  const data1 = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/fetchUsersById/Committee`,
    method: "GET",
    headers: {
      Token: `Bearer ${token}`,
    },
  });

  // eslint-disable-next-line no-unused-vars
  const data2 = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/fetchUsersById/66cc34c8e549e83dc4cecf02`,
    method: "GET",
    headers: {
      Token: `Bearer ${token}`,
    },
  });

  // eslint-disable-next-line no-unused-vars
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

  if (error) return <h1>No data found...</h1>;
  if (loading) return <LoadingComponent />;

  return (
    <Box
      sx={{
        backgroundColor: "#D4E9DA",
        padding: 5,
        margin: "10px auto",
      }}
    >
      <div>
        <Typography
          style={{
            fontFamily: "ProximaBold",
            fontSize: "3vw",
            marginLeft: "37vw",
          }}
        >
          Applicant Details
        </Typography>
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
                    {`${row.firstName} ${row.lastName}`}
                  </TableCell>
                  <TableCell align="middle">
                    {displayDate(row.dateOfBirth)}
                  </TableCell>
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
                    <PresidentModal
                      row={row}
                      token={token}
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
    </Box>
  );
}

export default PresidentUser;
