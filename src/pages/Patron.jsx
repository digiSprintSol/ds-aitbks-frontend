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
import useCustomFetch from "../Hooks/useCustomFetch";

function Patron() {
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/user/getAllUsers`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  if (error) return <h1>Error..</h1>;
  if (loading) return <h1>loading...</h1>;

  const patron = data.filter(
    (user) =>
      user.member && user.presidentChoosenMembershipForApplicant === "patron"
  );

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
        Patron
      </Typography>
      <TableContainer
        sx={{ fontFamily: "ProximaBold", width: "95%", margin: "30px auto" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 850 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ textAlign: "center", fontFamily: "ProximaBold" }}>
              <TableCell align="middle">Photo</TableCell>
              <TableCell align="middle">Membership ID</TableCell>
              <TableCell align="middle">Name</TableCell>
              <TableCell align="middle">Email ID</TableCell>
              <TableCell align="middle">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patron.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell align="middle">
                  <img
                    src={row.profilePic}
                    alt="profilepic"
                    height="100vw"
                    width="90vw"
                  />
                </TableCell>
                <TableCell align="middle">{row.membershipId}</TableCell>
                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                <TableCell align="middle">{row.emailAddress}</TableCell>
                <TableCell align="middle">{row.district}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Patron;
