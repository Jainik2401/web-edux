import React from "react";
import { Grid, List } from "@mui/material";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import BusinessIcon from "@mui/icons-material/Business";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import { Images } from "../image";
export const Footer = () => {
  return (
    <div>
      <Box
        className="footer1"
        sx={{ width: "100%", float: "right" }}
        bgcolor="#354dbf"
      >
        <Grid container>
          <Grid xs={2} color="#ffffff">
            <Stack direction="column" sx={{ padding: 5 }}>
              <img
                alt="logo"
                height="auto"
                width="auto"
                src={Images.logo1}
              ></img>
              <br></br>
              <div>
                Learn Strom is education website provide educational contant
                free fro everyone.
              </div>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <div>
              <Stack direction="column" sx={{ padding: 5 }}>
                <h1 style={{ color: "white" }}>Address</h1>
                <br></br>
                <table style={{ color: "white" }}>
                  <tr style={{ padding: 2 }}>
                    <td>
                      <BusinessIcon />
                    </td>
                    <td>Ahemdabad</td>
                  </tr>
                  <tr>
                    <td>
                      <AddIcCallIcon />
                    </td>
                    <td>9876543210</td>
                  </tr>
                  <tr>
                    <td>
                      <EmailIcon />
                    </td>
                    <td>support@learnstrom.com</td>
                  </tr>
                </table>
              </Stack>
            </div>
          </Grid>
          <Grid xs={4} color="#ffffff">
            <div>
              <Stack direction="column" sx={{ padding: 5 }}>
                <h1 style={{ color: "white" }}> Courses</h1>
                <List style={{ borderBottom: "0px" }}>
                  <li
                    style={{
                      padding: 5,
                      borderBottom: "0px",
                      paddingBottom: "0px",
                    }}
                  >
                    <Link href="#" style={{ color: "white" }}>
                      {"DATA STRUCTURE"}
                    </Link>
                  </li>
                  <li style={{ padding: 5 }}>
                    <Link href="#" style={{ color: "white" }}>
                      {"HTML"}
                    </Link>
                  </li>
                  <li style={{ padding: 5 }}>
                    <Link href="#" style={{ color: "white" }}>
                      {"CSS"}
                    </Link>
                  </li>
                  <li style={{ padding: 5 }}>
                    <Link href="#" style={{ color: "white" }}>
                      {"C++"}
                    </Link>
                  </li>
                  <li style={{ padding: 5 }}>
                    <Link href="#" style={{ color: "white" }}>
                      {"ReactJS"}
                    </Link>
                  </li>
                  <li style={{ padding: 5 }}>
                    <Link href="#" style={{ color: "white" }}>
                      {"NodeJS"}
                    </Link>
                  </li>
                </List>
              </Stack>
            </div>
          </Grid>
          <Grid xs={3} color="#ffffff">
            <Stack direction="column" sx={{ padding: 5 }}></Stack>
          </Grid>

          <Grid xs={5} color="#ffffff">
            <hr width="239%"></hr>
            <div>
              <Stack direction="row" sx={{ padding: 2 }}>
                <h4>
                  ©2022 Copyright Learn Storm. All Rights Reserved <br></br>{" "}
                  Developed by GLS Students
                </h4>
              </Stack>
            </div>
          </Grid>
          <Grid xs={5} color="#ffffff">
            <div>
              <Grid>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  alignItems="center"
                  spacing={2}
                  sx={{ padding: 3 }}
                >
                  <Stack direction="row" sx={{ padding: 2, marginLeft: 35 }}>
                    <h2 fontSize="midium">Follow Us : </h2>
                  </Stack>
                  <Link href="https://www.facebook.com/" color="#fff">
                    <FacebookIcon fontSize="large" />
                  </Link>
                  <Link href="https://www.instagram.com/" color="#fff">
                    <InstagramIcon fontSize="large" />
                  </Link>
                  <Link href="https://twitter.com/" color="#fff">
                    <TwitterIcon fontSize="large" />
                  </Link>
                  <Link href="https://www.linkedin.com/" color="#fff">
                    <LinkedInIcon fontSize="large" />
                  </Link>
                </Stack>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Footer;
