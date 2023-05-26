import React from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar, FaRegEye, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const ToyCard = ({ toy }) => {
  const {
    img,
    price,
    toy_name,
    _id,
    rating,
  } = toy;
  return (
    <div className="relative border rounded-xl p-2 overflow-hidden">
      <div className="absolute top-4 left-4 px-3 rounded-full text-sm text-center text-white text-medium bg-[#7FBC1E]">
        <p>Sale!</p>
      </div>
      <img src={img} className="w-full rounded-md" alt="" />
      <div className="p-3 space-y-2">
        <div className="text-center">
          <Rating
            emptySymbol={<FaRegStar className="text-orange-400" />}
            fullSymbol={<FaStar className="text-orange-400" />}
            fractions={2}
            initialRating={rating}
            readonly
          />
        </div>
        <hr className="border w-full" />
        <h1 className="text-xl text-center font-bold ">{toy_name}</h1>
        <h1 className="text-secondary text-lg font-bold text-center">
          ${price}
        </h1>
      </div>
      <div className="bg-black absolute left-0 rounded-xl top-0 h-full w-full bg-opacity-0 duration-300 opacity-0 hover:opacity-100 hover:bg-opacity-5">
        <div className="space-y-1 flex flex-col items-end pt-3 pr-2">
          <div className="rounded-full h-8 w-8 mr-1 bg-secondary duration-300  flex items-center justify-center hover:bg-primary">
            <FaRegEye className="text-white w-4 h-4"></FaRegEye>
          </div>
          <div className="rounded-full h-8 w-8 mr-1 bg-secondary duration-300  flex items-center justify-center hover:bg-primary">
            <FaRegHeart className="text-white w-4 h-4"></FaRegHeart>
          </div>
        </div>
        <div className="w-full h-[72%] flex justify-center items-end">
         <Link to={`/toy/${_id}`}>
            <button className="my-btn">View Details</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
