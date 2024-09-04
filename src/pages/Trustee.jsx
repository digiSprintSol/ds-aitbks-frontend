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

function Trustee() {
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
  if (loading) return <h1>Loading...</h1>;

  const trusteeMembers = data.filter(
    (user) =>
      user.member && user.presidentChoosenMembershipForApplicant === "trustee"
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
        Trustee Members
      </Typography>
      <TableContainer
        sx={{ fontFamily: "ProximaBold", width: "95%", margin: "30px auto" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 850 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ textAlign: "center", fontFamily: "ProximaBold" }}>
              <TableCell align="center">Photo</TableCell>
              <TableCell align="center">Membership ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email ID</TableCell>
              <TableCell align="center">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trusteeMembers.map((row) => (
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
                <TableCell align="center">{row.membershipId}</TableCell>
                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                <TableCell align="center">{row.emailAddress}</TableCell>
                <TableCell align="center">{row.district}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Trustee;
