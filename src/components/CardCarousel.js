import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Card from "./Card";

function CardCarousel({carouselData, popularTeacher}){

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return(
        <div>
            <div className="mx-2 my-5">
              {
                carouselData && 
                <Carousel infinite={true} responsive={responsive}>
                {
                  carouselData?.map((item, index) => (
                     <Card cardvalue={item} key={index}/>
                   ))
                }               
             </Carousel>
              }

              {
                popularTeacher &&
                <Carousel infinite={true} responsive={responsive}>
                {
                  popularTeacher?.map((teacher, index) => (
                      <div className="card mx-3 mt-0 h-100" key={index}> 
                      <Link to={`/teacher-detail/${teacher?.teacher_id}`}><img src="https://media.istockphoto.com/id/948490226/vector/user-avatar-teacher-a-teacher-in-a-suit-with-glasses.jpg?s=170667a&w=0&k=20&c=OQYVXlP0xiwAOvHUUZcYR3YG3YAiimUNPdXnnLQySg0=" className="card-img-top img-fluid" alt="Hollywood Sign on The Hill" /></Link>
            <div className="card-body">
            <h5 className="card-title">
              {teacher?.teacher_name}
            </h5>
            <div className="card-text">
            <b>Email : </b>{teacher?.teacher_email}
            </div>
            <div className="card-text">
            <b>Phone No.: </b>{teacher?.teacher_phone}
            </div>
            {/* <div className="card-text">
            <b>Teacher Id : </b>{teacher?.teacher_id}
            </div> */}
            <div className="card-text">
            <b>Institute : </b>{teacher?.teacher_institute}
            </div>
            </div>
                      </div>
                    ))

              }
              </Carousel>
              }
           
            </div>
        </div>

    );

}

export default CardCarousel;