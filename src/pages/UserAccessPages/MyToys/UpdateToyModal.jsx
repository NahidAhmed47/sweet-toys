import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../providers/AuthProviders';

const UpdateToyModal = ({toy, handleUpdateToy, index}) => {
    const {user} = useContext(AuthContext)
    const {
        available_quantity,
        img,
        price,
        seller_name,
        sub_category,
        toy_name,
        _id,
        rating,
        description
      } = toy;
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
    return (
        <>
            <input type="checkbox" id={`modal-${index}`} className="modal-toggle" />
      <div className="modal">
        <div className="bg-white relative p-10 rounded-xl max-w-[70%]">
          <label
            htmlFor={`modal-${index}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit(handleUpdateToy)}>
          {errors.exampleRequired && <span>This field is required</span>}
        <div className="grid md:grid-cols-2 gap-5 ">
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Toy Name
            </div>
            <input
              {...register("toy_name", { required: true })}
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
              value={toy_name}
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Image Url
            </div>
            <input
              {...register("img", { required: true })}
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
              value={img}
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Seller Name
            </div>
            <input
               value={user?.displayName}
              {...register("seller_name", { required: true })}
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Email
            </div>
            <input
              value={user?.email}
              {...register("seller_email", { required: true })}
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Sub Category
            </div>
            <input
              value={sub_category}
              {...register("sub_category", {required: true })}
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Price
            </div>
            <input
              defaultValue={price}
              {...register("price", {required: true})}
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Average Rating
            </div>
            <input
              value={rating}
              {...register("rating", {required: true})}
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Available Quantity
            </div>
            <input
              defaultValue={available_quantity}
              {...register("available_quantity", {required: true})}
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
        </div>
          <div className="mt-7">
            <div className="text-sm font-bold text-gray-700 tracking-wide mb-2">
              Description
            </div>
            <textarea 
              defaultValue={description}
              {...register("description")}
              className="w-full text-base px-3 py-2 border rounded-xl border-gray-300 focus:outline-none focus:border-primary"
              placeholder="Description write here..."
            />
          </div>
          <input
              value={_id}
              {...register("_id")}
              className="w-full hidden text-base py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            />
          <input type="submit" value="Add Toy" className="my-btn w-full my-10"/>
      </form>
        </div>
      </div>
        </>
    );
};

export default UpdateToyModal;