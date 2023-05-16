import {Link} from "react-router-dom";

function TeacherRegister(){
    return(
        <div className="container mt-4">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style={{'border-radius':'3rem'}}>
                    <div class="card-body p-5 text-center">

                        <h3 class="mb-5">Teacher Registration</h3>

                        <div class="form-outline mb-4">
                        <input type="text" id="name1" placeholder="Full Name" class="form-control form-control-lg" />
                        </div>

                        <div class="form-outline mb-4">
                        <input type="email" id="typeEmailX-2" placeholder="Email" class="form-control form-control-lg" />
                        </div>

                        <div class="form-outline mb-4">
                        <input type="password" id="typePasswordX-2" placeholder="Password" class="form-control form-control-lg" />
                        </div>
                        
                        <div class="form-outline mb-4">
                        <input type="number" id="phone1" placeholder="Phone Number" class="form-control form-control-lg" />
                        </div>

                        <div class="form-outline mb-4">
                        <input type="text" id="institute" placeholder="Specialisations" class="form-control form-control-lg" />
                        </div>

                        <button class="btn btn-dark btn-lg btn-block w-100" type="submit">Register</button>
                        <hr class="my-4"/>

                        <p>For Students Registration <Link to="/user-register">Click Here</Link></p>

                    </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
    );
}

export default TeacherRegister;
