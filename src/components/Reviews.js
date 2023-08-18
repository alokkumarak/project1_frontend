import React from 'react'
import { IconButton } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDate();
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  
  let daySuffix;
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = 'st';
  } else if (day === 2 || day === 22) {
    daySuffix = 'nd';
  } else if (day === 3 || day === 23) {
    daySuffix = 'rd';
  } else {
    daySuffix = 'th';
  }

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const monthAbbreviation = monthNames[monthIndex];
  
  const formattedDate = `${day}${daySuffix} of ${monthAbbreviation},${year}`;
  return formattedDate;
}

function StarRating({ rating }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<StarIcon key={i} style={{ fontSize: 20, color:"yellow" }} />);
    } else {
      stars.push(<StarBorderIcon key={i} style={{ fontSize: 20 }} />);
    }
  }
  return <div>{stars}</div>;
}

function Reviews({review}) {
  const formattedDate = formatDate(review?.created_at);
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;

    }

  return (
    <div>
            <div className="card-body">
              <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{display:"flex"}}>
                    <h5 style={{marginRight:"10px"}}>{review?.student_name} </h5>
                    <div><StarRating rating={review?.student_rating} /> </div>
                  </div>
                  <div style={{fontWeight:"bold",fontSize:"18px"}}>
                   {formattedDate}
                  </div>
              </div>
            {/* <h5 className="card-title" style={{display:"flex", alignItems:"center"}}>
              {review?.student_name} 
            <span>&nbsp; 
            
            </span> */}
            {/* <span style={{float:"right"}}>{formattedDate}</span> */}
            {/* </h5> */}
            <hr/>
            <p>
            {review?.student_review}
            </p>
     </div>
    </div>
  )
}

export default Reviews
