import React from "react";
import logo from "../assets/logodf.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar mb-20 flex items-center justify-between py-6 px-4 bg-gray-900 shadow-lg">
      {/* Logo Section */}
      <div className="logo-container flex items-center">
        <img src={logo} alt="Logo" className="mx-2 w-36" />
      </div>

      {/* Social Links Section */}
      <div className="social-links flex items-center gap-6 text-2xl text-gray-300">
        <a
          href="https://www.linkedin.com/in/shoaib-mushtaq-bhat-9a2666190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shuaibkashmiri"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/shuaib_kashmiri_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-colors duration-300"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="hover:text-blue-500 transition-colors duration-300"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
