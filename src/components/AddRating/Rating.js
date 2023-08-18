import React, { useState } from "react";
import Rate from "./Rate";

const Rating = ({rating, setRating}) => {
 
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          {/* <p>Rating - {rating}</p> */}
        </div>
      </div>
    </>
  );
};
//color={{filled: "rgb(136 87 25)", unfilled: "rgb(214 184 147)"}}
//count={10}
export default Rating;