import {Link} from "react-router-dom";

function Card({cardvalue}){
    return(
        <div className="card mx-3 mt-0 h-100">
        <Link to={`/course-detail/${cardvalue?.course_id}`}><img src={cardvalue?.course_thumbnail} className="card-img-top img-fluid" alt="Hollywood Sign on The Hill" /></Link>
            <div className="card-body">
            <h5 className="card-title">{cardvalue?.course_title}</h5>
            <p className="card-text">
              {cardvalue?.course_description}
            </p>
            </div>
        </div> 
    );
}

export default Card;