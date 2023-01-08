import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";

import Login from "./admin/login";
import Dashboard from "./admin/index";
import Course from "./admin/course";
import Faqs from "./admin/faq";
import Feedback from "./admin/feedback";

import Content from "./admin/content";
import Subject from "./admin/subject";
import Topic from "./admin/topic";
import User from "./admin/user";
import Slider from "./admin/slider";
import AboutUs from "./components/aboutus";
import ContactUs from "./components/contactus";
import Home from "./components/home";
import Faq from "./components/faq";
import SignUp from "./components/signup";
import Courses from "./components/courses";
import ULogin from "./components/login";
import Header from "./layout/header";
import Footer from "./layout/footer";
import ASiderbar from "./admin/layout/layout";

import UQuiz from "./components/Quiz";
import Result from "./components/Result";
import EachQuiz from "./components/EachQuiz";
import ShowAnswers from "./components/ShowAnswers";
import "./App.css";
function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function AdminLayout() {
  return (
    <>
      <ASiderbar>
        <Outlet />
      </ASiderbar>
    </>
  );
}
function App() {
  const isLogin = sessionStorage.getItem("isLogin");
  console.log("jainik", isLogin);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/aboutus" exact element={<AboutUs />} />
          <Route path="/contactus" exact element={<ContactUs />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/courses" exact element={<Courses />} />
          <Route path="/quiz" element={<UQuiz></UQuiz>} />
          <Route path="/result" element={<Result></Result>} />
          <Route path="/quiz/eachQuiz" element={<EachQuiz></EachQuiz>} />
          <Route path="/showAnswers" element={<ShowAnswers></ShowAnswers>} />
        </Route>
        <Route>
          <Route path="/login" exact element={<ULogin />} />
          <Route path="/SignUp" exact element={<SignUp />} />
        </Route>

        <Route>
          <Route path="/admin/login" exact element={<Login />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="/admin/dashboard"
            exact
            element={isLogin ? <Dashboard /> : <Navigate to="/admin/login" />}
          />

          <Route
            path="/admin/Course"
            exact
            element={isLogin ? <Course /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/Content"
            exact
            element={isLogin ? <Content /> : <Navigate to="/admin/login" />}
          />

          <Route
            path="/admin/Subject"
            exact
            element={isLogin ? <Subject /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/Topic"
            exact
            element={isLogin ? <Topic /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/Faq"
            exact
            element={isLogin ? <Faqs /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/Slider"
            exact
            element={isLogin ? <Slider /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/Feedback"
            exact
            element={isLogin ? <Feedback /> : <Navigate to="/admin/login" />}
          />

          <Route
            path="/admin/User"
            exact
            element={isLogin ? <User /> : <Navigate to="/admin/login" />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
