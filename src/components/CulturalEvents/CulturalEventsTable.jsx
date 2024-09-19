import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
// import Pagination from "@mui/material/Pagination";

function CulturalEventsTable() {
  const location = useLocation();
  const navigate = useNavigate();

  // const [currentpage, setCurrentpage] = useState(1);
  // const [customdata, setCustomdata] = useState([]);

  // const rowsperpage = 5;

  // const handleChange = (event, value) => {
  //   setCurrentpage(value);
  // };

  // useEffect(() => {
  //   if (data) {
  //     const partdata = [];
  //     const exp =
  //       // rowsperpage > data.content.length ? data.content.length : rowsperpage;
  //       (currentpage - 1) * rowsperpage + rowsperpage > data.length
  //         ? (currentpage - 1) * rowsperpage +
  //           (rowsperpage -
  //             ((currentpage - 1) * rowsperpage + rowsperpage - data.length))
  //         : (currentpage - 1) * rowsperpage + rowsperpage;
  //     // eslint-disable-next-line no-plusplus
  //     for (let i = (currentpage - 1) * rowsperpage + 1; i <= exp; i++) {
  //       partdata.push(data[i - 1]);
  //     }
  //     setCustomdata(partdata);
  //   }
  // }, [currentpage, data]);
  console.log(location, "00000000000000000000000");

  return (
    <div>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "ProximaBold",
          textAlign: "center",
          marginTop: "25px",
        }}
      >
        Cultural Events
      </Typography>
      <TableContainer
        sx={{ width: "90%", margin: "30px auto" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ textAlign: "center", fontFamily: "ProximaBold" }}>
              <TableCell align="middle">S. No.</TableCell>
              <TableCell align="middle">Date </TableCell>
              <TableCell align="middle">Event Description</TableCell>
              <TableCell align="middle">Location</TableCell>
              <TableCell align="middle">Sponsor</TableCell>
              <TableCell align="middle">Gallery</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {location?.state?.data?.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="middle">{row.eventDate}</TableCell>
                <TableCell align="middle">{row.title}</TableCell>
                <TableCell align="middle">{row.place}</TableCell>
                <TableCell align="middle">{row.sponsoredBy}</TableCell>
                <TableCell align="middle">
                  <Button
                    onClick={() =>
                      navigate("/cutural-events-images", {
                        state: { row },
                      })
                    }
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <br />
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
      <hr /> */}
    </div>
  );
}

export default CulturalEventsTable;
