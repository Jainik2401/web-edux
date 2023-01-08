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

export const Course = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [insertCourses, setinsertCourses] = React.useState(false);
  const [course_name, setcoursename] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  useEffect(() => {
    console.log("first load");
    getCourses();
  }, []);

  const getCourses = async () => {
    setLoading(true);
    try {
      await axios.get(`http://localhost:8080/api/course`).then((res) => {
        console.log("course", res.data);
        setCourse(res.data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // console.log('env ', process.env.BASE_URL);

  const handleClickOpen = () => {
    setinsertCourses(true);
  };

  const handleClose = () => {
    setinsertCourses(false);
  };
  const handledelete = async (id) => {
    try {
      await axios
        .delete(`http://localhost:8080/api/course/${id}`)
        .then((res) => {
          if (res.status === 200) {
            getCourses();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleupdate = async () => {
    const data = {
      course_name: course_name,
    };
    // console.log("dataaaaaaaaaaaaaa", data);

    try {
      await axios
        .put(`http://localhost:8080/api/course/${editId}`, data)
        .then((res) => {
          if (res.status === 200) {
            setinsertCourses(false);
            setcoursename("");
            setIsEdit(false);
            setEditId("");
            getCourses();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetSingleCourse = async (id) => {
    try {
      await axios.get(`http://localhost:8080/api/course/${id}`).then((res) => {
        if (res.status === 200) {
          setcoursename(res.data.course_name);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    const data = {
      course_name: course_name,
    };
    // console.log("dataaaaaaaaaaaaaa", data);

    try {
      await axios.post(`http://localhost:8080/api/course`, data).then((res) => {
        if (res.status === 200) {
          setinsertCourses(false);
          setcoursename("");

          getCourses();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 style={{ justifyContent: "center" }}>Course</h1>
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
            Add New Course
          </Button>
          <Dialog open={insertCourses} onClose={handleClose}>
            <DialogTitle> {isEdit ? "Update" : "Add New"} Course</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="course_name"
                label="Course Name"
                type="text"
                fullWidth
                variant="standard"
                value={course_name}
                onChange={(e) => setcoursename(e.target.value)}
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
        <h3 style={{ marginTop: 30 }}>List Of Course</h3>
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        )}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Course Name</TableCell>

              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          {course.map((obj) => (
            <TableBody>
              <TableRow>
                <TableCell align="left">{obj._id}</TableCell>
                <TableCell align="left">{obj.course_name}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => {
                      handleClickOpen(true);
                      handleGetSingleCourse(obj._id);
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
export default Course;
