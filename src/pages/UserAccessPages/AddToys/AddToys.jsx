import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import setTitle from "../../../utls/ControlTitle/setTitle";

const AddToys = () => {
    const {user} = useContext(AuthContext);
    setTitle('Add Toys')
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch('https://sweet-toys-server1.vercel.app/teddy-data',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Toys Added Successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              reset()
        }
    })
  };
  return (
    <div className="min-h-[70vh] my-10 md:mt-36 max-container px-4 lg:px-0">
      <form onSubmit={handleSubmit(onSubmit)}>
      {errors.exampleRequired && <span>This field is required</span>}
        <div className="grid md:grid-cols-2 gap-5 md:gap-10">
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Toy Name
            </div>
            <input
              {...register("toy_name", { required: true })}
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
              placeholder="Type name here..."
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Image Url
            </div>
            <input
              {...register("img", { required: true })}
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Seller Name
            </div>
            <input
              value={user?.displayName}
              {...register("seller_name", { required: true })}
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Email
            </div>
            <input
              value={user?.email}
              {...register("seller_email", { required: true })}
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Sub Category
            </div>
            <select {...register("sub_category")} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary">
        <option value="" disabled selected>Select Category</option>
        <option value="Classic Teddy">Classic Teddy</option>
        <option value="Plush Teddy">Plush Teddy</option>
        <option value="Collector's Teddy">Collector's Teddy</option>
        <option value="Musical Teddy">Musical Teddy</option>
        <option value="Personalized Teddy">Personalized Teddy</option>
        <option value="Giant Teddy">Giant Teddy</option>
        <option value="Educational Teddy">Educational Teddy</option>
      </select>
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Price
            </div>
            <input
              defaultValue=""
              {...register("price", {required: true})}
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Average Rating
            </div>
            <input
              defaultValue=""
              {...register("rating", {required: true})}
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Available Quantity
            </div>
            <input
              defaultValue=""
              {...register("available_quantity", {required: true})}
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
        </div>
          <div className="mt-7">
            <div className="text-sm font-bold text-gray-700 tracking-wide mb-2">
              Description
            </div>
            <textarea 
              defaultValue=""
              {...register("description")}
              className="w-full text-base px-3 py-2 border rounded-xl border-gray-300 focus:outline-none focus:border-primary"
              placeholder="Description write here..."
            />
          </div>
          <input type="submit" value="Add Toy" className="my-btn w-full my-10"/>
      </form>
    </div>
  );
};

export default AddToys;
