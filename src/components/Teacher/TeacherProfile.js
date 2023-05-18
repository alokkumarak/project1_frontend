import TeacherSidebar from "./TeacherSidebar";

function TeacherProfile({teacherToken}){
    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <TeacherSidebar/>
            </aside>
            <div className="col-9">
                        <div className="card shadow-lg bg-white rounded mb-4">
                        <div className="card-body text-center">
                            <img src="https://media.istockphoto.com/id/948490226/vector/user-avatar-teacher-a-teacher-in-a-suit-with-glasses.jpg?s=170667a&w=0&k=20&c=OQYVXlP0xiwAOvHUUZcYR3YG3YAiimUNPdXnnLQySg0=" alt="avatar"
                            className="rounded-circle img-fluid" style={{width:'150px'}}/>
                            <h5 className="my-3">{teacherToken.teacher_name}</h5>
                        </div>
                        </div>

                        <div className="card shadow-lg bg-white rounded mb-4">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Teacher Id</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{teacherToken.teacher_id}</p>
                            </div>
                            </div>
                            <hr/>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Full Name</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{teacherToken.teacher_name}</p>
                            </div>
                            </div>
                            <hr/>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Email</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{teacherToken.teacher_email}</p>
                            </div>
                            </div>
                            <hr/>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Phone Number</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{teacherToken.teacher_phone}</p>
                            </div>
                            </div>
                            <hr/>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Institute Name</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{teacherToken.teacher_institute}</p>
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