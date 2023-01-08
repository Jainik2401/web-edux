import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import { Images } from "../image";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MenuItem } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Courses = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState([]);
  const [subject, setSubject] = useState([]);
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    console.log("first load");

    getSubject();
    getTopic();
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

  const getContent = async (id) => {
    setLoading(true);
    try {
      await axios.get(`http://localhost:8080/api/content`).then((res) => {
        console.log("content", res.data);
        if (res?.data?.length > 0) {
          const filtered_content = res?.data?.filter(
            (item) => item?.topic_name === id
          );
          setContent(filtered_content);
        }
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  console.log("state", content);
  return (
    <Grid container spacing={2}>
      {loading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      )}
      <Grid item xs={4}>
        <Item>
          {subject.map((obj, i) => (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography id="styling">{obj.sub_name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {topic.map(
                  (item, i) =>
                    item.subject_name === obj._id && (
                      <MenuItem onClick={() => getContent(item?._id)}>
                        <Button>{item.topic_name}</Button>
                      </MenuItem>
                    )
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Item>
      </Grid>
      {content.map((cont, i) => (
        <Grid item xs={8}>
          <Item style={{ fontSize: "50px" }}>{cont.question}</Item>
          <Item style={{ fontSize: "25px", textAlign: "left" }}>
            {cont.answer}
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};
export default Courses;
