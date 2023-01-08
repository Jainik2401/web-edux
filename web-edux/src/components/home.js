import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./style.css";
import { Images } from "../image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  //  minHeight: '100vh'
}));

export const Home = () => {
  return (
    <div>
      <div></div>
      <Box className="box1">
        <Grid container spacing={2}>
          <Grid item xs={6} md={7}>
            <h1 className="homeh1">
              WE PROUDLY TEACHING ONLINE COURSES FREE OF COST.
            </h1>
            <div className="boxdiv1">
              <p>FREE COURSE WITH BRIGHT FUTURE</p>
              <br></br>
              <Button variant="contained" href="/courses">
                Get Started
              </Button>
            </div>
          </Grid>
          <Grid item xs={8} md={4}>
            <Item>
              <img alt="home1" src={Images.developweb}></img>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div className="Recommended">
        <h4>INCREASE YOUR SKILL</h4>
        <h2>Our Courses</h2>
      </div>

      <div className="box1">
        <Box sx={{}}>
          <div className="ReCourses">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 345, borderRadius: 50, margin: 4 }}>
                  <CardMedia
                    component="img"
                    size="50"
                    height="300"
                    image={Images.Html}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="center"
                    >
                      HTML
                    </Typography>
                    <div align="center">
                      The HyperText Markup Language or HTML is the standard
                      markup language for documents designed to be displayed in
                      a web browser. HTML is use for design.
                    </div>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="small" align="center" href="/courses">
                      Start learning
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 345, borderRadius: 50, margin: 4 }}>
                  <CardMedia
                    component="img"
                    size="50"
                    height="300"
                    image={Images.Css}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="center"
                    >
                      Css
                    </Typography>
                    <div align="center">
                      Cascading Style Sheets is a style sheet language used for
                      describing the presentation of a document written in a
                      markup language such as HTML or XML.
                    </div>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="small" href="/courses">
                      Start learning
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 345, borderRadius: 50, margin: 4 }}>
                  <CardMedia
                    component="img"
                    size="50"
                    height="300"
                    image={Images.C}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="center"
                    >
                      JavaScript
                    </Typography>
                    <div align="center">
                      JavaScript, often abbreviated as JS, is a programming
                      language that is one of the core technologies of the World
                      Wide Web, alongside HTML and CSS.
                    </div>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                      size="small"
                      href="/courses"
                      style={{ border: "strong" }}
                    >
                      Start learning
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 345, borderRadius: 50, margin: 4 }}>
                  <CardMedia
                    component="img"
                    size="50"
                    height="300"
                    image={Images.C2}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="center"
                    >
                      C++
                    </Typography>
                    <div align="center">
                      C++ is a high-level general-purpose programming language
                      created by Danish computer scientist Bjarne Stroustrup as
                      an extension of the C programming language".
                    </div>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="small" href="/courses">
                      Start learning
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Box>
        <div className="boxdiv2">
          <Button variant="contained" href="/courses" align="center">
            View All Languages
          </Button>
        </div>
      </div>
      <div>
        <div className="choose">
          <h2>Why Learn Here</h2>
          <p>
            Learn Strom Will Provide a Mostly Free Courses For All For His
            Bright Future.
          </p>
        </div>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <img alt="logo" src={Images.home12} width={430}></img>
              </Grid>
              <Grid item xs={8}>
                <div className="WhyUs">
                  <ul>
                    <li>
                      Our education platform prepares students for life, helping
                      them develop an informed curiosity and a lasting passion
                      for learning new programming languages.It can shape
                      students to learn, helping them discover new abilities and
                      a wider world.
                    </li>
                    <br></br>
                    <li>
                      Our students develop the techincal skills by going through
                      our latest courses and our only goal is that every student
                      need to understand the techincal concepts easily.
                    </li>
                    <br></br>
                    <li>
                      We are providing latest beginner courses specially for
                      students who wants to start there journey in programming.
                      By giving real world examples our students can adapt the
                      concepts easily And by implementing that concepts they
                      find easy to solve complex problems.{" "}
                    </li>
                    <br></br>
                    <li>
                      And , Yes !!! We are providing all the courses for Free 👨‍💻
                      , So what you are waiting for ? just grab the oppurnity
                      and acheive your goals{" "}
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div className="test">
        <div>
          <h2>Tutorial</h2>
        </div>

        <div>
          <center>
            <div className="ratio ratio-16x9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/N3AkSS5hXMA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </center>
        </div>
      </div>
      <div>
        <div className="upcome">
          <h2>UpComing Courses</h2>
        </div>
        <div className="ReCourses">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={Images.lua}
                  alt="Rubby"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Lua
                  </Typography>
                  <div>
                    <p>
                      {" "}
                      Lua is a lightweight, high-level, multi-paradigm
                      programming language designed primarily for embedded use
                      in applications. Lua is cross-platform, since the
                      interpreter of compiled bytecode is written in ANSI C.
                    </p>
                  </div>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button size="small">Coming Soon</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={Images.rubby}
                  alt="rubby"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Rubby
                  </Typography>
                  <div>
                    <p>
                      {" "}
                      Ruby is an interpreted, high-level, general-purpose
                      programming language which supports multiple programming
                      paradigms. It was designed with an emphasis on programming
                      productivity and simplicity.
                    </p>
                  </div>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button size="small">Coming Soon</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={Images.perl}
                  alt="perl"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Perl
                  </Typography>
                  <div>
                    <p>
                      {" "}
                      Perl is a family of two high-level, general-purpose,
                      interpreted, dynamic programming languages. "Perl" refers
                      to Perl 5, but from 2000 to 2019 it also referred to its
                      redesigned "sister language"
                    </p>
                    <br></br>
                  </div>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button size="small">Coming Soon</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  height="200"
                  display="inline"
                  image={Images.objectivec}
                  alt="python"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Objective-C
                  </Typography>
                  <div>
                    <p>
                      {" "}
                      Objective-C is a general-purpose, object-oriented
                      programming language that adds Smalltalk-style messaging
                      to the C programming language. Originally developed by
                      Brad Cox and Tom Love in the early 1980s.
                    </p>
                  </div>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button size="small">Coming Soon</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Home;
