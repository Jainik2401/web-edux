import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Divider, Avatar } from "@mui/material";

import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ForumIcon from "@mui/icons-material/Forum";
export const Dashboard = (props) => {
  const { task, goal, current } = props;
  return (
    <div>
      <h1 style={{ justifyContent: "center" }}>Dashboard</h1>
      <Divider />
      <Grid container spacing={4} style={{ marginTop: 20 }}>
        <Grid item xs={12} sm={12} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Grid
                container
                spacing={3}
                sx={{ justifyContent: "space-between" }}
              >
                <Grid item>
                  <Typography>Total Feedback</Typography>
                  <br></br>
                  <Typography color="textPrimary" variant="h4">
                    30%
                  </Typography>

                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="overline"
                    sx={{ fontSize: "1rem" }}
                  >
                    {task}
                  </Typography>
                  <Typography color="textPrimary" variant="h4">
                    {goal > 0
                      ? `${Math.round(((current * 100) / goal) * 100) / 100}%`
                      : ""}
                  </Typography>
                  <Typography color="textSecondary" variant="h6">
                    {goal > 0 ? Math.round(goal * 100) / 100 : ""}
                  </Typography>
                  <Typography color="textSecondary" variant="h6"></Typography>
                </Grid>
                <Grid item>
                  <Avatar
                    sx={{
                      backgroundColor: "#0096FF",
                      height: 56,
                      width: 56,
                    }}
                  >
                    <ForumIcon />
                  </Avatar>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Grid
                container
                spacing={3}
                sx={{ justifyContent: "space-between" }}
              >
                <Grid item>
                  <Typography>Total Courses</Typography>
                  <br></br>
                  <Typography color="textPrimary" variant="h4">
                    20+
                  </Typography>
                </Grid>
                <Grid item>
                  <Avatar
                    sx={{
                      backgroundColor: "error.main",
                      height: 56,
                      width: 56,
                    }}
                  >
                    <MenuBookIcon />
                  </Avatar>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Grid
                container
                spacing={3}
                sx={{ justifyContent: "space-between" }}
              >
                <Grid item>
                  <Typography>Total Users</Typography>
                  <br></br>
                  <Typography color="textPrimary" variant="h4">
                    25+
                  </Typography>
                </Grid>
                <Grid item>
                  <Avatar
                    sx={{
                      backgroundColor: "success.main",
                      height: 56,
                      width: 56,
                    }}
                  >
                    <GroupOutlinedIcon />
                  </Avatar>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Grid
                container
                spacing={3}
                sx={{ justifyContent: "space-between" }}
              >
                <Grid item>
                  <Typography>Quiz</Typography>
                  <br></br>
                  <Typography color="textPrimary" variant="h4">
                    15+
                  </Typography>
                </Grid>
                <Grid item>
                  <Avatar
                    sx={{
                      backgroundColor: "warning.main",
                      height: 56,
                      width: 56,
                    }}
                  >
                    <QuizRoundedIcon />
                  </Avatar>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
