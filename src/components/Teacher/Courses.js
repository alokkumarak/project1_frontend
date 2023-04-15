import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";


function Courses(){
    return(
                <div className="container mt-4">
                    <div className="row">
                        <aside className="col-md-3">
                            <TeacherSidebar/>
                        </aside>
                        
                        <section className="col-md-9">
                            <div className="card">
                                <h5 className="card-header">My Courses</h5>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Created By</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <td>Compiler Design</td>
                                            <td><Link to="/">Prof. Ajit Kumar</Link></td>
                                            <td>
                                                <button className="btn btn-danger active">Delete</button>
                                            </td>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

               
    );
}

export default Courses;