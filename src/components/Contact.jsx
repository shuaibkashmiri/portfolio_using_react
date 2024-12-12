import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-gray-900 py-8">
      {/* Footer Container */}
      <div className="container mx-auto px-4">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left text-gray-400"
        >
          {/* Contact Information */}
          <div className="mb-4 lg:mb-0">
            <h2 className="text-xl font-semibold text-white mb-4">
              Get In Touch
            </h2>
            <p className="mb-2">{CONTACT.address}</p>
            <p className="mb-2">{CONTACT.phoneNo}</p>
            <motion.a
              href={`mailto:${CONTACT.email}`}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="text-indigo-600 hover:text-indigo-400 transition-colors"
            >
              {CONTACT.email}
            </motion.a>
          </div>

          {/* Social Media or Additional Info (Optional) */}
          <div className="mt-4 lg:mt-0">
            <h2 className="text-xl font-semibold text-white mb-4">Follow Me</h2>
            <div className="flex justify-center lg:justify-start">
              {/* You can replace with your actual social media links */}
              <a
                href="#"
                className="mr-4 text-indigo-600 hover:text-indigo-400 transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="mr-4 text-indigo-600 hover:text-indigo-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-400 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 text-center py-4 mt-8">
        <p className="text-sm text-gray-500">
          © 2024 Shoaib Mushtaq Bhat. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
