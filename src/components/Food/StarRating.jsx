import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="shadow-xl h-24 bg-gray-50">
      <div className=" justify-center pt-2 ml-16 sm:pt-5 sm:ml-0 sm:flex sm:gap-20">
        <div className="flex">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            <label className="flex">
              <input
                // key={index}
                className="hidden"
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="cursor-pointer"
                size={50}
                color={currentRating <= (hover || rating) ? "on" : "off"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>;
          })}
        </div>
        <p className="font-bold text:sm ml-16 sm:ml-0 sm:text-3xl pt-3 ">
          Your rating is : {rating}
        </p>
      </div>
    </div>
  );
};

export default StarRating;
