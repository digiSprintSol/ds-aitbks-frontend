// import React from "react";
// import useCustomFetch from "../Hooks/useCustomFetch";

// function Awards() {
//   const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
//   const { REACT_APP_FAKE_API } = process.env;
//   const { data, loading, error } = useCustomFetch({
//     url: `${REACT_APP_FAKE_API}/award-urls`,
//     method: "GET",
//     headers: {
//       Token: token,
//     },
//   });

//   if (error) return <h1>No data found...</h1>;
//   if (loading) return <h1>loading...</h1>;

//   return (
//     <div>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "auto auto auto",
//           gap: "30px 0px",
//           justifyContent: "space-around",
//           marginTop: "30px",
//         }}
//       >
//         {data.map((item) => (
//           <img
//             src={item.awardImageURL}
//             alt="galleryimage"
//             height="250vw"
//             width="380vw"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Awards;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import LoadingComponent from "../components/Loading/loadingComponent";
import useCustomFetch from "../Hooks/useCustomFetch";

function Awards() {
  const navigate = useNavigate();
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;
  const [info, setInfo] = useState(null);
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getCulturalEvents`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  useEffect(() => {
    if (data) {
      setInfo(data.filter((row) => row.eventType === "awards"));
    }
  }, [data]);
  if (loading) return <LoadingComponent />;
  if (error) return <h1>error...</h1>;
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
        Awards
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
            {info &&
              info.map((row, index) =>
                row.eventType === "awards" ? (
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
                        sx={{
                          backgroundColor: "#1B7DA6",
                          height: "2vw",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "#1B7DA6",
                            opacity: 0.9,
                          },
                        }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ) : (
                  ""
                )
              )}
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

export default Awards;
