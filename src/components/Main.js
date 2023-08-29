import Header from "./Header";
import Home from "./Home";
import CardCarousel from "./CardCarousel";
import CourseDetail from "./CourseDetail";
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import Mycourses from "./User/MyCourses";
import AddReviews from "./AddReviews";
import TeacherProfile from "./Teacher/TeacherProfile";
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
import React, {
  useContext,
  useReducer,
  createContext,
  useEffect,
  useState,
} from "react";
import { reducer, initialState } from "../context/reducer";
import StudentProfile from "./User/StudentProfile";
// import Quiz from './Quiz/Quiz';
// import QuizQuestion from './Quiz/QuizQuestion';
import axios from "axios";
import QuizHome from "../components/Quiz/Pages/Home/Home";
import QuizQuestion from "../components/Quiz/Pages/Quiz/Quiz";
import QuizResult from "../components/Quiz/Pages/Result/Result";
import Forum from "./Forum";

export const UserContext = createContext();
export const studentToken = JSON.parse(localStorage.getItem("student"));
export const teacherToken = JSON.parse(localStorage.getItem("teacher"));

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const studentToken = JSON.parse(localStorage.getItem("student"));
    const teacherToken = JSON.parse(localStorage.getItem("teacher"));

    if (studentToken || teacherToken) {
      dispatch({ type: "STUDENT", payload: studentToken });
      dispatch({ type: "TEACHER", payload: teacherToken });
      navigate("/");
    } else {
      navigate("/");
    }
  }, []);

  //quiz
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <div>
      <Header studentToken={studentToken} teacherToken={teacherToken} />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route
          path="/quizHome"
          element={
            <QuizHome
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          }
        />
        <Route
          path="/quizQuestion"
          element={
            <QuizQuestion
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
        />
        <Route
          path="/quizResult"
          element={<QuizResult name={name} score={score} />}
        />
        <Route path="/discussion-forum" element={<Forum studentToken={studentToken} teacherToken={teacherToken} />} />
        
        {studentToken || teacherToken ? (
          <>
            {/* <Route path="/user-dashboard" element={<Dashboard />} /> */}
            <Route
              path="/student-profile"
              element={<StudentProfile studentToken={studentToken} />}
            />
            <Route
              path="/my-courses"
              element={<Mycourses teacherToken={teacherToken} />}
            />
            {/* <Route path="/teacher-dashboard" element={<TeacherDashboard />} /> */}
            <Route
              path="/teacher-profile"
              element={<TeacherProfile teacherToken={teacherToken} />}
            />
            <Route
              path="/courses"
              element={<Courses studentToken={studentToken} />}
            />
            <Route path="/my-users" element={<MyUsers />} />
            <Route path="/add-courses" element={<AddCourses />} />
            <Route path="/add-videos" element={<AddVideos />} />
            <Route
              path="/teacher-detail/:teacher_id"
              element={<TeacherDetail />}
            />
            <Route
              path="/course-detail/:course_id"
              element={<CourseDetail studentToken={studentToken} />}
            />

            {studentToken && (
              <Route
                path="/addReviews/:course_id"
                element={<AddReviews studentToken={studentToken} />}
              />
            )}
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
