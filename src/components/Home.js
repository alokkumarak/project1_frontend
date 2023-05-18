import { Link } from "react-router-dom";
import AllCourses from "./AllCourses";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentTestimonial from "./StudentTestimonial";
import CardCarousel from "./CardCarousel";

function Home() {
  return (
    <div className="">

      <div id="carouselExampleIndicators" className="carousel slide" style={{height:"575px"}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner" >
            <div className="carousel-item active"  style={{height:"575px"}}>
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="d-block w-100" style={{height:"100%"}} alt="First slide"/>

            </div>

            <div className="carousel-item " style={{height:"575px"}} >
              
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="d-block w-100"  style={{height:"100%"}} alt="Second slide"/>
        
            </div>

            <div className="carousel-item" style={{height:"575px"}}>
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="d-block w-100"  style={{height:"100%"}} alt="Third slide"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <h3 className="mx-4 mt-5">Latest Courses</h3>
        <CardCarousel/>
      
        <h3 className="mx-4">Popular Courses</h3>
        <CardCarousel/>
      
       
        <h3 className="mx-4">Popular Teachers</h3>
        <CardCarousel/>
  
      {/* Start Student Testimonials*/}
      
      
      <StudentTestimonial/>

      

      {/* End Student Testimonials*/}
      

    </div>
  );
}

export default Home;