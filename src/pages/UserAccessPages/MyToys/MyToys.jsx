import React, { useContext, useEffect, useState } from "react";
import Toy from "../../SingleComponents/Toy";
import { FaSearch } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";
import MyToyRow from "../../SingleComponents/MyToyRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import setTitle from "../../../utls/ControlTitle/setTitle";
import Loading from "../../Shared/Loading/Loading";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://sweet-toys-server1.vercel.app/my-toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user, control]);
  // handle search 
  const handleSearch = (e) => {
    fetch(`https://sweet-toys-server1.vercel.app/teddy-data/${e.target.value}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  };
  // delete from database
  const handleDeleteToy = (id) => {
    fetch(`https://sweet-toys-server1.vercel.app/teddy-data/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = myToys.filter((toy) => toy._id != id);
          setMyToys(remaining);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Deleted Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  // handle update toy
  const handleUpdateToy = (data) => {
    const toyData = { ...data };
    delete toyData._id;
    fetch(`https://sweet-toys-server1.vercel.app/updateToy/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Toys Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setControl(!control);
        }
      });
  };
  // filter by low to high price data
  const handlePriceFilter = (e) => {
    if(e.target.value == 'low-to-high'){
      fetch(`https://sweet-toys-server1.vercel.app/my-toys/descending-price/${user?.email}`)
      .then(res => res.json())
      .then(data => setMyToys(data))
    }
    else if(e.target.value == 'high-to-low'){
      fetch(`https://sweet-toys-server1.vercel.app/my-toys/ascending-price/${user?.email}`)
      .then(res => res.json())
      .then(data => setMyToys(data))
    }
    else{
      fetch(`https://sweet-toys-server1.vercel.app/my-toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
    }
  }
  setTitle("My Toys");
  return (
    <div className="min-h-[65vh] md:my-10 max-container">
      <div className="md:w-[50%] h-10 rounded-full border hidden md:flex items-center mt-16 mb-5 mx-auto">
        <input
          type="search"
          name="search"
          id=""
          className="w-[95%] h-full outline-none px-5 rounded-full"
          placeholder="Search Toy..."
          onChange={handleSearch}
        />
        <div className="rounded-full h-8 w-8 mr-1 bg-secondary  flex items-center justify-center">
          <FaSearch className="bg-secondary text-white w-4 h-4"></FaSearch>
        </div>
      </div>
      <div className="my-3">
        <select onChange={handlePriceFilter} className="select outline-none w-full max-w-[150px]">
          <option value='filter' selected disabled>
            Filter by Price
          </option>
          <option value='low-to-high'>Low to High</option>
          <option value='high-to-low'>High to Low</option>
          <option value='default'>Default Price</option>
        </select>
      </div>
      {myToys.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table w-full z-0">
            <thead className="bg-primary">
              <tr className="text-center">
                <th>No.</th>
                <th>Image</th>
                <th>Toy Name</th>
                <th>Seller</th>
                <th>Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myToys?.map((toy, index) => (
                <MyToyRow
                  key={toy._id}
                  toy={toy}
                  index={index}
                  handleDeleteToy={handleDeleteToy}
                  handleUpdateToy={handleUpdateToy}
                ></MyToyRow>
              ))}
            </tbody>
          </table>
        </div>
      ) : <Loading></Loading>}
    </div>
  );
};

export default MyToys;
