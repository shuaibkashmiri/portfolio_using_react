import React, { useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/home_profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  useEffect(() => {
    document.title = "Shoaib Mushtaq Bhat | Full-Stack Web Developer";
  }, []);

  return (
    <div className="border-b border-gray-800 pb-10 lg:mb-16">
      <div className="flex flex-wrap items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Name */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-5xl font-bold tracking-tight text-white lg:mt-12 lg:text-6xl"
            >
              Shoaib Mushtaq
            </motion.h1>

            {/* Role */}
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl"
            >
              Full-Stack Web Developer
            </motion.span>

            {/* Hero Content */}
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-6 max-w-xl text-center font-light text-gray-400 lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex justify-center lg:justify-end">
            {/* Profile Picture */}
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Shoaib Mushtaq"
              className="w-60 rounded-lg shadow-lg lg:w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
