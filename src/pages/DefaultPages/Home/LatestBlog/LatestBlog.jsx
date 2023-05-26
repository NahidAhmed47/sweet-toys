import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserAlt, FaComment } from "react-icons/fa";

const LatestBlog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="my-10 md:mt-20 md:mb-20 max-container">
      <div className="w-full flex justify-center items-end">
        <h1 className="text-2xl md:text-4xl font-bold">Latest Blogs</h1>
        <div className="w-2 h-2 rounded-full bg-secondary mb-1 ml-1"></div>
      </div>
      <div className="mt-10 overflow-hidden md:pb-16">
        {/* single blog card start */}
        <div data-aos="fade-left" className="grid md:grid-cols-2 ">
        <div className="grid md:grid-cols-2 bg-white p-2 rounded-xl h-[300px] max-w-[90%] shadow-2xl justify-self-center">
            <div className="relative rounded-l-xl overflow-hidden">
              <div className="relative bg-white h-full w-full">
                <img
                  src="https://i.ibb.co/YLjCxVP/blogpic1.jpg"
                  className="w-full h-full"
                  alt=""
                />
              </div>
            </div>
            <div className="text-left w-full  py-5 px-7 flex flex-col justify-between bg-[#F6F7F8] rounded-r-xl">
              <div>
                <h1 className="text-lg md:text-2xl text-primary font-bold ">February 19</h1>
                <div className="text-secondary text-base font-bold mt-1 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <FaUserAlt className="w-3 h-3 text-secondary"></FaUserAlt>
                        <p className="text-xs font-medium text-secondary">By Evan Joy</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaComment className="w-3 h-3 text-secondary"></FaComment>
                        <p className="text-xs font-medium text-secondary">3 Comments</p>
                    </div>
                </div>
                <h1 className="text-lg font-semibold mt-4">New treat for Teddy</h1>
              </div>
              <p className="text-slate-600 font-mono">
              The Fuzzy Yogi, is one of the most affectionate purebred.
              </p>
              <button className="my-btn">READ MORE &#8594;</button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="border h-[80%] border-secondary opacity-70">

            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="grid md:grid-cols-2 mt-8">
        <div className="flex items-center justify-self-end">
            <div className="border h-[80%] border-primary opacity-70">

            </div>
          </div>
        <div className="grid md:grid-cols-2 justify-self-center bg-white p-2 rounded-xl h-[300px] max-w-[90%] shadow-2xl">
            <div className="relative rounded-l-xl overflow-hidden">
              <div className="relative bg-white h-full w-full">
                <img
                  src="https://i.ibb.co/YD4BM68/blogpic2.jpg"
                  className="w-auto h-[100%] mx-auto "
                  alt=""
                />
              </div>
            </div>
            <div className="text-left w-full  py-5 px-7 flex flex-col justify-between bg-[#F6F7F8] rounded-r-xl">
              <div>
                <h1 className="text-lg md:text-2xl text-primary font-bold ">March 04</h1>
                <div className="text-secondary text-base font-bold mt-1 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <FaUserAlt className="w-3 h-3 text-secondary"></FaUserAlt>
                        <p className="text-xs font-medium text-secondary">By Shaudi Akram</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaComment className="w-3 h-3 text-secondary"></FaComment>
                        <p className="text-xs font-medium text-secondary">6 Comments</p>
                    </div>
                </div>
                <h1 className="text-lg font-semibold mt-4">Supper caring for teddy</h1>
              </div>
              <p className="text-slate-600 font-mono">
              The Fuzzy Yogi, is one of the most affectionate purebred.
              </p>
              <button className="my-btn">READ MORE &#8594;</button>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="grid md:grid-cols-2 ">
        <div className="grid mt-8 md:mt-0 md:grid-cols-2 bg-white p-2 rounded-xl h-[300px] max-w-[90%] shadow-2xl justify-self-center">
            <div className="relative rounded-l-xl overflow-hidden">
              <div className="relative bg-white h-full w-full">
                <img
                  src="https://i.ibb.co/BrtWm2H/blogpic5.jpg"
                  className="w-auto h-[100%] mx-auto "
                  alt=""
                />
              </div>
            </div>
            <div className="text-left w-full  py-5 px-7 flex flex-col justify-between bg-[#F6F7F8] rounded-r-xl">
              <div>
                <h1 className="text-lg md:text-2xl text-primary font-bold ">April 27</h1>
                <div className="text-secondary text-base font-bold mt-1 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <FaUserAlt className="w-3 h-3 text-secondary"></FaUserAlt>
                        <p className="text-xs font-medium text-secondary">By Evan Joy</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaComment className="w-3 h-3 text-secondary"></FaComment>
                        <p className="text-xs font-medium text-secondary">7 Comments</p>
                    </div>
                </div>
                <h1 className="text-lg font-semibold mt-4">Toy Wash much easy</h1>
              </div>
              <p className="text-slate-600 font-mono">
              The Fuzzy Yogi, is one of the most affectionate purebred.
              </p>
              <button className="my-btn">READ MORE &#8594;</button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="border h-[80%] border-secondary opacity-70">

            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="grid md:grid-cols-2 mt-8">
        <div className="flex items-center justify-self-end">
            <div className="border h-[80%] border-primary opacity-70">

            </div>
          </div>
        <div className="grid md:grid-cols-2 justify-self-center bg-white p-2 rounded-xl h-[300px] max-w-[90%] shadow-2xl">
            <div className="relative rounded-l-xl overflow-hidden">
              <div className="relative bg-white h-full w-full">
                <img
                  src="https://i.ibb.co/0mgKGK8/teddy-2.jpg"
                  className="w-auto h-[100%] mx-auto "
                  alt=""
                />
              </div>
            </div>
            <div className="text-left w-full  py-5 px-7 flex flex-col justify-between bg-[#F6F7F8] rounded-r-xl">
              <div>
                <h1 className="text-lg md:text-2xl text-primary font-bold ">May 21</h1>
                <div className="text-secondary text-base font-bold mt-1 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <FaUserAlt className="w-3 h-3 text-secondary"></FaUserAlt>
                        <p className="text-xs font-medium text-secondary">By William Clark</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaComment className="w-3 h-3 text-secondary"></FaComment>
                        <p className="text-xs font-medium text-secondary">0 Comments</p>
                    </div>
                </div>
                <h1 className="text-lg font-semibold mt-4">Fun with Teddy</h1>
              </div>
              <p className="text-slate-600 font-mono">
              The Fuzzy Yogi, is one of the most affectionate purebred.
              </p>
              <button className="my-btn">READ MORE &#8594;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
