import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-gray-800 pb-10 bg-gray-900">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-5xl font-bold text-white"
      >
        Projects
      </motion.h2>

      {/* Content Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Project Cards */}
        {PROJECTS.map((project, index) => (
          <div key={index} className="w-full lg:w-1/3 xl:w-1/4 px-4">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between"
            >
              {/* Project Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="rounded-lg shadow-md"
                />
              </div>

              {/* Project Details */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="text-center lg:text-left"
              >
                <h6 className="mb-2 text-xl font-semibold text-white">
                  {project.title}
                </h6>
                <p className="mb-4 text-gray-300">{project.description}</p>

                {/* Project Technologies */}
                <div className="flex flex-wrap justify-center lg:justify-start">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mb-2 rounded-full bg-indigo-600 text-white px-3 py-1 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
