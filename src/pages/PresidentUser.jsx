import React, { useState, useEffect } from "react";
// import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import useCustomFetch from "../Hooks/useCustomFetch";
import PresidentModal from "../components/Modal/presidentModal";

const useStyles = makeStyles({
  committeetable: {
    fontSize: "1vw",
  },
});

function PresidentUser() {
  const { data, loading, error } = useCustomFetch(
    "https://jsonplaceholder.typicode.com/users",
    "get"
  );

  const [currentpage, setCurrentpage] = useState(1);
  const [customdata, setCustomdata] = useState([]);
  const range = [];
  const classes = useStyles();
  const rowsperpage = 5;

  const handleChange = (event, value) => {
    setCurrentpage(value);
  };

  useEffect(() => {
    range.push((currentpage - 1) * rowsperpage + 1);
    range.push(currentpage * rowsperpage);

    if (data) {
      const partdata = data.filter(
        // eslint-disable-next-line array-callback-return
        (row) => row.id >= range[0] && row.id <= range[1]
      );
      setCustomdata(partdata);
    }
  }, [currentpage]);

  if (error) return <h1>Error..</h1>;
  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <TableContainer sx={{ width: "95%", margin: "auto" }} component={Paper}>
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
              <TableCell align="middle">Date of Birth</TableCell>
              <TableCell align="middle">Phone number</TableCell>
              <TableCell align="middle">Email Id</TableCell>
              <TableCell align="middle">Status of Committee</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customdata.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="middle">{row.username}</TableCell>
                <TableCell align="middle">{row.address.zipcode}</TableCell>
                <TableCell align="middle">{row.phone}</TableCell>
                <TableCell align="middle">{row.email}</TableCell>
                <TableCell align="middle">
                  {/* <Button
                    variant="contained"
                    disableElevation
                   
                  >
                    
          
                  </Button> */}
                  <PresidentModal />
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

export default PresidentUser;
