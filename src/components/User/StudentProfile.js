import Sidebar from "./Sidebar";

function StudentProfile({studentToken}){
    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <Sidebar/>
            </aside>
            <div className="col-9">
                        <div className="card shadow-lg bg-white rounded mb-4">
                        <div className="card-body text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                            className="rounded-circle img-fluid" style={{width:'150px'}}/>
                            <h5 className="my-3">{studentToken.student_name}</h5>
                        </div>
                        </div>

                        <div className="card shadow-lg bg-white rounded my-4">
                        <div className="card-body">
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Full Name</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{studentToken.student_name}</p>
                            </div>
                            </div>
                            <hr/>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Email</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{studentToken.student_email}</p>
                            </div>
                            </div>
                            <hr/>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Phone Number</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{studentToken.student_phone}</p>
                            </div>
                            </div>
                            <hr/>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Institute Name</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{studentToken.student_institute}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
    </div>
    );
}

export default StudentProfile;