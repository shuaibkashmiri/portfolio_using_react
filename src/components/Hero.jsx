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
    <div
      id="hero"
      className="min-h-screen pt-20 md:pt-24 flex items-center justify-center bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Hi, I'm <span className="text-cyan-400">Shoaib Mushtaq</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl mb-6"
            >
              Full-Stack Web Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 mb-8"
            >
              I build exceptional and accessible digital experiences for the
              web.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="#contact"
                className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-500 transition duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <img src={profilePic} alt="Shoaib Mushtaq" className="w-96 h-96" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
