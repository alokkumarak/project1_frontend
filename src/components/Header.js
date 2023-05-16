import {Link} from 'react-router-dom';
function Header() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                <Link className="navbar-brand" to="/">Edupedia</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
    
                    <li className="nav-item">
                        <Link className="nav-link" to="/all-courses">Courses</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Teacher
                        </a>
                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/teacher-login">Log In</Link>
                            <Link className="dropdown-item" to="/teacher-register">Register</Link>
                            <Link className="dropdown-item" to="/teacher-Dashboard">Dashboard</Link>
                            <li><a className="dropdown-item" href="#">Log Out</a></li>
                        </ul>
                    </li>
                      
                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Student
                        </a>
                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/user-login">Log In</Link>
                            <Link className="dropdown-item" to="/user-register">Register</Link>
                            <Link className="dropdown-item" to="/user-Dashboard">Dashboard</Link>
                            <li><a className="dropdown-item" href="#">Log Out</a></li>
                        </ul>
                    </li>
                    </ul>
                </div>
                </div>
           </nav>
    );
  }
  
  export default Header;