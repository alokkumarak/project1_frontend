import  Axios  from "axios";
import React,{ useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { serverString } from "../../utils/config";
import { UserContext } from "../Main";
import TeacherSidebar from "./TeacherSidebar";

function AddCourses() {
    const {state, dispatch}=useContext(UserContext)
    const [courseTitle, setCourseTitle]=useState("")
    const [courseDes, setCourseDes]=useState("")
    const [courseThumb,setCourseThumb]=useState("")
    const [courseUrl,setCourseUrl]=useState("")
    const [courseType, setCourseType]=useState([])
    const navigate= useNavigate()
    const teacherToken = JSON.parse(localStorage.getItem("teacher"));

    const cloudinaryUpload=()=>{
        const data = new FormData()
        data.append('file', courseThumb);
        data.append('upload_preset', 'insta-post')
        data.append('cloud_name', 'dpucwezsk')
        Axios.post("https://api.cloudinary.com/v1_1/dpucwezsk/image/upload",data)
            .then((res)=>{
                if(res.data){
                    setCourseUrl(res.data.url)
                }
            })
            .catch((err)=>{
                console.log(err);
            })
       setCourseThumb("")
    }

    useEffect(()=>{
        if(courseUrl){
            Axios.post(`${serverString}/teacher/uploadCurse`,{
                course_title:courseTitle,
                course_description: courseDes,
                course_thumbnail:courseUrl,
                course_type:courseType,
                course_teacher_id:teacherToken?.teacher_id
            },
            {
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then((res)=>{
                if(res.data){
                    localStorage.setItem("course_thumb",res.data.course_id)
                    dispatch({type:"COURSE_THUMB", payload:res.data.course_id})
                    setCourseDes("")
                    setCourseThumb("")
                    setCourseTitle("")
                    setCourseType("")
                    navigate("/add-videos")
                }
            })
            .catch((err)=>{
                console.log(err,"check error...")
            })
        }
    },[courseUrl])

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <div className="col-6">
          <div className="card">
            <h5 className="card-header">Add Course</h5>
            <div className="card-body">
              {/* <form> */}
              <div className="mb-3">
                <label for="title" className="form-label">
                  Title
                </label>
                <input type="text" className="form-control" value={courseTitle} onChange={(e)=>setCourseTitle(e.target.value)} />
              </div>

              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Description
                </label>
                <textarea className="form-control" id="description" value={courseDes} onChange={(e)=>setCourseDes(e.target.value)} />
              </div>

              <div className="mb-3">
                <label for="title" className="form-label">
                  Thumbnail
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="thumbnail"
                  className="form-control"
                  onChange={(e)=>setCourseThumb(e.target.files[0])}
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Course type
                </label>
                <textarea className="form-control" id="description" value={courseType} onChange={(e)=>setCourseType(e.target.value)} />
              </div>
              <button
                className="btn btn-primary"
                onClick={cloudinaryUpload}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourses;
