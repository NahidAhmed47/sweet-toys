import React from "react";
import { Link } from "react-router-dom";

const Toy = ({toy, index}) => {
    const {available_quantity, img, price, seller_name, sub_category, toy_name, _id} = toy;
  return (
    <tr>
      <th>{index + 1}</th>
      <td><img src={img} alt="img" className="w-20 h-auto" /></td>
      <td>{toy_name}</td>
      <td>{seller_name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td className="text-center">{available_quantity}</td>
      <td><Link to={`/toy/${_id}`}><button className="my-btn">View Details</button></Link></td>
    </tr>
  );
};

export default Toy;
