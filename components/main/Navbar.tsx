import { Socials } from '@/contents'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <div className='h-auto w-auto flex flex-row items-center'>
            <h1 className='font-bold text-lg ml-[10px] flex-[0.6] hidden md:block text-white'>
                <a href='/' className='cursor-pointer'>
                My
                {/* <span className='font-bold text-yellow-500'> */}
                <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400'>
                Portfolio.
                </span>
                </a>

            </h1>
            </div>

            <div className='w-[800px] h-full flex flex-row items-center justify-between sm:mr-10 md:mr-20'>
                <div className='flex items-center justify-between w-full h-full border border-[#0300145e] bg-[#0300145e] mr-[15px] px-[50px] py-[10px]  text-white'>

                    <a href="#home" className="relative font-semibold text-white cursor-pointer text-17 w-fit md:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hidden">Home</a>

                    <a href="#about-me" className="relative font-semibold text-white cursor-pointer text-17 w-fit md:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hidden">About me</a>

                    <a href="#skills" className="relative font-semibold text-white cursor-pointer text-17 w-fit md:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hidden">Skills</a>

                    <a href="#projects" className="relative font-semibold text-white cursor-pointer text-17 w-fit md:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hidden">Projects</a>
                    
                    <a href="#contact-me" className="relative font-semibold text-white cursor-pointer text-17 w-fit md:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hidden">Contact me</a>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default Navbar