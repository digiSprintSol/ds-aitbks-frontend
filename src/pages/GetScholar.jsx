import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Circles } from "react-loader-spinner";
import useCustomFetch from "../Hooks/useCustomFetch";

function GetScholar() {
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getAllScholarShips`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  if (error) return <h1>Error..</h1>;
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

  return (
    <div>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "ProximaBold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3vw",
        }}
      >
        ScholarShips
      </Typography>
      <TableContainer
        sx={{ fontFamily: "ProximaBold", width: "80%", margin: "30px auto" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 850 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ textAlign: "center", fontFamily: "ProximaBold" }}>
              <TableCell align="center">Photo</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Surname</TableCell>
              <TableCell align="center">scholarShipName</TableCell>
              <TableCell align="center">sponser</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <img
                    src={row.profilePic}
                    alt="profilepic"
                    height="100"
                    width="90"
                  />
                </TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.surName}</TableCell>
                <TableCell align="center">{row.scholarShipName}</TableCell>
                <TableCell align="center">{row.sponser}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default GetScholar;
