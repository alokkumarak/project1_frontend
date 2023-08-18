import {Link} from "react-router-dom";
import Rating from "./AddRating/Rating";

function Card({cardvalue}){
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;

    }
    return(
        <div className="card mx-3 shadow p-3 mb-5 bg-white rounded" style={{width:340,height:475}}>
        
           <div className="d-flex flex-column h-100">
               <div flex-grow-1>
               <Link to={`/course-detail/${cardvalue?.course_id}`}><img src={cardvalue?.course_thumbnail} className="card-img-top img-fluid" style={{width:300,height:300}} alt="Hollywood Sign on The Hill" /></Link>
               </div>
                
                <div className="card-body" >
                <h5 className="card-title">{cardvalue?.course_title}</h5>
                <div className="card-text" style={{width:325,height:80}}>
                {truncate(`${cardvalue?.course_description}`,100)}

                <Rating/>
                </div>
                
                </div>
           </div>
        
        </div> 
    );
}

export default Card;