import React from "react";
import { useLoaderData } from "react-router-dom";
import setTitle from "../../../utls/ControlTitle/setTitle";

const ViewDetails = () => {
  const toy = useLoaderData();
  const {
    available_quantity,
    img,
    price,
    seller_name,
    seller_email,
    toy_name,
    description,
  } = toy;
  setTitle('Toy Details')
  return (
    <div className="min-h-[50vh] my-10 md:mb-20 md:mt-28 max-container">
      <div className="grid md:grid-cols-2 gap-10 ">
        <div className="p-4">
          <img src={img} className="rounded-md" alt="" />
        </div>
        <div className="p-4 flex flex-col justify-center gap-2 font-semibold font-mono">
          <h1 className="text-xl md:text-3xl font-bold ">{toy_name}</h1>
          <p>
            Seller: <span>{seller_name}</span>
          </p>
          <p>
            Email: <span>{seller_email}</span>
          </p>
          <p>
            Available Quantity:{" "}
            <span className="text-secondary">{available_quantity}</span>
          </p>
          <p className="text-secondary text-lg">${price}</p>
          <button className="my-btn w-1/4 mt-3">Add Cart</button>
          <div className="text-sm font-normal mt-4"><span className="font-bold">Description:</span> {description}</div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
