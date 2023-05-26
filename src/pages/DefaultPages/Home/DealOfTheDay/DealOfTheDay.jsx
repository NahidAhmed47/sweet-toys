import React, { useState, useEffect } from "react";
import { FaRegEye, FaRegHeart, FaRegStar, FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import AOS from 'aos';
import 'aos/dist/aos.css';

const DealOfTheDay = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [offerToy, setOfferToy] = useState(false)
  useEffect(() => {
    const calculateRemainingTime = () => {
      const targetDate = new Date("2023-06-01");
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference <= 0) {
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setRemainingTime({ days, hours, minutes, seconds });
      }
    };

    const intervalId = setInterval(calculateRemainingTime, 1000);

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
    };
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="my-10 md:mt-24 md:mb-20 max-container overflow-hidden relative">
      <div className="w-full flex justify-center items-end">
        <h1 className="text-2xl md:text-4xl font-bold">Deal Of The Day</h1>
        <div className="w-2 h-2 rounded-full bg-secondary mb-1 ml-1"></div>
      </div>
      {/* main container start from here */}
      <div data-aos="fade-up" className=' my-10'>
        <div className="grid md:grid-cols-2 gap-5">
          {/* single card start from here */}
          <div className="grid md:grid-cols-2 bg-[#F6F7F8] p-3 rounded-xl hover:scale-[0.98] duration-300">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute top-3 z-10 bg-secondary left-3 px-3 rounded-full text-sm text-center text-white text-medium ">
                <p>Offer!</p>
              </div>
              <div className="relative bg-white h-full w-full pt-3">
                <img
                  src="https://i.ibb.co/TrhNHyV/teddy1.jpg"
                  className="w-auto h-[80%] mx-auto rounded-xl"
                  alt=""
                />
                <div className="text-center absolute bottom-5 left-0 right-0">
                  <Rating
                    emptySymbol={<FaRegStar className="text-orange-400" />}
                    fullSymbol={<FaStar className="text-orange-400" />}
                    fractions={2}
                    initialRating={4.5}
                    readonly
                  />
                </div>
              </div>
              <div className="bg-black absolute left-0 rounded-xl top-0 h-full w-full bg-opacity-0 duration-300 opacity-0 hover:opacity-100">
                <div className="space-y-1 flex flex-col items-end pt-3 pr-2">
                  <div className="rounded-full h-8 w-8 mr-1 bg-secondary duration-300  flex items-center justify-center">
                    <FaRegEye className="text-white w-4 h-4"></FaRegEye>
                  </div>
                  <div className="rounded-full h-8 w-8 mr-1 bg-secondary duration-300  flex items-center justify-center">
                    <FaRegHeart className="text-white w-4 h-4"></FaRegHeart>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-left w-full  py-5 px-7 space-y-3">
              <div>
                <h1 className="text-lg font-bold ">Softy Teddy</h1>
                <p className="text-secondary text-base font-bold">
                  <del className="text-xs text-slate-500">$89.00</del> $58.00
                </p>
              </div>
              <p className="text-slate-600 font-mono">
              The Softy Teddy is often the key ingredient to many mixed-breed teddy-bear dogs, but purebreds.
              </p>
              <div className="flex justify-between text-xl font-bold font-mono">
                <div className="w-14 h-14 bg-white flex justify-center items-center rounded-full shadow-lg ">
                  {remainingTime.days}
                </div>
                <div className="w-14 h-14 bg-white flex justify-center items-center rounded-full shadow-lg ">
                  {remainingTime.hours}
                </div>
                <div className="w-14 h-14 bg-white flex justify-center items-center rounded-full shadow-lg ">
                  {remainingTime.minutes}
                </div>
                <div className="w-14 h-14 bg-white text-secondary flex justify-center items-center rounded-full shadow-lg ">
                  {remainingTime.seconds}
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-base font-mono font-normal text-[#848684]">
                  Days
                </p>
                <p className="text-base font-mono font-normal text-[#848684]">
                  Hours
                </p>
                <p className="text-base font-mono font-normal text-[#848684]">
                  Minutes
                </p>
                <p className="text-base font-mono font-normal text-[#848684]">
                  Seconds
                </p>
              </div>
              <button className="my-btn">ADD TO CART</button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 bg-[#F6F7F8] p-3 rounded-xl hover:scale-[0.98] duration-300">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute z-10 top-3 left-3 px-3 rounded-full text-sm text-center text-white text-medium bg-secondary">
                <p>Offer!</p>
              </div>
              <div className="relative bg-white h-full w-full pt-3">
                <img
                  src="https://i.ibb.co/xDSx509/teddy4.jpg"
                  className="w-auto h-[80%] mx-auto rounded-xl"
                  alt=""
                />
                <div className="text-center absolute bottom-5 left-0 right-0">
                  <Rating
                    emptySymbol={<FaRegStar className="text-orange-400" />}
                    fullSymbol={<FaStar className="text-orange-400" />}
                    fractions={2}
                    initialRating={3.8}
                    readonly
                  />
                </div>
              </div>
              <div className="bg-black absolute left-0 rounded-xl top-0 h-full w-full bg-opacity-0 duration-300 opacity-0 hover:opacity-100">
                <div className="space-y-1 flex flex-col items-end pt-3 pr-2">
                  <div className="rounded-full h-8 w-8 mr-1 bg-secondary duration-300  flex items-center justify-center">
                    <FaRegEye className="text-white w-4 h-4"></FaRegEye>
                  </div>
                  <div className="rounded-full h-8 w-8 mr-1 bg-secondary duration-300  flex items-center justify-center">
                    <FaRegHeart className="text-white w-4 h-4"></FaRegHeart>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-left w-full  py-5 px-7 space-y-3">
              <div>
                <h1 className="text-lg font-bold ">Fuzzy Yogi</h1>
                <p className="text-secondary text-base font-bold">
                  <del className="text-xs text-slate-500">$110.00</del> $79.00
                </p>
              </div>
              <p className="text-slate-600 font-mono">
              The Fuzzy Yogi, commonly known as a Fuzzy,” is one of the most affectionate purebred teddy-bear dogs. 
              </p>
              <div className="flex justify-between text-xl font-bold font-mono">
                <div className="w-14 h-14 bg-white flex justify-center items-center rounded-full shadow-lg ">
                  {remainingTime.days}
                </div>
                <div className="w-14 h-14 bg-white flex justify-center items-center rounded-full shadow-lg ">
                  {remainingTime.hours}
                </div>
                <div className="w-14 h-14 bg-white flex justify-center items-center rounded-full shadow-lg ">
                  {remainingTime.minutes}
                </div>
                <div className="w-14 h-14 bg-white text-secondary flex justify-center items-center rounded-full shadow-lg ">
                  {remainingTime.seconds}
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-base font-mono font-normal text-[#848684]">
                  Days
                </p>
                <p className="text-base font-mono font-normal text-[#848684]">
                  Hours
                </p>
                <p className="text-base font-mono font-normal text-[#848684]">
                  Minutes
                </p>
                <p className="text-base font-mono font-normal text-[#848684]">
                  Seconds
                </p>
              </div>
              <button className="my-btn">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-3">
        <div onClick={()=> setOfferToy(!offerToy)} className="rounded-full h-8 w-8 mr-1 border border-[#cccfd1] hover:bg-secondary  flex items-center justify-center hover:text-white text-[#898b8b] duration-300">
          <FaAngleLeft className="w-5 h-5"></FaAngleLeft>
        </div>
        <div onClick={()=> setOfferToy(!offerToy)} className="rounded-full h-8 w-8 mr-1 border border-[#cccfd1] hover:bg-secondary  flex items-center justify-center hover:text-white text-[#898b8b] duration-300">
          <FaAngleRight className="w-5 h-5"></FaAngleRight>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
