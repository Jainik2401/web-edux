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
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  Table,
  TableBody,
  TableContainer,
  CircularProgress,
} from "@mui/material";

export const User = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [insertUser, setInsertUser] = React.useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [contactno, setContactno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  useEffect(() => {
    console.log("first load");
    getUsers();
  }, []);

  const getUsers = async () => {
    setLoading(true);
    try {
      await axios.get(`http://localhost:8080/api/user`).then((res) => {
        console.log("user", res.data);
        setUser(res.data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // console.log('env ', process.env.BASE_URL);

  const handleClickOpen = () => {
    setInsertUser(true);
  };

  const handleClose = () => {
    setInsertUser(false);
  };
  const handledelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/user/${id}`).then((res) => {
        if (res.status === 200) {
          getUsers();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleupdate = async () => {
    const data = {
      firstname: firstname,
      lastname: lastname,
      username: `${firstname}${lastname}`,
      gender: gender,
      contactno: contactno,
      email: email,
      password: password,
    };
    // console.log("dataaaaaaaaaaaaaa", data);

    try {
      await axios
        .put(`http://localhost:8080/api/user/${editId}`, data)
        .then((res) => {
          if (res.status === 200) {
            setInsertUser(false);
            setFirstname("");
            setLastname("");
            setGender("");
            setContactno("");
            setEmail("");
            setPassword("");
            setIsEdit(false);
            setEditId("");
            getUsers();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetSingleUser = async (id) => {
    try {
      await axios.get(`http://localhost:8080/api/user/${id}`).then((res) => {
        if (res.status === 200) {
          setFirstname(res.data.firstname);
          setLastname(res.data.lastname);
          setGender(res.data.gender);
          setContactno(res.data.contactno);
          setEmail(res.data.email);
          setPassword(res.data.password);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    const data = {
      firstname: firstname,
      lastname: lastname,
      username: `${firstname}${lastname}`,
      gender: gender,
      contactno: contactno,
      email: email,
      password: password,
    };
    // console.log("dataaaaaaaaaaaaaa", data);

    try {
      await axios.post(`http://localhost:8080/api/user`, data).then((res) => {
        if (res.status === 200) {
          setInsertUser(false);
          setFirstname("");
          setLastname("");
          setGender("");
          setContactno("");
          setEmail("");
          setPassword("");
          getUsers();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 style={{ justifyContent: "center" }}>User</h1>
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
            Add New User
          </Button>
          <Dialog open={insertUser} onClose={handleClose}>
            <DialogTitle> {isEdit ? "Update" : "Add New"} User</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="fname"
                label="First Name"
                type="text"
                fullWidth
                variant="standard"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="lname"
                label="Last Name"
                type="text"
                fullWidth
                variant="standard"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Contact Number"
                type="number"
                fullWidth
                variant="standard"
                value={contactno}
                onChange={(e) => setContactno(e.target.value)}
              />
              Gender
              <Select
                fullWidth
                id="gender"
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"other"}>other</MenuItem>
              </Select>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={isEdit ? handleupdate : handleAdd}>
                {isEdit ? "Update" : "Add"}
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </div>
      <TableContainer>
        <h3 style={{ marginTop: 30 }}>List Of User</h3>
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        )}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">UserName</TableCell>
              <TableCell align="right">FirstName</TableCell>
              <TableCell align="right">LastName</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">ContactNo</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          {user.map((obj) => (
            <TableBody>
              <TableRow>
                <TableCell align="right">{obj._id}</TableCell>
                <TableCell align="right">{obj.username}</TableCell>
                <TableCell align="right">{obj.firstname}</TableCell>
                <TableCell align="right">{obj.lastname}</TableCell>
                <TableCell align="right">{obj.gender}</TableCell>
                <TableCell align="right">{obj.contactno}</TableCell>
                <TableCell align="right">{obj.email}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => {
                      handleClickOpen(true);
                      handleGetSingleUser(obj._id);
                      setIsEdit(true);
                      setEditId(obj._id);
                    }}
                  >
                    <EditIcon />
                  </Button>
                  <Button onClick={() => handledelete(obj._id)}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
};
export default User;
