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

export const Topic = () => {
  const [topic, setTopic] = useState([]);
  const [subject, setSubject] = useState([]);
  const [tName, setTName] = useState("");
  const [sName, setSName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [loading, setLoading] = useState(false);
  const [insertTopic, setInsertTopic] = React.useState(false);

  useEffect(() => {
    console.log("first load");
    getTopic();
    getSubject();
  }, []);

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
  const getTopic = async () => {
    setLoading(true);
    try {
      await axios.get(`http://localhost:8080/api/topic`).then((res) => {
        console.log("topic", res.data);
        setTopic(res.data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const handleupdate = async () => {
    const data = {
      subject_name: sName,
      topic_name: tName,
    };
    // console.log("dataaaaaaaaaaaaaa", data);

    try {
      await axios
        .put(`http://localhost:8080/api/topic/${editId}`, data)
        .then((res) => {
          if (res.status === 200) {
            setInsertTopic(false);
            setSName("");
            setTName("");
            setIsEdit(false);
            setEditId("");
            getTopic();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetSingleTopic = async (id) => {
    try {
      await axios.get(`http://localhost:8080/api/topic/${id}`).then((res) => {
        if (res.status === 200) {
          setSName(res.data.subject_name);
          setTName(res.data.topic_name);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handledelete = async (id) => {
    try {
      await axios
        .delete(`http://localhost:8080/api/topic/${id}`)
        .then((res) => {
          if (res.status === 200) {
            getTopic();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    const data = {
      subject_name: sName,
      topic_name: tName,
    };
    // console.log("dataaaaaaaaaaaaaa", data);

    try {
      await axios.post(`http://localhost:8080/api/topic`, data).then((res) => {
        if (res.status === 200) {
          setInsertTopic(false);
          setSName("");
          setTName("");
          getTopic();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleClickOpen = () => {
    setInsertTopic(true);
  };

  const handleClose = () => {
    setInsertTopic(false);
  };
  return (
    <div>
      <h1 style={{ justifyContent: "center" }}>Topics</h1>
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
            Add New Topics
          </Button>
          <Dialog open={insertTopic} onClose={handleClose}>
            <DialogTitle> {isEdit ? "Update" : "Add New"} Topic</DialogTitle>
            <DialogContent>
              Please select Subject
              <Select
                fullWidth
                id="gender"
                label="Gender"
                value={sName}
                onChange={(e) => setSName(e.target.value)}
              >
                <MenuItem value={""}>Please Select Subject Name</MenuItem>
                {subject?.map((obj, i) => (
                  <MenuItem key={`subject${i}`} value={obj?._id}>
                    {obj?.sub_name}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                autoFocus
                label="Topic Name"
                fullWidth
                variant="standard"
                id="margin-normal"
                margin="normal"
                value={tName}
                onChange={(e) => setTName(e.target.value)}
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
        <h3 style={{ marginTop: 30 }}>List Of Topics</h3>
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        )}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">SubjecName</TableCell>
              <TableCell align="right">TopicName</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          {topic.map((obj, i) => (
            <TableBody>
              <TableRow>
                <TableCell align="right">{obj._id}</TableCell>
                <TableCell align="right">{obj.subject_name}</TableCell>
                <TableCell align="right">{obj.topic_name}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => {
                      handleClickOpen(true);
                      handleGetSingleTopic(obj._id);
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
export default Topic;
