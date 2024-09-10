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
import { Circles } from "react-loader-spinner";
import useCustomFetch from "../Hooks/useCustomFetch";
import Acknowledge from "./Acknowledge";

// const useStyles = makeStyles({
//   committeetable: {
//     fontSize: "1vw",
//   },
// });
const useStyles = makeStyles({
  committeetable: {
    fontSize: "1vw",
  },
  acknowledged: {
    color: "green",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

function PresidentView() {
  // const { data, loading, error } = useCustomFetch(
  //   "http://localhost:1369/user/getAllUsers",
  //   "get"
  // );
  const location = useLocation();
  const token = `${location.state.token}`;
  // eslint-disable-next-line no-unused-vars
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/user/accountantFirstView`,
    method: "GET",
    headers: {
      Token: `Bearer ${token}`,
    },
  });

  const [currentpage, setCurrentpage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [customdata, setCustomdata] = useState([]);
  // const navigate = useNavigate();
  const classes = useStyles();
  const rowsperpage = 5;

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

  if (error) return <h1>No users to display</h1>;
  if (loading) {
    return (
      <div
        style={{
          minHeight: "55vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Circles
          height="90"
          width="90"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible
        />
      </div>
    );
  }

  // const handleViewDonations = () => {
  //   navigate("/view-donations", { state: { token } });
  // };

  return (
    <div>
      {/* <Button variant="contained" onClick={handleViewDonations}>
        View Donations
      </Button> */}
      <TableContainer
        sx={{ width: "95%", margin: "30px auto" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ textAlign: "center" }}>
              <TableCell align="middle" className={classes.committeetable}>
                Name of the Applicant
              </TableCell>
              <TableCell align="middle" className={classes.committeetable}>
                Date of Application Submitted
              </TableCell>
              <TableCell align="middle" className={classes.committeetable}>
                Date of Birth
              </TableCell>
              <TableCell align="middle" className={classes.committeetable}>
                Phone number
              </TableCell>
              <TableCell align="middle" className={classes.committeetable}>
                Email Id
              </TableCell>
              <TableCell
                align="middle"
                sx={{ fontFamily: "ProximaBold" }}
                className={classes.committeetable}
              >
                Status
              </TableCell>
              <TableCell className={classes.committeetable}>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customdata.map((row) => (
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
                  {row.member === true ? (
                    <span className={classes.acknowledged}>Acknowledged</span>
                  ) : (
                    <span>Yet to be approved</span>
                  )}
                </TableCell>
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
                  <Acknowledge row={row} token={token} />
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
        style={{ position: "absolute", transform: "Translate(5vw,-0.7vw)" }}
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
  );
}

export default PresidentView;
