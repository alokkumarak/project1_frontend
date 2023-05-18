import Axios from "axios";
import { useEffect, useState } from "react";
import { serverString } from "../../utils/config";
import Card from "../Card";
import TeacherSidebar from "../Teacher/TeacherSidebar";
import Sidebar from "./Sidebar";

function MyCourses({ teacherToken }) {
  const [teacherCourse, setTeacherCourse] = useState([]);

  useEffect(() => {
    console.log("comming here....");
    if (teacherToken.teacher_id) {
      Axios.get(
        `${serverString}/getCourseByTeacherId?teacher_id=${teacherToken.teacher_id}`
      )
        .then((res) => {
          if (res.data) {
            setTeacherCourse(res.data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>

        <section className="col-md-9">
          <div className="card shadow-lg bg-white rounded">
            <h5 className="card-header">My Courses</h5>
            <div className="card-body">
              <div className="row">
                {teacherCourse.length > 0 ? (
                  teacherCourse.map((course) => (
                    <div className="col-sm-6 my-3 col-md-6 col-lg-4">
                      <Card cardvalue={course} />
                    </div>
                  ))
                ) : (
                  <div>loading....</div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyCourses;
