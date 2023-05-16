import Header from "./Header";
import Home from "./Home";
import CourseDetail from "./CourseDetail";
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import Mycourses from "./User/MyCourses";
import TeacherLogin from "./Teacher/TeacherLogin";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import Courses from "./Teacher/Courses";
import MyUsers from "./Teacher/MyUsers";
import AddCourses from "./Teacher/AddCourses";
import AddVideos from "./Teacher/AddVideos";
import TeacherDetail from "./TeacherDetails";
import AllCourses from "./AllCourses";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import React, { useContext, useReducer, createContext, useEffect } from "react";
import { reducer, initialState } from "../context/reducer";

export const UserContext = createContext();
export const studentToken = JSON.parse(localStorage.getItem("student"));
export const teacherToken = JSON.parse(localStorage.getItem("teacher"));

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);


  useEffect(() => {
    const studentToken = JSON.parse(localStorage.getItem("student"));

    if (studentToken) {
      dispatch({ type: "STUDENT", payload: studentToken });
      navigate("/");
    } else {
      navigate("/user-login");
    }
  }, []);

  return (
    <div>
      <Header studentToken={studentToken} teacherToken={teacherToken} />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/all-courses" element={<AllCourses />} />
        {studentToken || teacherToken ? (
          <>
            <Route path="/user-dashboard" element={<Dashboard />} />
            <Route path="/my-courses" element={<Mycourses />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/my-users" element={<MyUsers />} />
            <Route path="/add-courses" element={<AddCourses />} />
            <Route path="/add-videos" element={<AddVideos />} />
            <Route
              path="/teacher-detail/:teacher_id"
              element={<TeacherDetail />}
            />
            <Route path="/course-detail/:course_id" element={<CourseDetail />} />
          </>
        ) : (
          <>
            <Route path="/user-login" element={<Login />} />
            <Route path="/user-register" element={<Register />} />
            <Route path="/teacher-login" element={<TeacherLogin />} />
            <Route path="/teacher-register" element={<TeacherRegister />} />
          </>
        )}
      </Switch>
      <Footer />
    </div>
  );
};

function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {/* <Router> */}
        <Routing />
      {/* </Router> */}
    </UserContext.Provider>
  );
}

export default Main;
