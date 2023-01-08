import React from "react";
import "./style.css";
import { Images } from "../image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export const AboutUs = () => {
  return (
    <div>
      <div>
        <center>
          <h1>Who are we ?</h1>
        </center>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <img alt="logo" src={Images.Abt}></img>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h1>What is Learn Storm ?</h1>
              <br></br>
              <div className="WhyUs">
                <ul>
                  <li>
                    A Learn Storm education prepares students for life, helping
                    them develop an informed curiosity and a lasting passion for
                    learning new programming languages.
                  </li>
                  <br></br>
                  <li>
                    We are providing latest beginner courses specially for
                    students who wants to start there journey in programming. By
                    giving real world examples our students can adapt the
                    concepts easily And by implementing that concepts they find
                    easy to solve complex problems.
                  </li>
                  <br></br>
                  <li>
                    And , Yes !!! We are providing all the courses for Free , So
                    what you are waiting for ? just grab the oppurnity and
                    acheive your goals
                  </li>
                  <br></br>
                </ul>
              </div>
            </Item>
          </Grid>
        </Grid>
      </div>
      <br></br>

      {/* <div classe="abt">
      <img alt="logo" width={1000} src={Images.Abt}></img>
  </div> */}

      <div className="Recommended">
        <h2>
          Why learn Alone ? <br></br>We are here for you{" "}
        </h2>
      </div>

      <div className="ReCourses">
        <Grid container spacing={3} justifyContent={"center"}>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 445 }}>
              <CardMedia
                component="img"
                height="240"
                image={Images.study}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Prepare With Us
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 445 }}>
              <CardMedia
                component="img"
                height="240"
                image={Images.job}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Get Hired With Us
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 445 }}>
              <CardMedia
                component="img"
                height="240"
                image={Images.grow}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Grow With Us
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className="Recommended">
        <h2>Our Team </h2>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src={Images.sid} alt="sid"></img>
          </Item>
          <Item>
            <img src={Images.jk} alt=""></img>
          </Item>
          <Item>
            <img src={Images.s} alt=""></img>
          </Item>
          <Item>
            <img src={Images.divya} alt=""></img>
          </Item>
          <Item>
            <img src={Images.shiv} alt=""></img>
          </Item>
          <Item>
            <img src={Images.d} alt=""></img>
          </Item>
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUs;
