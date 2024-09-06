import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
import useCustomFetch from "../Hooks/useCustomFetch";
import AcknowledgeDonation from "./AcknowledgeDonation";

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

function ViewDonations() {
  const location = useLocation();
  const token = `${location.state.token}`;
  // eslint-disable-next-line no-unused-vars
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/donations/getAllDonation`,
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
  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <TableContainer
        sx={{ width: "95%", margin: "30px auto" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ textAlign: "center" }}>
              <TableCell align="middle" className={classes.committeetable}>
                Full Name
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
              <TableCell align="middle" className={classes.committeetable}>
                Amount Paid
              </TableCell>
              <TableCell align="middle" className={classes.committeetable}>
                Date of Donation
              </TableCell>
              {/* <TableCell
                align="middle"
                sx={{ fontFamily: "ProximaBold" }}
                className={classes.committeetable}
              >
                Status
              </TableCell> */}
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
                <TableCell align="middle">{row.dob}</TableCell>
                <TableCell align="middle">{row.phoneNumber}</TableCell>
                <TableCell align="middle">{row.emailId}</TableCell>
                <TableCell align="middle">{row.amountPaid}</TableCell>
                <TableCell align="middle">{row.transactionDate}</TableCell>
                {/* <TableCell align="middle">
                  {row.status === "acknowledged" && (
                    <span className={classes.acknowledged}>Acknowledged</span>
                  )}
                </TableCell> */}
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
                  <AcknowledgeDonation row={row} token={token} />
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

export default ViewDonations;
