
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TeacherDetail from "./TeacherDetails";
function CourseDetail(){
    let {course_id}=useParams();
    return(
      <div className="container mt-3">
        <div className="row">
            <div className="col-4">
                <img src ="/logo512.png" className="img-thumbnail" alt="Course Image"/>
            </div>

            <div className="col-8">
                <h3> Course Title </h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                </p>

                <p className="fw-bold">Course By:<Link to="/teacher-detail/1">Teacher</Link></p>
                <p className="fw-bold">Duration: 3 Hours 45 Minutes</p>
                <p className="fw-bold">Total Enrolled: 456 Students</p>
                <p className="fw-bold">Rating: 4.5/5</p>
            </div>
        </div>

        {/*Course Videos*/}

        <div className="card mt-4">
            <h5 className="card-header">
                Course Videos
            </h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Introduction<button className="btn btn-sm btn-secondary float-end">Play</button></li>
                <li className="list-group-item">Set up Project<button className="btn btn-sm btn-secondary float-end">Play</button></li>
                <li className="list-group-item">Start with functional components<button className="btn btn-sm btn-secondary float-end">Play</button></li>
                <li className="list-group-item">Introduction<button className="btn btn-sm btn-secondary float-end">Play</button></li>
                <li className="list-group-item">Set up Project<button className="btn btn-sm btn-secondary float-end">Play</button></li>
                <li className="list-group-item">Start with functional components<button className="btn btn-sm btn-secondary float-end">Play</button></li>
            </ul>

        </div>

        <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
        <div className="row mb-4">
            <div className="col-md-3">

                <div className="card">
                    <Link to="/detail/1" ><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to="/detail/1"> Course title</Link></h5>

                    </div>
                </div>

            </div>

            <div className="col-md-3">

                <div className="card">
                    <a href="#" ><img src="/logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#"> Course title</a></h5>

                    </div>
                </div>

            </div>
        </div>
      </div>
    );
}

export default CourseDetail;