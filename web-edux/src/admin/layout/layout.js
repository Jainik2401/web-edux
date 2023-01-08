import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import FeedbackIcon from "@mui/icons-material/Feedback";
// import QuizIcon from "@mui/icons-material/Quiz";
import PersonIcon from "@mui/icons-material/Person";
import SubjectIcon from "@mui/icons-material/Subject";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

import { Images } from "../../image";
import { Button } from "@mui/material";

const array1 = [
  { id: 1, name: "Dashboard", to: "/admin/dashboard", icon: <DashboardIcon /> },
  {
    id: 2,
    name: "Course",
    to: "/admin/Course",
    icon: <SubjectIcon />,
  },
  {
    id: 3,
    name: "Subject",
    to: "/admin/subject",
    icon: <SubjectIcon />,
  },
  {
    id: 4,
    name: "Topic",
    to: "/admin/topic",
    icon: <SubjectIcon />,
  },
  {
    id: 5,
    name: "Content",
    to: "/admin/content",
    icon: <SubjectIcon />,
  },

  {
    id: 6,
    name: "FAQ",
    to: "/admin/Faq",
    icon: <QuestionAnswerIcon />,
  },
  {
    id: 7,
    name: "Feedback",
    to: "/admin/Feedback",
    icon: <FeedbackIcon />,
  },
  {
    id: 8,
    name: "User",
    to: "/admin/User",
    icon: <PersonIcon />,
  },
  // {
  //   id: 9,
  //   name: "Quiz",
  //   to: "/admin/Quiz",
  //   icon: <QuizIcon />,
  // },
];

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <img
        alt="logo"
        src={Images.logo}
        size="tiny"
        style={{ width: "100px", float: "left" }}
      />
      <Divider />
      <List>
        {array1.map((text, index) => (
          <>
            <ListItem key={text} disablePadding>
              <NavLink
                to={text.to}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <ListItemButton>
                  <ListItemIcon>{text.icon}</ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );

  const handleLogout = () => {
    sessionStorage.removeItem("isLogin");
    window.location.href = "/admin/login";
  };

  const container =
    windows !== undefined ? () => windows().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
          <Button
            onClick={() => handleLogout()}
            // windows.location.href = "/";
            //   console.log(windows.location);
            // }}
            // onClick={() => {
            //   // sessionStorage.removeItem("isLogin");
            //   windows.location.href = "/admin/login";
            // }}
            style={{ marginLeft: "auto", color: "#fff" }}
          >
            <LogoutIcon />
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  windows: PropTypes.func,
};

export default ResponsiveDrawer;
