"use client";
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate = "visible"
      className='pl-[36px] flex flex-row items-center justify-center sm:pl-[4rem] sm:pr-[1rem] mt-40 w-full z-[20] xl:pl-[7rem] xl:pr-[8rem]'  
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box px-[7px] sm:py-[7px] sm:px-[6px] border border-[#7042f88b] opacity-[1]'
        >
          <SparklesIcon className='text-[#b49bff] mr-[2px] sm:mr-[10px] h-5 sm:w-5 w-[13px]' />
          <h1 className='Welcome-text sm:text-[10px] xl:text-[18px] text-[7px]'>
            <a href="/" className="cursor-pointer">My Portfolio.</a>
          </h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[15px] mt-[-9px] flex flex-col sm:gap-6 sm:mt-[-11px] sm:text-[30px] md:text-[35px] font-bold text-white max-w-[600px] w-auto h-auto xl:text-[49px]'
        >
            <span>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>{" "}Hello, 
              <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 sm:mt-[-1px]'>I&apos;m Mitumoni Kalita</div>{" "}</span>
            
            </span>
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-[8px] mt-[-14px] sm:text-[14px] md:text-[18px] sm:w-[114%] sm text-white font-mono sm:mt-[-5px] max-w-[600px] xl:text-[22px]'
        >
            Mitumoni Kalita is a final year Computer Science and Engineering Undergraduate student with a fervent passion for Web Development, AI/ML, and the relentless pursuit of knowledge in cutting-edge technologies.
        </motion.p>
        <motion.a
        variants={slideInFromLeft(1)}
        href="/MITUMONI_KALITA_RESUME.pdf"
        target='_blank'
        className='text-[7px] mt-[-11px] max-w-[79px] sm:py-2 md:py-[9px] md:text-[15px] button-primary text-center font-mono text-white cursor-pointer rounded-lg sm:text-[12px] sm:max-w-[143px] md:max-w-[180px] xl:max-w-[200px] xl:text-[19px]'
        >
            Download Resume!
        </motion.a>
      </div>

      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: [0, -20, 0, 20, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 4,
          ease: "easeInOut" 
        }}
        variants={slideInFromRight(1)}
        className='w-[69%] mr-[33px] sm:w-[82%] md:w-[55%] xl:w-[77%] sm:h-full flex justify-center items-center'
      >
        <Image 
          src='/newHeaderImg.png'
          alt="work icons"
          height={600}
          width={600} 
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;