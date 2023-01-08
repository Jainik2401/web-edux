import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Table,
  TableBody,
  TableContainer,
  CircularProgress,
} from "@mui/material";

export const Slider = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [insertSlider, setInsertSlider] = React.useState(false);

  useEffect(() => {
    console.log("first load");
    getJokes();
  }, []);

  const getJokes = async () => {
    setLoading(true);
    await axios
      .get(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      )
      .then((res) => {
        setJokes(res.data.jokes);
        setLoading(false);
      });
  };

  const handleClickOpen = () => {
    setInsertSlider(true);
  };

  const handleClose = () => {
    setInsertSlider(false);
  };

  return (
    <div>
      <h1 style={{ justifyContent: "center" }}>Slider</h1>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 40,
          marginTop: 20,
        }}
      >
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={handleClickOpen}>
            Add New Slider
          </Button>
          <Dialog open={insertSlider} onClose={handleClose}>
            <DialogTitle> Add New Slider</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Add</Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </div>
      <TableContainer>
        <h3 style={{ marginTop: 30 }}>List Of Slider</h3>
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        )}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">TYPE</TableCell>
              <TableCell align="right">LANGUAGE</TableCell>
              <TableCell align="right">SAFE</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          {jokes.map((obj, i) => (
            <TableBody>
              <TableRow>
                <TableCell align="right">{obj.id}</TableCell>
                <TableCell align="right">{obj.type}</TableCell>
                <TableCell align="right">{obj.lang}</TableCell>
                <TableCell align="right">{obj.id}</TableCell>
                <TableCell align="right">
                  <EditIcon />
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
};
export default Slider;
