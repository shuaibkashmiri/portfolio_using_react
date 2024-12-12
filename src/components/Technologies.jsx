import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-gray-800 pb-24">
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-16 text-center text-5xl font-bold text-white"
      >
        Technologies
      </motion.h1>

      {/* Technologies Icons */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {/* Node.js */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-800 p-6 bg-gray-900 shadow-lg"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        {/* React.js */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-800 p-6 bg-gray-900 shadow-lg"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-800 p-6 bg-gray-900 shadow-lg"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-800 p-6 bg-gray-900 shadow-lg"
        >
          <FaJsSquare className="text-7xl text-yellow-400" />
        </motion.div>

        {/* HTML5 */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-800 p-6 bg-gray-900 shadow-lg"
        >
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>

        {/* CSS3 */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-800 p-6 bg-gray-900 shadow-lg"
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
