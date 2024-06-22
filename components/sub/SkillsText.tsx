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
        className='text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold font-mono mt-[10px] text-center mb-28 '>
            Skills and Technologies   
        </motion.div> 


    </div>
  )
}

export default SkillsText