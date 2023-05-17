import TeacherSidebar from "./TeacherSidebar";

function TeacherProfile(){
    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <TeacherSidebar/>
            </aside>
            <div className="col-9">
                        <div className="card shadow-lg bg-white rounded mb-4">
                        <div className="card-body text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                            className="rounded-circle img-fluid" style={{width:'150px'}}/>
                            <h5 className="my-3">Suman prakash</h5>
                        </div>
                        </div>

                        <div className="card shadow-lg bg-white rounded mb-4">
                        <div className="card-body">
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Full Name</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">Suman Prakash</p>
                            </div>
                            </div>
                            <hr/>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Email</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">Example@email.com</p>
                            </div>
                            </div>
                            <hr/>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Phone Number</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">(097) 234-5678</p>
                            </div>
                            </div>
                            <hr/>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Institute Name</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">BCE Patna</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
    </div>
    );
}

export default TeacherProfile;