import { Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { Images } from "../image";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import axios from "axios";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const Faq = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      )}
      <Grid container spacing={3} justifyContent={"center"}>
        <Grid>
          <br></br>
          <Card sx={{ maxWidth: 545, marginLeft: 10 }}>
            <CardMedia
              component="img"
              height="500"
              image={Images.faq}
              alt="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Card sx={{ maxWidth: 800 }}>
            {faq.map((obj) => (
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>{obj.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{obj.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Card>
        </Grid>
      </Grid>
      <br></br>
    </div>
  );
};
export default Faq;
