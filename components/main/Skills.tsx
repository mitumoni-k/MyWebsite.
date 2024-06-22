import { Backend_skill, Full_stack, Prog_languages, Skill_data } from '@/contents'
import React from 'react'
import SkillsDataProvider from '../sub/SkillsDataProvider'
import SkillsText from '../sub/SkillsText'

const Skills = () => {
  return (
    <section 
    id='skills'
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-5 mt-[30px]'
    style={{transform : "scale(0.8"}}>
        <SkillsText />
        <div className='flex flex-nowrap flex-row sm:justify-center sm:flex-nowrap mt-4 sm:gap-4 items-center'>
            {Skill_data.map((image, index) =>(
                <SkillsDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                image_name={image.skill_name}
                experience = {image.exp}
                />
            ))}
        </div>

        <div className='flex flex-nowrap flex-row sm:justify-center sm:flex-nowrap mt-4 sm:gap-4 items-center'>
            {Backend_skill.map((image, index) =>(
                <SkillsDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                image_name={image.skill_name}
                experience = {image.exp}
                />
            ))}
        </div>
        <div className='flex flex-nowrap flex-row sm:justify-center sm:flex-nowrap mt-4 sm:gap-4 items-center'>
            {Prog_languages.map((image, index) =>(
                <SkillsDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                image_name={image.skill_name}
                experience = {image.exp}
                />
            ))}
        </div>
        <div className='flex flex-nowrap flex-row sm:justify-center sm:flex-nowrap mt-4 sm:gap-4 items-center'>
            {Full_stack.map((image, index) =>(
                <SkillsDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                image_name={image.skill_name}
                experience = {image.exp}
                />
            ))}
        </div>


        <div className='w-full h-full absolute'>
            <div className='sm:w-full sm:h-full z-[-10] opacity-30 absolute sm:flex items-center justify-center bg-cover'>
                <video
                className='sm:w-full sm:h-auto'
                preload='false'
                playsInline
                loop
                muted
                autoPlay
                src='/cards-video.webm' />
        </div>
        </div>
    </section>
  )
}

export default Skills
