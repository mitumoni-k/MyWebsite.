"use client"
import { Socials } from '@/contents'
import Image from 'next/image'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

return (
  <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014CC] backdrop-blur-md z-50 px-10'>
    <div className='w-full h-full flex items-center justify-between m-auto px-[10px]'>
      <div className='flex items-center'>
        <h1 className='font-bold ml-[-32px] lg:text-lg lg:ml-[10px] text-white xl:text-[23px]'>
          <a href='/' className='cursor-pointer'>
            My
            <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400'>
              Portfolio.
            </span>
          </a>
        </h1>
      </div>

      <div className='lg:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-white'>
          {isMenuOpen ? (
            <FaTimes
              size={26}
              className='text-transparent bg-clip-text font-bold'
              style={{
                WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'feather feather-x\'%3E%3Cline x1=\'18\' y1=\'6\' x2=\'6\' y2=\'18\'/%3E%3Cline x1=\'6\' y1=\'6\' x2=\'18\' y2=\'18\'/%3E%3C/svg%3E")',
                WebkitMaskSize: '24px 24px',
                maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'feather feather-x\'%3E%3Cline x1=\'18\' y1=\'6\' x2=\'6\' y2=\'18\'/%3E%3Cline x1=\'6\' y1=\'6\' x2=\'18\' y2=\'18\'/%3E%3C/svg%3E")',
                maskSize: '24px 24px',
                background: 'linear-gradient(to right, #9f7aea, #00bcd4)',
              }}
            />
          ) : (
            <FaBars
              size={29}
              className='text-transparent bg-clip-text font-bold'
              style={{
                WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'feather feather-menu\'%3E%3Cline x1=\'3\' y1=\'12\' x2=\'21\' y2=\'12\'/%3E%3Cline x1=\'3\' y1=\'6\' x2=\'21\' y2=\'6\'/%3E%3Cline x1=\'3\' y1=\'18\' x2=\'21\' y2=\'18\'/%3E%3C/svg%3E")',
                WebkitMaskSize: '24px 24px',
                maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'feather feather-menu\'%3E%3Cline x1=\'3\' y1=\'12\' x2=\'21\' y2=\'12\'/%3E%3Cline x1=\'3\' y1=\'6\' x2=\'21\' y2=\'6\'/%3E%3Cline x1=\'3\' y1=\'18\' x2=\'21\' y2=\'18\'/%3E%3C/svg%3E")',
                maskSize: '24px 24px',
                background: 'linear-gradient(to right, #9f7aea, #00bcd4)',
              }}
            />
          )}
        </button>
      </div>

      <div className={`lg:flex hidden items-center space-x-14`}>
        <a href="/" className="relative font-semibold text-white cursor-pointer lg:text-17 after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center xl:text-[20px]">Home</a>
        <a href="#skills" className="relative font-semibold text-white cursor-pointer lg:text-17 after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center xl:text-[20px]">Skills</a>
        <a href="#experience" className="relative font-semibold text-white cursor-pointer lg:text-17 after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center xl:text-[20px]">Experience</a>
        <a href="#projects" className="relative font-semibold text-white cursor-pointer lg:text-17 after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center xl:text-[20px]">Projects</a>
        <a href="#contact-me" className="relative font-semibold text-white cursor-pointer lg:text-17 after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center xl:text-[20px]">Contact</a>
      </div>
    </div>

    {/* The menu */}
    <div className={`fixed top-[65px] right-0 w-[250px] bg-[#030014CC] backdrop-blur-md lg:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col`}>
      <a href="/" className="text-[13px] relative font-semibold text-white cursor-pointer lg:text-17 w-fit mx-auto my-2 text-center">Home</a>
      <a href="#skills" className="text-[13px] relative font-semibold text-white cursor-pointer lg:text-17 w-fit mx-auto my-2 text-center">Skills</a>
      <a href="#experience" className="text-[13px] relative font-semibold text-white cursor-pointer lg:text-17 w-fit mx-auto my-2 text-center">Experience</a>
      <a href="#projects" className="text-[13px] relative font-semibold text-white cursor-pointer lg:text-17 w-fit mx-auto my-2 text-center">Projects</a>
      <a href="#contact-me" className="text-[13px] relative font-semibold text-white cursor-pointer lg:text-17 w-fit mx-auto my-2 text-center">Contact</a>
    </div>
  </div>
);
}

export default Navbar;