import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import axios from "axios";
import Divider from "@mui/material/Divider";
import {
  Table,
  TableBody,
  TableContainer,
  CircularProgress,
} from "@mui/material";

export const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("first load");
    getFeedback();
    // document.title("Project | feedback");
  }, []);

  const getFeedback = async () => {
    setLoading(true);
    try {
      await axios.get(`http://localhost:8080/api/feedback`).then((res) => {
        console.log("feedback", res.data);
        setFeedback(res.data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 style={{ justifyContent: "center" }}>Feedback</h1>
      <Divider />
      {loading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      )}
      <TableContainer>
        <h3 style={{ marginTop: 30 }}>Feedbacks By User</h3>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">FirstName</TableCell>
              <TableCell align="right">LastName</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Feedback</TableCell>
            </TableRow>
          </TableHead>
          {feedback.map((obj) => (
            <TableBody>
              <TableRow>
                <TableCell align="right">{obj._id}</TableCell>
                <TableCell align="right">{obj.fname}</TableCell>
                <TableCell align="right">{obj.lname}</TableCell>
                <TableCell align="right">{obj.email}</TableCell>
                <TableCell align="right">{obj.contact}</TableCell>
                <TableCell align="right">{obj.message}</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
};
export default Feedback;
