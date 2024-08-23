import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  IconButton,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation, useNavigate } from "react-router-dom";
import useCustomFetch from "../Hooks/useCustomFetch";

function ViewAnnouncements() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = `${location.state.token}`;
  const { data, loading, error } = useCustomFetch({
    url: `${process.env.REACT_APP_FAKE_API}/getAllAnnouncements`,
    method: "GET",
    headers: {
      Token: `Bearer ${token}`,
    },
  });

  const handleDelete = (id) => {
    // Implement delete functionality, possibly using another API call
    console.log(`Delete announcement with ID: ${id}`);
  };

  const handleBack = () => {
    navigate("/president-view", { state: { token } });
  };

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error loading announcements.</Typography>;

  return (
    <div style={{ padding: "30px 40px" }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "ProximaBold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        View Announcements
      </Typography>
      <TableContainer component={Paper} sx={{ fontFamily: "ProximaRegular" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((announcement) => (
              <TableRow key={announcement.id}>
                <TableCell>{announcement.announcementTitle}</TableCell>
                <TableCell>{announcement.announcementDescription}</TableCell>
                <TableCell>
                  <IconButton
                    sx={{ color: "#199071" }}
                    onClick={() => handleDelete(announcement.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Button variant="contained" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained">Save</Button>
      </div>
    </div>
  );
}

export default ViewAnnouncements;
