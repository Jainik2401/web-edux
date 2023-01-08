import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import { Images } from "../image";

export const Header = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isLogin = sessionStorage.getItem("user");

  return (
    <div>
      <div>
        <Box sx={{ width: "100%", float: "right" }} bgcolor="#354dbf">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <img
              alt="logo"
              src={Images.logo1}
              size="tiny"
              style={{ width: "100px", float: "left" }}
            ></img>

            <Tab
              id="home"
              label="Home"
              href="/home"
              centered
              style={{ color: "white" }}
            />
            <Tab
              id="about"
              label="About Us"
              href="/aboutus"
              centered
              style={{ color: "white" }}
            />
            <Tab
              id="course"
              label="Courses"
              href="/courses"
              centered
              style={{ color: "white" }}
            />
            <Tab
              id="contact"
              label="Contact Us"
              href="/contactus"
              centered
              style={{ color: "white" }}
            />
            <Tab
              id="faq"
              label="Faq"
              href="/faq"
              centered
              style={{ color: "white" }}
            />
            <Tab
              id="quiz"
              label="quiz"
              href="/quiz"
              centered
              style={{ color: "white" }}
            />
            {isLogin !== null ? (
              <Tab
                id="signout"
                label="sign out"
                centered
                onClick={() => {
                  sessionStorage.removeItem("user");
                  window.location.href = "/login";
                }}
              />
            ) : (
              <Tab
                id="signup"
                label="signup"
                href="/signup"
                centered
                style={{ color: "white" }}
              />
            )}
          </Tabs>
        </Box>
      </div>
    </div>
  );
};
export default Header;
