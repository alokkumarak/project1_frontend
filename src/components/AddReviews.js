import RateReviewIcon from '@mui/icons-material/RateReview';
import 'bootstrap/dist/css/bootstrap.min.css';


import Rating from './AddRating/Rating';

function AddReviews() {

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
          >
            
          </textarea>
        </div>
        
        <div className="mt-4">
        <Rating/>
        </div>
        
        <button type="submit" className="btn my-3 btn-dark w-50">
        Submit
        </button>
      </div>
    
      

      
    </div>
  );
}

export default AddReviews;
