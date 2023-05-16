import { Link } from "react-router-dom";
function TeacherDetail(){
    return(
      <div className="container mt-3">
        <div className="row">
            <div className="col-4">
                <img src ="/logo512.png" className="img-thumbnail" alt="Course thumb"/>
            </div>

            <div className="col-8">
                <h3> Ajeet Kumar </h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                </p>

                <p className="fw-bold">Skills : DSA,FLAT,Compiler Design</p>
                <p className="fw-bold">Recent Courses : Python,Java</p>
                <p className="fw-bold">Rating: 4.5/5</p>
            </div>
        </div>

        {/*Course Videos*/}

        <div className="card mt-4">
            <h5 className="card-header">
              Course List
            </h5>
            <ol className="list group">
              <li className="list-group-item"><Link to="/detail/1" className="list-group-item list-group-item-action">DSA</Link></li>
              <li className="list-group-item"><Link to="/detail/1" className="list-group-item list-group-item-action">FLAT</Link></li>
              <li className="list-group-item"><Link to="/detail/1" className="list-group-item list-group-item-action">Compiler Design</Link></li>
              <li className="list-group-item"><Link to="/detail/1" className="list-group-item list-group-item-action">Python</Link></li>
            </ol>

        </div>

        
      </div>
    );
}

export default TeacherDetail;