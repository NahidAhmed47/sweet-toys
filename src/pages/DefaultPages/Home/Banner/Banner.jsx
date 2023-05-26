import React from "react";
import { motion } from "framer-motion";

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Banner = () => {
  return (
    <div>
      <motion.div
        className="h-[60vh] md:h-[85vh]"
        style={{
          backgroundImage: `url('https://i.ibb.co/x3y3v50/benner1.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          width: "100%",
          
        }}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 2 }}
      >
        <div className="max-container h-full flex items-center justify-end">
          <motion.div className="space-y-3 md:space-y-7 max-w-[570px] px-5 md:px-0">
            <div className="text-white font-bold px-4 py-2 rounded bg-secondary w-fit ">
              WELCOME TO SWEET TOYS
            </div>{" "}
            <div className="text-4xl md:text-6xl font-extrabold text-black bg-[#EEE0E0] bg-opacity-0">
              Special Edition
            </div>
            <p className="bg-opacity-0 bg-[#EEE0E0] text-accent font-semibold">
            Teddy bears have long held a special place in our hearts, captivating people of all ages with their timeless charm. As cherished companions, they provide comfort, solace, and a sense of security
            </p>
            <button className="my-btn">SHOP NOW</button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
