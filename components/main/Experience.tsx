"use client"
import { Experience_data } from '@/contents'
import React from 'react'
import {VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { useInView } from 'react-intersection-observer'



export default function Experience() {
    const {ref , inView } = useInView({
      threshold : 0
    });
    return (
      <section ref={ref}
       id='experience' className="flex flex-col items-center mt-[-120px]">
        <div className="flex justify-center items-center w-full py-20">
          <h1 className='text-[24px] sm:text-[46px] font-bold font-serif xl:text-[52px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
            My Experience
          </h1>
        </div>
    <VerticalTimeline lineColor=" " animate={true}>
          {
            Experience_data.map((item, index) =>
                (
              <VerticalTimelineElement
                key={index}
                visible={inView}
                contentStyle={{

                  background: "linear-gradient(to right, #fc5c7d, #6a82fb)",
                  boxShadow: "none",
                  border: "3px solid white",
                  borderRadius: "12px",
                  textAlign: "left",
                  padding: "1.3rem 2rem"
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid white",
                }}
                date = {item.date}
                style={{color:"white"}}
                
                iconStyle={{
                  background: "linear-gradient(to right, #D16A8A, #6E18A3)",
                  fontSize: "1.5rem",
                  color:"white"
                }}
                icon={item.icon}
              >
                <h3 className="text-[11px] font-bold text-white capitalize font-serif sm:text-[22px] sm:leading-[23px] xl:text-[26px]">{item.title}</h3>
                <h6 className="text-[9px] font-bold !mt-0 font-com  sm:text-[16px] text-white xl:text-[19px]">{item.location}</h6>
                <div className="text-[9px] !mt-1 font-light sm:text-[15px] sm:leading-[18px] font-dmserif text-white xl:text-[18px] xl:leading-[21px]">{item.description}</div>
              </VerticalTimelineElement>
            ))
          }
        </VerticalTimeline>
      </section>
    );
  }