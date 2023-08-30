import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";
import { serverString } from "../../utils/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import laodingIcon from "../../assets/loadingIcon.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [institute, setInstitute] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const registerStudent = async () => {
    setIsLoading(true);
    if (!name || !email || !password || !phone || !institute) {
      setIsLoading(false);
      alert("Please fill all the fields");
      return;
    }
    if (phone.length !== 10) {
      setIsLoading(false);
      alert("Please enter a valid phone number");
      return;
    }
    if (!email.includes("@")) {
      setIsLoading(false);
      alert("Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      setIsLoading(false);
      alert("Password must be atleast 6 characters long");
      return;
    }
    await Axios.post(
      `${serverString}/signup/student`,
      {
        student_name: name,
        student_email: email,
        student_password: password,
        student_phone: phone,
        student_institute: institute,
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
          navigate("/user-login");
          setName("");
          setInstitute("");
        }
      })
      .catch((err) => {
        // console.log(err,"error message");
        toast.error(err?.response?.data?.error, {
          position: "top-center",
          theme: "colored",
        });
      })
      .finally(() => {
        setEmail("");
        setPassword("");
        setPhone("");
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
                <h3 className="mb-5">Student Registration</h3>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control form-control-lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

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

                <div className="form-outline mb-4">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="form-control form-control-lg"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    placeholder="Institute Name"
                    className="form-control form-control-lg"
                    value={institute}
                    onChange={(e) => setInstitute(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-dark btn-lg btn-block w-100"
                  type="submit"
                  onClick={registerStudent}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div>
                      <img
                        src={laodingIcon}
                        style={{ width: "30px", height: "30px" }}
                      />{" "}
                      Student Registration....{" "}
                    </div>
                  ) : (
                    "Student Registration"
                  )}
                </button>
                <ToastContainer />
                <hr className="my-4" />

                <p>
                  For Teacher Registration{" "}
                  <Link to="/teacher-register">Click Here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
// to check git
