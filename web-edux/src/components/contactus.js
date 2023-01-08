import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Images } from "../image";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { CircularProgress } from "@mui/material";

// import Paper from "@mui/material/Paper";

// import { styled } from "@mui/material/styles";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   color: theme.palette.text.secondary,
// }));

export const ContactUs = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [insertFeedback, setInsertFeedback] = React.useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contactno, setContactno] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log("first load");
    handleAdd();
  }, []);

  const handleAdd = async () => {
    const data = {
      fname: firstname,
      lname: lastname,
      email: email,
      contact: contactno,
      message: message,
    };
    // console.log("dataaaaaaaaaaaaaa", data);
    setLoading(true);
    try {
      await axios
        .post(`http://localhost:8080/api/feedback`, data)
        .then((res) => {
          if (res.status === 200) {
            setInsertFeedback(false);
            setFirstname("");
            setLastname("");
            setEmail("");
            setContactno("");
            setMessage("");
          }
        });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <Grid container spacing={3} justifyContent={"center"}>
        <Grid>
          <br></br>
          <Card
            style={{
              maxWidth: 850,
              padding: "20px 5px",
              margin: "0 auto",
              borderRadius: 50,
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5">
                Contact Us
              </Typography>
              {loading && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CircularProgress />
                </div>
              )}
              <Typography
                variant="body2"
                color="#ff0066"
                component="p"
                gutterBottom
              >
                Fill up the form and our team will get back to you within 24
                hours.
              </Typography>
              <form>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      placeholder="Enter first name"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      required
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      placeholder="Enter last name"
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      required
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      placeholder="Enter email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="number"
                      placeholder="Enter phone number"
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      required
                      value={contactno}
                      onChange={(e) => setContactno(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      multiline
                      rows={4}
                      placeholder="Type your message here"
                      variant="outlined"
                      fullWidth
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={handleAdd}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 545, borderRadius: 50 }}>
            <CardMedia
              component="img"
              height="500"
              image={Images.touch}
              alt="green iguana"
            />
          </Card>
        </Grid>
      </Grid>
      <br></br>
    </div>
  );
};
export default ContactUs;
