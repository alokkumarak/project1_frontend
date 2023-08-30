import { Link } from "react-router-dom";
import AllCourses from "./AllCourses";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentTestimonial from "./StudentTestimonial";
import CardCarousel from "./CardCarousel";
import { useState, useEffect } from "react";
import Axios from "axios";
import { serverString } from "../utils/config";
import Ban1 from "../assets/Ban1.png";
import Ban2 from "../assets/Ban2.png";
import Ban3 from "../assets/Ban3.png";

function Home() {
  const [limit, setlimit] = useState(10);
  const [data, setData] = useState(null);
  const [popularTeacher, setPopularTeacher] = useState(null);

  useEffect(() => {
    Axios.get(`${serverString}/getAllCourses?limit=${limit}&currentPage=1`)
      .then((res) => {
        if (res.data) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  useEffect(() => {
    Axios.get(`${serverString}/getPopularTeacher?limit=${limit}`)
      .then((res) => {
        if (res.data) {
          // console.log("res.data", res.data);
          setPopularTeacher(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);


  return (
    <div className="">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        style={{ height: "650px" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "650px" }}>
            <img
              src={Ban1}
              className="d-block w-100"
              style={{ height: "100%" }}
              alt="First slide"
            />
          </div>

          <div className="carousel-item " style={{ height: "650px" }}>
            <img
              src={Ban2}
              className="d-block w-100"
              style={{ height: "100%" }}
              alt="Second slide"
            />
          </div>

          <div className="carousel-item" style={{ height: "650px" }}>
            <img
              src={Ban3}
              className="d-block w-100"
              style={{ height: "100%" }}
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h3 className="mx-4 mt-5">Latest Courses</h3>
      { data?.data && <CardCarousel carouselData={data?.data} />}
      

      <h3 className="mx-4">Popular Courses</h3>
      { data?.data && <CardCarousel carouselData={data?.data} />}

      <h3 className="mx-4">Popular Teachers</h3>
      { popularTeacher && <CardCarousel popularTeacher={popularTeacher} />}
     

      {/* Start Student Testimonials*/}

      <StudentTestimonial />

      {/* End Student Testimonials*/}
    </div>
  );
}

export default Home;
