import CoursePagination from "./CoursePagination";
import Card from "./Card";
function AllCourses(){
    return(
 <>
      <h3 className="text-center mt-5"><u>All Courses</u></h3>
      <div class="input-group mx-auto my-5 w-50">
        <input
          type="search"
          id="form1"
          placeholder="Search Courses"
          class="form-control"
        />

        <button type="button" class="btn btn-primary btn-outline-secondary">
          Search
        </button>
      </div>

            <div className="row mx-4 my-3 g-4">
                <div className="col-sm-6 col-md-4 col-lg-3">
                <Card/>
                </div>
                
                <div className="col-sm-6 col-md-4 col-lg-3">
                <Card/>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                <Card/>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                <Card/>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                <Card/>
                </div>
                
                <div className="col-sm-6 col-md-4 col-lg-3">
                <Card/>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                <Card/>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                <Card/>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                <Card/>
                </div>
                
                <div className="col-sm-6 col-md-4 col-lg-3">
                <Card/>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                <Card/>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                <Card/>
                </div>
            </div>

            <CoursePagination/>
            </>
  );
}

export default AllCourses;
