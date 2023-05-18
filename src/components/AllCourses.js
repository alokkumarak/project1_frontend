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
  // const query = useQuery(useLocation());
  // const limit = query.get("limit");
  const [limit,setlimit]=useState(30)
  const [currentPage, setCurrentPage] = useState(1);
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
      `${serverString}/getAllCourses?limit=${limit}&currentPage=${currentPage}`
    )
      .then((res) => {
        if (res.data) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [limit, currentPage]);

  return (
    <div>
      <h3 className="text-center mt-3">
        <u>All Courses</u>
      </h3>
      <div style={{display:"flex"}}>
      <div class="input-group mx-auto my-2 w-50">
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent:"center",
          marginRight:"20px"
        }}
      >
        <button
          className={
            "btn btn-secondary mr-2"
             +
            ((data ? data.skip <= 0 : true) && " text-muted")
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
             +
            ((data ? data.length + data.skip >= data.count : true) && "text-muted")
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
      

      <div className="row mx-4 my-3 g-4">
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
