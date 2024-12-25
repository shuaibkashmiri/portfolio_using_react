import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-900 py-8">
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
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/shuaibkashmiri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-400 transition-colors text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shoaib-mushtaq-bhat-9a2666190/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-400 transition-colors text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/shuaib_kashmiri_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-400 transition-colors text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/mohammadshuaib786/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-400 transition-colors text-2xl"
              >
                <FaFacebook />
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
