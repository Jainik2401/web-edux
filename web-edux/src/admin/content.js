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

export const Content = () => {
  const [topic, setTopic] = useState([]);
  const [content, setContent] = useState([]);
  const [tName, setTName] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [loading, setLoading] = useState(false);
  const [insertContent, setInsertContent] = React.useState(false);

  useEffect(() => {
    console.log("first load");
    getTopic();
    getContent();
  }, []);

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
  const getContent = async () => {
    setLoading(true);
    try {
      await axios.get(`http://localhost:8080/api/content`).then((res) => {
        console.log("content", res.data);
        setContent(res.data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const handleupdate = async () => {
    const data = {
      topic_name: tName,
      question: question,
      answer: answer,
    };
    // console.log("dataaaaaaaaaaaaaa", data);

    try {
      await axios
        .put(`http://localhost:8080/api/content/${editId}`, data)
        .then((res) => {
          if (res.status === 200) {
            setInsertContent(false);
            setTName("");
            setQuestion("");
            setAnswer("");
            setIsEdit(false);
            setEditId("");
            getContent();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetSingleContent = async (id) => {
    try {
      await axios.get(`http://localhost:8080/api/content/${id}`).then((res) => {
        if (res.status === 200) {
          setTName(res.data.topic_name);
          setQuestion(res.data.question);
          setAnswer(res.data.answer);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handledelete = async (id) => {
    try {
      await axios
        .delete(`http://localhost:8080/api/content/${id}`)
        .then((res) => {
          if (res.status === 200) {
            getContent();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    const data = {
      topic_name: tName,
      question: question,
      answer: answer,
    };
    // console.log("dataaaaaaaaaaaaaa", data);

    try {
      await axios
        .post(`http://localhost:8080/api/content`, data)
        .then((res) => {
          if (res.status === 200) {
            setInsertContent(false);
            setTName("");
            setQuestion("");
            setAnswer("");

            getContent();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleClickOpen = () => {
    setInsertContent(true);
  };

  const handleClose = () => {
    setInsertContent(false);
  };
  return (
    <div>
      <h1 style={{ justifyContent: "center" }}>Content</h1>
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
            Add New Content
          </Button>
          <Dialog open={insertContent} onClose={handleClose}>
            <DialogTitle>{isEdit ? "Update" : "Add New"} Content</DialogTitle>
            <DialogContent>
              Please select Topic
              <Select
                fullWidth
                id="gender"
                label="Gender"
                value={tName}
                onChange={(e) => setTName(e.target.value)}
              >
                <MenuItem value={""}>Please Select Topic Name</MenuItem>
                {topic?.map((obj, i) => (
                  <MenuItem key={`topic${i}`} value={obj?._id}>
                    {obj?.topic_name}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                autoFocus
                label="Question"
                fullWidth
                variant="standard"
                id="margin-normal"
                margin="normal"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <TextField
                autoFocus
                label="Answer"
                fullWidth
                variant="standard"
                id="margin-normal"
                margin="normal"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
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
              <TableCell align="left">TopicName</TableCell>
              <TableCell align="left">Question</TableCell>
              <TableCell align="left">Answer</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          {content.map((obj, i) => (
            <TableBody>
              <TableRow>
                <TableCell align="left">{obj._id}</TableCell>
                <TableCell align="left">{obj.topic_name}</TableCell>
                <TableCell align="left">{obj.question}</TableCell>
                <TableCell align="left">{obj.answer}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => {
                      handleClickOpen(true);
                      handleGetSingleContent(obj._id);
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
export default Content;
