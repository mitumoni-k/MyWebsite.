"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'

const SkillsText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromLeft(0.5)} 
        className='text-[22px] sm:text-[44px] md:text-[53px] xl:text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold font-serif mt-[10px] text-center sm:mb-[38px] '>
            Skills and Technologies   
        </motion.div> 


    </div>
  )
}

export default SkillsText