import { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "./Main";
function Header({ teacherToken, studentToken }) {
  const navigate =useNavigate()
  const { state, dispatch } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ Type: 'CLEAR' })
    navigate("/");
    window.location.reload()
}
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Edupedia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/quizHome">
                Quiz
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/addReviews">
                Add Review
              </Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/all-courses">
                Courses
              </Link>
            </li>
           {(!teacherToken && !studentToken) && ( 
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/user-login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user-register">
                    Signup
                  </Link>
                </li>
              </>
              )} 

                { teacherToken &&
              <> 
                <li className="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Teacher
                  </Link>
                  <ul className="dropdown-menu">
                    <Link className="dropdown-item" to="/teacher-profile">
                      Dashboard
                    </Link>
                    <li className="dropdown-item" style={{cursor:"pointer"}} onClick={handleLogout}>
                      {/* <Link className="dropdown-item" href="#"> */}
                        Log Out
                      {/* </Link> */}
                    </li>
                  </ul>
                </li>
                </>
               } 
                 { studentToken &&
                <> 
                <li className="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Student
                  </Link>
                  <ul className="dropdown-menu">
                    {/* <Link className="dropdown-item" to="/user-login">Log In</Link>
                            <Link className="dropdown-item" to="/user-register">Register</Link> */}
                    <Link className="dropdown-item" to="/student-profile">
                      Dashboard
                    </Link>
                    <li className="dropdown-item" style={{cursor:"pointer"}} onClick={handleLogout}>
                      {/* <Link className="dropdown-item" href="#"> */}
                        Log Out
                      {/* </Link> */}
                    </li>
                  </ul>
                </li>
               </>
            } 
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
