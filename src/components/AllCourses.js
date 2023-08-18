import CoursePagination from "./CoursePagination";
import Card from "./Card";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useQuery } from "../utils/helpers";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import { serverString } from "../utils/config";

function AllCourses() {
  const [limit,setlimit]=useState(30)
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);

  const getPrevItems = () => {
    if (!data) {
      return;
    }
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getNextItems = () => {
    if (!data) {
      return;
    }
    if (currentPage <= Math.floor(data.count / data.limit)) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    Axios.get(
      `${serverString}/getAllCourses?limit=${limit}&currentPage=${currentPage}&search=${search}`
    )
      .then((res) => {
        if (res.data) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [limit, currentPage,search]);

  return (
    <div>
      <h3 className="text-center mt-3">
        All Courses
      </h3>
      <div className="container" style={{display:"flex",justifyContent:"space-between"}}>
      <div class="input-group my-2" style={{width:"400px",height:"50px"}}>
        <input
          type="search"
          id="form1"
          placeholder="Search Courses"
          class="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent:"center"
        }}
      >
        <button
          className={
            "btn btn-secondary mr-2"
            //  +
            // ((data ? data.skip <= 0 : true) && " text-muted")
          }
          style={{ marginRight: "20px" }}
          disabled={data ? data.skip <= 0 : true}
          onClick={getPrevItems}
        >
          <ArrowBackIcon />
          <span className="ml-2">Prev Page</span>
        </button>
        <button
          className={
            "btn btn-secondary mr-2"
            //  +
            // ((data ? data.length + data.skip >= data.count : true) && "text-muted")
          }
          style={{ marginRight: "20px" }}
          disabled={data ? data.length + data.skip >= data.count : true}
          onClick={getNextItems}
        >
          
          <span className="ml-2">Next Page</span>
          <ArrowForwardIcon />
        </button>
        <div style={{ fontSize: "14px" }}>
          {" "}
          {data?.count === 0
                ? ""
                : data?.skip < data?.count
                ? `Showing ${data?.skip + 1} to ${data?.length + data?.skip} of ${data?.count}`
                : "page count exceeded"}
        </div>
      </div>

      </div>
      

      <div className="row my-3 ">
        {data?.data.map((da) => (
          <div className="col-sm-6 col-md-4 col-lg-3">
            <Card cardvalue={da} />
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default AllCourses;
