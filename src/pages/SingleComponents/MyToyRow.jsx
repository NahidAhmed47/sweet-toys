import React from "react";
import UpdateToyModal from "../UserAccessPages/MyToys/UpdateToyModal";

const MyToyRow = ({ toy, index, handleDeleteToy, handleUpdateToy }) => {
  const {
    available_quantity,
    img,
    price,
    seller_name,
    sub_category,
    toy_name,
    _id,
  } = toy;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img src={img} alt="img" className="w-20 h-auto" />
      </td>
      <td>{toy_name}</td>
      <td>{seller_name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td className="text-center">{available_quantity}</td>
      <td>
        <div className="flex justify-around">
          <button onClick={()=> handleDeleteToy(_id)} className="px-4 py-2 text-sm bg-secondary hover:scale-95 origin-center rounded-full duration-300 text-white font-medium">
            Delete
          </button>
          <label className="my-btn " htmlFor={`modal-${index}`}>Update</label>
          <UpdateToyModal toy={toy} index={index} handleUpdateToy={handleUpdateToy}></UpdateToyModal>
        </div>
      </td>
    </tr>
  );
};

export default MyToyRow;
