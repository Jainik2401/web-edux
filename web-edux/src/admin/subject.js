import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import axios from "axios";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Table,
  TableBody,
  TableContainer,
  CircularProgress,
  MenuItem,
  Select,
} from "@mui/material";

export const Subject = () => {
  const [course, setCourse] = useState([]);
  const [subject, setSubject] = useState([]);
  const [cName, setCName] = useState("");
  const [sName, setSName] = useState("");
  const [sType, setSType] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [loading, setLoading] = useState(false);
  const [insertSubject, setInsertSubject] = React.useState(false);

  useEffect(() => {
    console.log("first load");
    getSubject();
    getCourses();
  }, []);

  const getCourses = async () => {
    setLoading(true);
    try {
      await axios.get(`http://localhost:8080/api/course`).then((res) => {
        console.log("user", res.data);
        setCourse(res.data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const getSubject = async () => {
    setLoading(true);
    try {
      await axios.get(`http://localhost:8080/api/subject`).then((res) => {
        console.log("subject", res.data);
        setSubject(res.data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const handleupdate = async () => {
    const data = {
      course_name: cName,
      sub_name: sName,
      sub_type: sType,
    };
    // console.log("dataaaaaaaaaaaaaa", data);

    try {
      await axios
        .put(`http://localhost:8080/api/subject/${editId}`, data)
        .then((res) => {
          if (res.status === 200) {
            setInsertSubject(false);
            setCName("");
            setSName("");
            setSType("");
            setIsEdit(false);
            setEditId("");
            getSubject();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetSingleSubject = async (id) => {
    try {
      await axios.get(`http://localhost:8080/api/subject/${id}`).then((res) => {
        if (res.status === 200) {
          setCName(res.data.course_name);
          setSName(res.data.sub_name);
          setSType(res.data.sub_type);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handledelete = async (id) => {
    try {
      await axios
        .delete(`http://localhost:8080/api/subject/${id}`)
        .then((res) => {
          if (res.status === 200) {
            getSubject();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    const data = {
      course_name: cName,
      sub_name: sName,
      sub_type: sType,
    };
    // console.log("dataaaaaaaaaaaaaa", data);

    try {
      await axios
        .post(`http://localhost:8080/api/subject`, data)
        .then((res) => {
          if (res.status === 200) {
            setInsertSubject(false);
            setCName("");
            setSName("");
            setSType("");

            getSubject();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleClickOpen = () => {
    setInsertSubject(true);
  };

  const handleClose = () => {
    setInsertSubject(false);
  };
  return (
    <div>
      <h1 style={{ justifyContent: "center" }}>Subjects</h1>
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
            Add New Subject
          </Button>
          <Dialog open={insertSubject} onClose={handleClose}>
            <DialogTitle>{isEdit ? "Update" : "Add New"} Subject</DialogTitle>
            <DialogContent>
              Please select Course
              <Select
                fullWidth
                id="gender"
                label="Gender"
                value={cName}
                onChange={(e) => setCName(e.target.value)}
              >
                <MenuItem value={""}>Please Select Course Name</MenuItem>
                {course?.map((obj, i) => (
                  <MenuItem key={`course${i}`} value={obj?._id}>
                    {obj?.course_name}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                autoFocus
                label="Subject Name"
                fullWidth
                variant="standard"
                id="margin-normal"
                margin="normal"
                value={sName}
                onChange={(e) => setSName(e.target.value)}
              />
              Please Select Course Type
              <Select
                fullWidth
                id="stype"
                label="stype"
                value={sType}
                onChange={(e) => setSType(e.target.value)}
              >
                <MenuItem value={""}>Please Select Course Type</MenuItem>
                <MenuItem value={"Theory"}>Theory</MenuItem>
                <MenuItem value={"Pratical"}>Pratical</MenuItem>
              </Select>
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
        <h3 style={{ marginTop: 30 }}>List Of Subject</h3>
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        )}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Course Name</TableCell>
              <TableCell align="right">Subject Name</TableCell>
              <TableCell align="right">Subject Type</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          {subject.map((obj) => (
            <TableBody>
              <TableRow>
                <TableCell align="right">{obj._id}</TableCell>
                <TableCell align="right">{obj.course_name}</TableCell>
                <TableCell align="right">{obj.sub_name}</TableCell>
                <TableCell align="right">{obj.sub_type}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => {
                      handleClickOpen(true);
                      handleGetSingleSubject(obj._id);
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
export default Subject;
