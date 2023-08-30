import { Link } from "react-router-dom";
// import { IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";

function calculateAverageRating(data) {
  const totalRatings = data.length;
  const sumOfRatings = data.reduce((acc, item) => acc + item.student_rating, 0);
  const averageRating = totalRatings > 0 ? sumOfRatings / totalRatings : 0;
  const roundedAverageRating = Math.ceil(averageRating);

  return roundedAverageRating;
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const remainingStars = 5 - fullStars;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={i} fontSize="medium" sx={{ color: yellow[600] }} />);
    }
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<StarIcon key={fullStars + i} fontSize="medium" />);
    }
  
    return stars;
  }


function Card({ cardvalue }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const averageRating = calculateAverageRating(cardvalue?.course_review_rating);
  

  return (
    <div
      className="card mx-3 shadow p-3 mb-5 bg-white rounded"
      style={{ width: 350, height: 450 }}
    >
      <div className="d-flex flex-column h-100">
        <div flex-grow-1>
          <Link to={`/course-detail/${cardvalue?.course_id}`}>
            <img
              src={cardvalue?.course_thumbnail}
              className="card-img-top img-fluid"
              style={{ width: 325, height: 300 }}
              alt="Hollywood Sign on The Hill"
            />
          </Link>
        </div>

        <div className="card-body">
          <h5 className="card-title">{cardvalue?.course_title}</h5>
          <div className="card-text" style={{ width: 300, height: 50 }}>
            {truncate(`${cardvalue?.course_description}`, 100)}
          </div>
          <div style={{ float: "right" }}>
            <i>
            {renderStars(averageRating)}
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
