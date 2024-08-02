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
import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import useCustomFetch from "../Hooks/useCustomFetch";
import CommitteePopup from "./CommitteePopup";

const useStyles = makeStyles({
  committeetable: {
    fontSize: "1vw",
  },
});

function CommitteeView() {
  // function createData(name, calories, fat, carbs, protein, okay) {
  //   return { name, calories, fat, carbs, protein, okay};
  // }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0,3),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3,3),
  //   createData('Eclair', 262, 16.0, 24, 6.0,3),
  //   createData('Cupcake', 305, 3.7, 67, 4.3,3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9,3),
  // ];
  const { data, loading, error } = useCustomFetch(
    "https://jsonplaceholder.typicode.com/users",
    "get"
  );

  const [currentpage, setCurrentpage] = useState(1);
  const [customdata, setCustomdata] = useState([]);
  const range = [];
  const classes = useStyles();
  // if (data) {
  //   setCustomdata(
  //     data.filter(
  //       // eslint-disable-next-line array-callback-return
  //       (row) => row.id >= range[0] && row.id <= range[1]
  //     )
  //   )
  // }

  const rowsperpage = 3;

  const handleChange = (event, value) => {
    setCurrentpage(value);
  };

  // const changeHandler = (e) => {
  //   setRowsperpage(e.target.value)
  // }
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
                  <Button
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
                  </Button>
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
      <CommitteePopup />
    </div>
  );
}

export default CommitteeView;
