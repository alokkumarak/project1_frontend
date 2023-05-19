import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Main";
function Sidebar(){
    const navigate =useNavigate()
    const { state, dispatch } = useContext(UserContext);
  
    const handleLogout = () => {
        localStorage.clear();
        dispatch({ Type: 'CLEAR' })
        navigate("/");
        window.location.reload()
    }
    return(
        <div className="card shadow-lg bg-white rounded">
                    <h5 className="card-header">Dashboard</h5>
                    <div className="list-group list-group-flush"> 
                        <Link to="/student-profile" className="list-group-item list-group-item-action">My Profile</Link>
                        <Link to="/courses" className="list-group-item list-group-item-action">My Courses</Link> 
                        <div onClick={handleLogout} className="list-group-item list-group-item-action" style={{cursor:"pointer"}}>Log Out</div>
                    </div>
        </div>
    );
}

export default Sidebar;