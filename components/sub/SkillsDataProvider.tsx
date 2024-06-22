"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src : string;
    width : number
    height : number
    index : number
    image_name : string
    experience : string
}

const SkillsDataProvider = ({src,width,height,index,image_name,experience} : Props) => {
    const {ref ,inView} = useInView({
        triggerOnce : true
    })
    const imageVariants = {
        hidden : {opacity : 0},
        visible : {opacity : 1}
    }
const animationDelay = 0.3

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    variants={imageVariants}
    animate={inView ? "visible" : "hidden"}
    custom = {index}
    transition={{delay :  index * animationDelay}}>

        <Image className='w-[75%] hover:scale-110 sm:w-[68%] md:w-[70%] xl:w-[100%] xl:mx-[20px] xl:px-[12px] sm:h-[50%] flex justify-center sm:ml-[17px]'
        src={src}
        width={width}
        height={height}
        alt='skill image' />
        <div className='text-white text-[7px] ml-[-13px] font-bold flex justify-center sm:text-[13px]md:text-[16px] xl:text-[20px]'>{image_name}</div>
        <p className='text-white text-[7px] ml-[-13px] font-bold sm:text-[13px] flex justify-center md:text-[16px] xl:text-[20px]'>Exp : {experience}</p>
    </motion.div>

  )
}

export default SkillsDataProvider