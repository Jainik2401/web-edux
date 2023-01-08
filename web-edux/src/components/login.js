import React, { useEffect, useState } from "react";

import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Images } from "../image";
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const theme = createTheme();

export const ULogin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("first load");
    getUsers();
  }, []);
  const onSubmit = (event) => {
    event.preventDefault();
    if (users?.length > 0) {
      const oneUser = users?.filter(
        (item) => item?.username === userName && item?.password === passWord
      );
      console.log("one user", oneUser);
      if (oneUser?.length > 0) {
        sessionStorage.setItem("user", oneUser[0]);
        window.location.href = "/";
      }
    }
  };

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      await axios.get(`http://localhost:8080/api/user`).then((res) => {
        // setLoading(true);
        // if (userName === res.userName && passWord === res.passWord) {
        //   window.location.href = "/course";
        //   setLoading(false);
        // }
        console.log("usersss", res?.data);
        setUsers(res?.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <img src={Images.edu} style={{ width: "865px" }} alt=""></img>
        </Grid>

        <Grid item xs={6} md={8}>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#b3ecff",
                    width: "150px",
                    float: "left",
                    height: "150px",
                  }}
                >
                  <img
                    alt="logo"
                    src={Images.logo}
                    size="tiny"
                    style={{ width: "200px", float: "left" }}
                  ></img>
                </Avatar>

                <Grid>User LogIn</Grid>
                <Grid>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                    label="Username"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  ></TextField>
                </Grid>
                <Grid>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                    label="Password"
                    type={"password"}
                    value={passWord}
                    onChange={(e) => {
                      setPassWord(e.target.value);
                    }}
                  ></TextField>
                </Grid>
                <Grid>
                  <Button fullWidth onClick={(event) => onSubmit(event)}>
                    Login
                  </Button>
                </Grid>
                <Grid>
                  <Grid item>
                    <Link href="/login" variant="body2">
                      {"Already have an Account ? Sign in"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
};
export default ULogin;
