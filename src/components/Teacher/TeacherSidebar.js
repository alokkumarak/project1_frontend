import { Link } from "react-router-dom";
function TeacherSidebar(){
    return(
        <div className="card">
                    <h5 className="card-header">Dashboard</h5>
                    <div className="list-group list-group-flush"> 
                        <Link to="/Courses" className="list-group-item list-group-item-action">My Courses</Link>  
                        <Link to="/my-users" className="list-group-item list-group-item-action">My Students</Link> 
                        <Link to="/add-courses" className="list-group-item list-group-item-action">Add Courses</Link>
                        <Link to="/my-profile" className="list-group-item list-group-item-action">My Profile</Link>
                        <Link to="/logout" className="list-group-item list-group-item-action">Log Out</Link>
                    </div>
        </div>
    );
}

export default TeacherSidebar;