import Header from './Header' ;
import Home from './Home';
import CardCarousel from './CardCarousel';
import CourseDetail from "./CourseDetail";
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import Mycourses from "./User/MyCourses";
import TeacherProfile from './Teacher/TeacherProfile';
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
import StudentProfile from './User/StudentProfile';
import Forum from './Forum';

export const UserContext = createContext();
export const studentToken = JSON.parse(localStorage.getItem("student"));
export const teacherToken = JSON.parse(localStorage.getItem("teacher"));

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);


  useEffect(() => {
    const studentToken = JSON.parse(localStorage.getItem("student"));
    const teacherToken =JSON.parse(localStorage.getItem("teacher"))

    if (studentToken || teacherToken) {
      dispatch({ type: "STUDENT", payload: studentToken });
      dispatch({ type:"TEACHER", payload:teacherToken});
      navigate("/");
    } else {
      navigate("/");
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
            {/* <Route path="/user-dashboard" element={<Dashboard />} /> */}
            <Route path="/student-profile" element={<StudentProfile studentToken={studentToken} />} />
            <Route path="/my-courses" element={<Mycourses teacherToken={teacherToken} />} />
            {/* <Route path="/teacher-dashboard" element={<TeacherDashboard />} /> */}
            <Route path="/teacher-profile" element={<TeacherProfile teacherToken={teacherToken}/>} />
            <Route path="/courses" element={<Courses studentToken={studentToken}/>} />
            <Route path="/my-users" element={<MyUsers />} />
            <Route path="/add-courses" element={<AddCourses />} />
            <Route path="/add-videos" element={<AddVideos />} />
            <Route
              path="/teacher-detail/:teacher_id"
              element={<TeacherDetail />}
            />
            <Route path="/course-detail/:course_id" element={<CourseDetail />} />
            <Route path="/discussion-forum" element={<Forum />} />
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
