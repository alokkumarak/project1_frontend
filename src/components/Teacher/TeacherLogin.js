import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import Axios from "axios";
import { serverString } from "../../utils/config";
import { UserContext } from "../Main";

function TeacherLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  const loginTeacher = () => {
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      alert("Password must be atleast 6 characters long");
      return;
    }
    Axios.post(`${serverString}/signin/teacher`, {
      teacher_email: email,
      teacher_password: password,
    },
    {
        headers: {
            "Content-Type": "application/json"
        },
    }
    )
      .then((response) => {
        localStorage.setItem("teacher", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        dispatch({ type: "TEACHER", payload: response.data.user });
        // navigate("/");
        setEmail("");
        setPassword("");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-4">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-lg p-3 mb-5 bg-white rounded"
              style={{borderRadius: "3rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Teacher Log in</h3>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    placeholder="Email"
                    className="form-control form-control-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    placeholder="Password"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-dark btn-lg btn-block w-100"
                  type="submit"
                  onClick={loginTeacher}
                >
                  Login
                </button>
                <hr className="my-4" />
                <p>
                  For Student Login <Link to="/user-login">Click Here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherLogin;
