import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Images } from "../image";
import MenuItem from "@mui/material/MenuItem";
import { CircularProgress } from "@mui/material";

const theme = createTheme();

export const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [insertUser, setInsertUser] = React.useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [contactno, setContactno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("first load");

    handleAdd();
  }, []);

  const handleAdd = async () => {
    const data = {
      firstname: firstname,
      lastname: lastname,
      username: `${firstname}${lastname}`,
      gender: gender,
      contactno: contactno,
      email: email,
      password: password,
    };
    // console.log("dataaaaaaaaaaaaaa", data);
    setLoading(true);
    try {
      await axios.post(`http://localhost:8080/api/user`, data).then((res) => {
        if (res.status === 200) {
          setInsertUser(false);
          setFirstname("");
          setLastname("");
          setGender("");
          setContactno("");
          setEmail("");
          setPassword("");
        }
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
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
                <Typography component="h1" variant="h5">
                  Sign Up
                </Typography>
                {loading && (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                  </div>
                )}
                <Box
                  component="form"
                  onSubmit={insertUser}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="First Name"
                        label="First Name"
                        autoComplete="First Name"
                        autoFocus
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Last Name"
                        label="Last Name"
                        autoComplete="Last Name"
                        autoFocus
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <br></br>
                  Gender
                  <Select
                    fullWidth
                    margin="normal"
                    required
                    autoFocus
                    id="gender"
                    label="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"other"}>other</MenuItem>
                  </Select>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Mobile No"
                    label="Mobile No"
                    type="number"
                    autoFocus
                    value={contactno}
                    onChange={(e) => setContactno(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleAdd}
                  >
                    Sign Up
                  </Button>
                  <Grid container>
                    <Grid item>
                      <Link href="/login" variant="body2">
                        {"Already have an Account ? Sign in"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
};
export default SignUp;
