import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import Axios from "axios";
import { serverString } from "../../utils/config";
import { UserContext } from "../Main";
import { ToastContainer, toast } from "react-toastify";
import laodingIcon from "../../assets/loadingIcon.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  const loginStudent = () => {
    setIsLoading(true);
    if (!email || !password) {
      alert("Please fill all the fields");
      setIsLoading(false);
      return;
    }
    if (!email.includes("@")) {
      setIsLoading(false);
      alert("Please enter a valid email");
      return;
    }
    Axios.post(
      `${serverString}/signin/student`,
      {
        student_email: email,
        student_password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response) {
          toast.success(response?.data?.message, {
            position: "top-center",
            theme: "colored",
          });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("student", JSON.stringify(response.data.user));
          dispatch({ type: "STUDENT", payload: response.data.user });

          window.location.reload();
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.error, {
          position: "top-center",
          theme: "colored",
        });
      })
      .finally(() => {
        setEmail("");
        setPassword("");
        setIsLoading(false);
      });
  };

  return (
    <div className="container mt-4">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-lg p-3 mb-5 bg-white rounded"
              style={{ borderRadius: "3rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Student Log in</h3>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control form-control-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-dark btn-lg btn-block w-100"
                  type="submit"
                  onClick={loginStudent}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div>
                      <img
                        src={laodingIcon}
                        style={{ width: "30px", height: "30px" }}
                      />{" "}
                      Student Login....{" "}
                    </div>
                  ) : (
                    "Student Login"
                  )}
                </button>
                <ToastContainer />
                <hr className="my-4" />

                <p>
                  For Teacher Login <Link to="/teacher-login">Click Here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
