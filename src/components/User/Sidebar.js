import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <div className="card">
                    <h5 className="card-header">Dashboard</h5>
                    <div className="list-group list-group-flush"> 
                        <Link to="/my-courses" className="list-group-item list-group-item-action">My Courses</Link> 
                        <Link to="/favorite-courses" className="list-group-item list-group-item-action">Favourite Courses</Link>
                        <Link to="/my-profile" className="list-group-item list-group-item-action">My Profile</Link>
                        <Link to="/logout" className="list-group-item list-group-item-action">Log Out</Link>
                    </div>
        </div>
    );
}

export default Sidebar;