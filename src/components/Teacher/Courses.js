import { serverString } from "../../utils/config";
import Card from "../Card";
import Sidebar from "../User/Sidebar";
import Axios from "axios";
import { useState, useEffect } from "react";

function MyCourses({ studentToken }) {
  const [courseids, setCourseids] = useState([]);
  const [studentCourses, setStudentCourses] = useState([]);
  useEffect(() => {
    if (studentToken.student_id) {
      Axios.get(
        `${serverString}/getStudentEnrolledCourses?student_id=${studentToken.student_id}`
      )
        .then((res) => {
          if (res.data) {
            setCourseids(res.data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    Axios.get(`${serverString}/getCourseThumbnailsByIds`, {
      params: { course_ids: courseids },
    })
      .then((res) => {
        if (res.data) {
          setStudentCourses(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error, "error in getting the student all enrolled courses");
      });
  }, [courseids]);

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>

        <section className="col-md-9">
          <div className="card shadow-lg bg-white rounded">
            <h5 className="card-header">My Courses</h5>
            <div className="card-body">
              <div className="row">
                { studentCourses.length > 0 ? studentCourses.map((course) => (
                  <div className="col-sm-6 my-3 col-md-6 col-lg-4">
                    <Card cardvalue={course} />
                  </div>
                ))  :
                <div> No Enrolled Courses</div>
            }
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyCourses;
