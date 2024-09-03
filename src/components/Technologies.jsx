import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaHtml5 ,FaNodeJs,FaGitAlt,FaCss3Alt,FaJsSquare} from "react-icons/fa";
import { SiMongodb } from 'react-icons/si';

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className='text-7xl text-green-600'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl text-green-600'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJsSquare className='text-7xl text-yellow-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className='text-7xl text-orange-600'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className='text-7xl text-sky-500'/>
            </div>
            
        </div>
    </div>
  )
}

export default Technologies