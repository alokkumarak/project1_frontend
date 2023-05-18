import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { serverString } from "../../utils/config";

function TeacherRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [institute, setInstitute] = useState("");
  const navigate = useNavigate();

  const registerTeacher = () => {
    if (!name || !email || !password || !phone || !institute) {
      alert("Please fill all the fields");
      return;
    }
    if (phone.length !== 10) {
      alert("Please enter a valid phone number");
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

    Axios.post(`${serverString}/signup/teacher`, {
      teacher_name: name,
      teacher_email: email,
      teacher_password: password,
      teacher_phone: phone,
      teacher_institute: institute,
    },
    {
        headers: {
            "Content-Type": "application/json"
        },
    }
    )
      .then((response) => {
        if(response){
          navigate("/teacher-login");
          setEmail("");
          setName("");
          setPassword("");
          setPhone("");
          setInstitute("");
        }
       
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
              style={{ "border-radius": "3rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Teacher Registration</h3>

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
                    placeholder="institution"
                    className="form-control form-control-lg"
                    value={institute}
                    onChange={(e) => setInstitute(e.target.value)}

                  />
                </div>

                <button
                  className="btn btn-dark btn-lg btn-block w-100"
                  type="submit"
                  onClick={registerTeacher}
                >
                  Register
                </button>
                <hr className="my-4" />

                <p>
                  For Students Registration{" "}
                  <Link to="/user-register">Click Here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherRegister;
