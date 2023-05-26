import React, { useEffect, useState } from "react";
import Toy from "../../SingleComponents/Toy";
import { FaSearch } from "react-icons/fa";
import setTitle from "../../../utls/ControlTitle/setTitle";
import Loading from "../../Shared/Loading/Loading";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const [allData, setAllData] = useState([]);
  const [totalToys, setTotalToys] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const toyPerPage = 20;
  const totalPages = Math.ceil(totalToys / toyPerPage);
  const pageNumbers = [...Array(totalPages).keys()]
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetch("https://sweet-toys-server1.vercel.app/total-toys")
      .then((res) => res.json())
      .then((data) => setTotalToys(data.totalToys));
  }, []);
  useEffect(()=>{
    fetch(`https://sweet-toys-server1.vercel.app/search?text=${searchText}`)
    .then(res => res.json())
    .then(data => setAllData(data))
    .catch((error) => {
      console.error('Error occurred during search:', error);
    });
  },[searchText])
  const handleSearch = (e) => {
    setSearchText(e.target.value)
  };
  // pagination data fetch
  useEffect(()=>{
    const pageData = async()=>{
      const res = await fetch(`https://sweet-toys-server1.vercel.app/pagination?page=${currentPage}`);
      const data = await res.json();
      setAllData(data)
    }
    pageData();
  },[currentPage, totalToys])
  setTitle("All Toys");
  return (
    <div className="min-h-[65vh] md:my-10 max-container">
      <div className="w-[80%] md:w-[50%] h-10 rounded-full border flex items-center mt-16 mb-5 mx-auto">
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
      {allData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table w-full my-3 md:my-0 z-0">
            <thead className="bg-primary">
              <tr>
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
              {allData?.map((toy, index) => (
                <Toy key={toy._id} toy={toy} index={index}></Toy>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Loading></Loading>
      )}
      <div className="flex justify-center my-5">
        <div className="btn-group">
          {
            pageNumbers?.map((number)=> <button key={number} onClick={()=> setCurrentPage(number + 1)} className={currentPage == number + 1 ? 'btn btn-secondary' : 'btn btn-primary'}>{number + 1}</button>)
          }
        </div>
      </div>
    </div>
  );
};

export default AllToys;
