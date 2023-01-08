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

export const Faq = () => {
  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(false);
  const [insertFaq, setInsertFaq] = React.useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  useEffect(() => {
    console.log("first load");
    getFaqs();
  }, []);

  const getFaqs = async () => {
    setLoading(true);
    try {
      await axios.get(`http://localhost:8080/api/faq`).then((res) => {
        console.log("Faq", res.data);
        setFaq(res.data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // console.log('env ', process.env.BASE_URL);

  const handleClickOpen = () => {
    setInsertFaq(true);
  };

  const handleClose = () => {
    setInsertFaq(false);
  };
  const handledelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/faq/${id}`).then((res) => {
        if (res.status === 200) {
          getFaqs();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleupdate = async () => {
    const data = {
      question: question,
      answer: answer,
    };
    // console.log("dataaaaaaaaaaaaaa", data);

    try {
      await axios
        .put(`http://localhost:8080/api/faq/${editId}`, data)
        .then((res) => {
          if (res.status === 200) {
            setInsertFaq(false);
            setQuestion("");
            setAnswer("");
            setIsEdit(false);
            setEditId("");
            getFaqs();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetSingleFaq = async (id) => {
    try {
      await axios.get(`http://localhost:8080/api/faq/${id}`).then((res) => {
        if (res.status === 200) {
          setQuestion(res.data.question);
          setAnswer(res.data.answer);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    const data = {
      question: question,
      answer: answer,
    };
    // console.log("dataaaaaaaaaaaaaa", data);

    try {
      await axios.post(`http://localhost:8080/api/faq`, data).then((res) => {
        if (res.status === 200) {
          setInsertFaq(false);
          setQuestion("");
          setAnswer("");
          getFaqs();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 style={{ justifyContent: "center" }}>FAQ</h1>
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
            Add New FAQ
          </Button>
          <Dialog open={insertFaq} onClose={handleClose}>
            <DialogTitle> {isEdit ? "Update" : "Add New"} FAQ</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="f_ques"
                label="Enter The Question"
                type="text"
                fullWidth
                variant="standard"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="f_answ"
                label="Enter The Answer"
                type="text"
                fullWidth
                variant="standard"
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
        <h3 style={{ marginTop: 30 }}>List Of FAQ</h3>
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        )}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Question</TableCell>
              <TableCell align="right">Answer</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          {faq.map((obj) => (
            <TableBody>
              <TableRow>
                <TableCell align="right">{obj._id}</TableCell>
                <TableCell align="right">{obj.question}</TableCell>
                <TableCell align="right">{obj.answer}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => {
                      handleClickOpen(true);
                      handleGetSingleFaq(obj._id);
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
export default Faq;
