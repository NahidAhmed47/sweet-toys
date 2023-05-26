import React, { useContext, useState } from "react";
import {
  FaBars,
  FaEnvelope,
  FaSearch,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const { user, logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleProfile = () => {
    setProfile(!profile);
  };
  const handleLogOut = () => {
    logOut()
    .then(()=>{
      navigate('/', {replace: true})
    })
    .catch(err =>{
      console.log(err.message);
    })
  }
  const toggleMenu = () => {
    setOpenMenu(!isOpenMenu);
  };
  return (
    <div className="relative md:h-32 border-b w-full px-5 lg:px-0 lg:pb-6 bg-primary md:bg-white">
      <div className="max-container h-full flex items-center justify-between py-3 md:p-0">
        <FaTimes
          className={isOpenMenu ? "md:hidden w-6 h-6 text-white" : "hidden"}
          onClick={toggleMenu}
        ></FaTimes>
        <FaBars
          className={!isOpenMenu ? "md:hidden w-6 h-6 text-white" : "hidden"}
          onClick={toggleMenu}
        ></FaBars>
        <h1 className="text-2xl font-bold text-secondary md:hidden">
          Sweet Toys
        </h1>
        {/* search input */}
        <div className="md:w-[25%] h-10 rounded-full border hidden md:flex items-center">
          <input
            type="search"
            name="search"
            id=""
            className="w-[90%] h-full outline-none px-4 rounded-full"
            placeholder="type here"
          />
          <div className="rounded-full h-8 w-8 mr-1 bg-secondary  flex items-center justify-center">
            <FaSearch className="bg-secondary text-white w-4 h-4"></FaSearch>
          </div>
        </div>
        <img src={logo} alt="logo" className="h-20 w-28 hidden md:block" />
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full h-8 w-8 mr-1 bg-secondary  flex items-center justify-center">
              <FaEnvelope className="bg-secondary text-white w-4 h-4"></FaEnvelope>
            </div>
            <div className="hidden md:block">
              <h3 className="text-base font-semibold ">Email Us</h3>
              <p className="text-sm text-accent">info@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full h-8 w-8 mr-1 bg-secondary  flex items-center justify-center">
              <FaShoppingCart className="bg-secondary text-white w-4 h-4"></FaShoppingCart>
            </div>
            <div className="hidden md:block">
              <h3 className="text-base font-semibold ">Shopping Cart</h3>
              <p className="text-sm text-accent">$0.00 - 0 item</p>
            </div>
          </div>
        </div>
      </div>
      {/* sub nav start */}
      <div
        className={`bg-primary absolute py-2 md:block z-10 ${
          isOpenMenu
            ? "left-0 px-7 rounded-md shadow-xl"
            : "hidden h-fit w-full rounded-full px-5 md:pr-3 max-container -bottom-7  right-0 left-0"
        } `}
      >
        <div className="md:flex justify-between items-center">
          <h1 className="text-secondary text-2xl font-extrabold hidden md:block pb-1">
            <span className="text-white ">Sweet </span>Toys
          </h1>
          <div
            className={`flex gap-3 text-base font-medium text-white ${
              isOpenMenu ? "flex-col" : "flex-row"
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-center py-1 text-secondary px-3 "
                  : "nav-link-hover"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/all-toys"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-center py-1 text-secondary px-3 "
                  : "nav-link-hover"
              }
            >
              All Toys
            </NavLink>
            {
              user && <NavLink
              to="/my-toys"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-center py-1 text-secondary px-3 "
                  : "nav-link-hover"
              }
            >
              My Toys
            </NavLink>
            }
            {
              user && <NavLink
              to="/add-toys"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-center py-1 text-secondary px-3 "
                  : "nav-link-hover"
              }
            >
              Add Toys
            </NavLink>
            }
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-center py-1 text-secondary px-3 "
                  : "nav-link-hover"
              }
            >
              Blogs
            </NavLink>
          </div>
          <div>
            {user ? (
              <div
                className="overflow-hidden w-[35px] h-[35px] rounded-full "
                onClick={handleProfile}
              >
                {
                  user.photoURL === null ? <FaUserAlt className="w-full h-full text-secondary"></FaUserAlt> : <img
                  src={user.photoURL}
                  className="w-full h-full rounded-full origin-center duration-300"
                  alt=""
                  title={user.displayName}
                />
                }
              </div>
            ) : (
              <NavLink
                to="/user/login"
                className="px-4 py-2 text-sm bg-secondary rounded-full duration-300 text-white font-semibold"
              >
                Login
              </NavLink>
            )}
          </div>
          {/* user profile */}
          <div
            onClick={handleProfile}
            className={`w-[250px] z-10 h-fit absolute  rounded-md shadow-md hover:shadow-2xl bg-[#eae4e4] py-8 px-5 ${
              profile ? "-top-0 left-20 md:left-auto md:top-12 md:right-7 " : "hidden"
            } `}
          >
            <div className="w-[120px] h-[120px] mx-auto rounded-full border-2 border-primary overflow-hidden">
              <img
                src={user?.photoURL}
                className="w-[120px] h-[120px] mx-auto rounded-full"
                alt="profile"
              />
            </div>
            <div className="text-center  mt-5 ">
              <h1 className="text-base font-bold">Name: {user?.displayName}</h1>
              <p className="text-xs mt-3">Email: {user?.email}</p>
              <p
                className={
                  user?.emailVerified
                    ? "text-xs text-white mt-1"
                    : "text-xs text-red-500 mt-1"
                }
              >
                {user?.emailVerified
                  ? "Your Email has been verified!"
                  : "Your Email is not verified!"}
              </p>
              <div
                className="mt-4 my-btn"
                onClick={handleLogOut}
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
