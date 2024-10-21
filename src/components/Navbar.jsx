import React from 'react'
import logo from "../assets/logodf.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
<div className='flex flex-shrink-0 items-center'>
<img src={logo} alt="logo" className='mx-2 w-36'/>
</div>
<div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <a href="https://www.linkedin.com/in/shoaib-mushtaq-bhat-9a2666190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin/></a>
    <a href="https://github.com/shuaibkashmiri" target='_blank'><FaGithub/></a>
    <a href="https://www.instagram.com/shuaib_kashmiri_/" target='_blank'><FaInstagram/></a>
    <a href=""><FaSquareXTwitter/></a>
   
</div>
    </nav>
  )
}

export default Navbar