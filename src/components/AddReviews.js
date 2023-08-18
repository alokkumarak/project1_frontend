import RateReviewIcon from '@mui/icons-material/RateReview';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './AddRating/Rating';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { serverString } from '../utils/config';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

function AddReviews({studentToken}) {
  const [studentReview, setStudentReview]=useState("")
  const [rating, setRating] = useState(0);
  const { course_id } = useParams()

  const navigate =useNavigate()

const submitReviewRating =()=>{
  const data ={
    course_id,
    student_id:studentToken?.student_id,
    student_name:studentToken?.student_name,
    student_review:studentReview,
    student_rating:rating
  }
  Axios.post(
    `${serverString}/addCourseReviewRating`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (response) {
        setStudentReview("")
        setRating(0)
        navigate(`/course-detail/${course_id}`)
      }
    })
    .catch((err) => {
      console.log(err);
    });

}

 
  return (
    <div className="container card w-50 pb-3 shadow px-5 mb-5 bg-white rounded h-100 w-50 mt-5">
      
      <div className="my-2 text-center card-body">
      <i><RateReviewIcon/></i>
      <h4 className="mt-4">Student Feedback</h4>
          
      </div>
      <div className="mb-3 text-center">
        <div className="w-100  mt-1">
          <textarea
            className="form-control extended-textarea"
            id="review"
            name="review"
            rows="6"
            required
            value={studentReview}
            onChange={(e)=>setStudentReview(e.target.value)}
          >
            
          </textarea>
        </div>
        
        <div className="mt-4">
        <Rating
          rating={rating}
          setRating={setRating}
        />
        </div>
        
        <button onClick={()=>submitReviewRating()} type="submit" className="btn my-3 btn-dark w-50">
        Submit
        </button>
      </div>
    
      

      
    </div>
  );
}

export default AddReviews;
