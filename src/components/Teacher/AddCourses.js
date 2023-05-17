import { Link } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import TeacherSidebar from "./TeacherSidebar";
import { useState } from "react";

function AddCourses(){
   const [category,setCategory]=useState(["GATE","CSE","Interview","Sem. Exams"]);

    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <TeacherSidebar/>
            </aside>
            <div className="col-6">
                <div className="card shadow-lg bg-white rounded">
                    <h5 className="card-header">Add Course</h5>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="title" className="form-label">Title</label>
                                <input type="text" className="form-control"/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Description</label>
                                <textarea className="form-control" id="description"/>
                            </div>


                            <div className="mb-3">
                                <label for="title" className="form-label">Thumbnail</label>
                                <input type="file" accept="jpeg/*" name="thumbnail" className="form-control"/>
                            </div>


                            <div className="mt-4">

                            <label for="category" className="form-label">Course Category</label>
                                <Multiselect
                                  isObject={false}
                                  onRemove={(event) => {
                                    console.log(event);
                                  }}

                                  onSelect={(event) => {
                                    console.log(event);
                                  }}

                                  options={category}

                                  showCheckbox
                                   
                                />
                
                            </div>
                            <div className="text-center">
                            <Link to="/add-videos"><button type="submit" className="mt-4 w-50 btn btn-dark">Proceed</button></Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
       </div>
               
    );
}

export default AddCourses;