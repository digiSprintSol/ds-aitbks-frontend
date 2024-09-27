import React, { useEffect, useState } from "react";
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
import Pagination from "@mui/material/Pagination";
import useCustomFetch from "../Hooks/useCustomFetch";
import MembersPopup from "./MembersPopup";
import LoadingComponent from "../components/Loading/loadingComponent";

function LifeMembers() {
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/user/getAllUsers`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  const [lifeMembers, setLifemembers] = useState(null);
  useEffect(() => {
    if (data) {
      const exp = data.filter(
        (user) =>
          user.member &&
          user.presidentChoosenMembershipForApplicant === "lifemember"
      );
      setLifemembers(exp);
    }
  }, [data]);

  const [currentpage, setCurrentpage] = useState(1);
  const [customdata, setCustomdata] = useState([]);
  const rowsperpage = 5;

  const handleChange = (event, value) => {
    setCurrentpage(value);
  };

  useEffect(() => {
    if (lifeMembers) {
      const partdata = [];
      const exp =
        (currentpage - 1) * rowsperpage + rowsperpage > lifeMembers.length
          ? (currentpage - 1) * rowsperpage +
            (rowsperpage -
              ((currentpage - 1) * rowsperpage +
                rowsperpage -
                lifeMembers.length))
          : (currentpage - 1) * rowsperpage + rowsperpage;
      // eslint-disable-next-line no-plusplus
      for (let i = (currentpage - 1) * rowsperpage + 1; i <= exp; i++) {
        partdata.push(lifeMembers[i - 1]);
      }
      setCustomdata(partdata);
    }
  }, [currentpage, lifeMembers]);

  if (error) return <h1>Error..</h1>;
  if (loading) {
    return <LoadingComponent />;
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
        Life Members
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
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Surname</TableCell>
              <TableCell align="middle">Email ID</TableCell>
              <TableCell align="middle">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customdata &&
              customdata.map((row) => (
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
                  <TableCell align="center">{row.firstName}</TableCell>
                  <TableCell align="center">{row.lastName}</TableCell>
                  <TableCell align="middle">{row.emailAddress}</TableCell>
                  <TableCell align="middle">
                    <MembersPopup row={row} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <hr />
      <br />
      {lifeMembers && (
        <>
          <span
            style={{
              position: "absolute",
              transform: "Translate(5vw,-0.7vw)",
              fontFamily: "ProximaRegular",
            }}
          >
            showing {(currentpage - 1) * rowsperpage + 1} to{" "}
            {currentpage * rowsperpage > lifeMembers.length ? (
              <span>{lifeMembers.length}</span>
            ) : (
              <span>{currentpage * rowsperpage}</span>
            )}{" "}
            of {lifeMembers.length} entries
          </span>

          <Pagination
            count={Math.ceil(lifeMembers.length / rowsperpage)}
            sx={{ position: "absolute", transform: "Translate(65vw,-1.2vw)" }}
            page={currentpage}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
          />
        </>
      )}

      <br />
      <hr />
    </div>
  );
}

export default LifeMembers;
