import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Images } from "../image";
const data = { uName: "Admin", pass: "admin@123" };

const theme = createTheme();

export const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const onSubmit = () => {
    if (userName === data.uName && passWord === data.pass) {
      sessionStorage.setItem("isLogin", true);
      window.location.href = "/admin/dashboard";
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

                <Typography component="h1" variant="h5">
                  Admin Login
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
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

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => onSubmit()}
                  >
                    Sign In
                  </Button>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
