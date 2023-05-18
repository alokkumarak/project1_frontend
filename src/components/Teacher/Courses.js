import Card from "../Card";
import Sidebar from "../User/Sidebar";
import TeacherSidebar from "./TeacherSidebar";


function MyCourses(){
    return(
                <div className="container mt-4">
                    <div className="row">
                        <aside className="col-md-3">
                           <Sidebar/>
                        </aside>
                        
                        <section className="col-md-9">
                            <div className="card shadow-lg bg-white rounded">
                                <h5 className="card-header">My Courses</h5>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6 my-3 col-md-6 col-lg-4">
                                        <Card/>
                                        </div>

                                        <div className="col-sm-6 my-3 col-md-6 col-lg-4">
                                        <Card/>
                                        </div>

                                        <div className="col-sm-6 my-3 col-md-6 col-lg-4">
                                        <Card/>
                                        </div>
                                        <div className="col-sm-6 my-3 col-md-6 col-lg-4">
                                        <Card/>
                                        </div>

                                        <div className="col-sm-6 my-3 col-md-6 col-lg-4">
                                        <Card/>
                                        </div>

                                        <div className="col-sm-6 my-3 col-md-6 col-lg-4">
                                        <Card/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

               
    );
}

export default MyCourses;