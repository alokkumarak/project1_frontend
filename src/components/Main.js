import Header from './Header' ;
import Home from './Home';
import CourseDetail from "./CourseDetail";
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import Mycourses from './User/MyCourses';

import TeacherLogin from './Teacher/TeacherLogin';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from './Teacher/TeacherDashboard';
import Courses from './Teacher/Courses';
import MyUsers from './Teacher/MyUsers';
import AddCourses from './Teacher/AddCourses';


import Footer from './Footer';

import { Routes as Switch,Route } from 'react-router-dom';

function Main() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail/:course_id" element={<CourseDetail />}/>
          <Route path="/user-login" element={<Login/>}/>
          <Route path="/user-register" element={<Register/>}/>
          <Route path="/user-dashboard" element={<Dashboard/>}/>
          <Route path="/my-courses" element={<Mycourses/>}/>
          <Route path="/teacher-login" element={<TeacherLogin/>}/>
          <Route path="/teacher-register" element={<TeacherRegister/>}/>
          <Route path="/teacher-dashboard" element={<TeacherDashboard/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/my-users" element={<MyUsers/>}/>
          <Route path="/add-courses" element={<AddCourses/>}/>
        </Switch>
         
        <Footer/>
      </div>
    );
  }
  
  export default Main;