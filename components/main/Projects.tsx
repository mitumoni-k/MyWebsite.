"use client"
import React, { ReactElement } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/legacy/image";






function Projects() {
  const settings: any = {
    dots: true,
    // autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      }
    ],
  }
  return (
    <div id="projects" className=' mt-[-127px] flex flex-col items-center justify-center py-20'>
       <h1 className='text-[24px] sm:text-[46px] font-bold font-serif text-transparent xl:text-[52px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
         Projects Corner
      </h1>
    <div className="w-3/4 m-auto sm:w-[58%] sm:mt-[-77px] lg:w-[63%] mt-[-105px]">
      <div className="mt-20  flex flex-col gap-4 md:flex-col md:gap-4">
      <Slider {...settings}>
        {data.map((item,index) => (
          <div className="bg-white h-full text-black rounded-xl object-cover" key={item.id}>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-full w-full">
                <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src={item.img} alt={item.alt} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] transition-all duration-500 group-hover:translate-y-0">

                <h1 className="text-[14px] mt-[19px] font-dmserif text-2xl font-bold text-white sm:mt-[21px] sm:text-[20px] md:text-[26px] md:mt-[0px] lg:text-[19px] lg:mt-[-9px] xl:text-[28px]">{item.title}</h1>

                <p className="text-[11px] mt-[-9px] mb-[1px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-[12px] sm:mt-[-11px] md:text-[16px] md:mt-[1px] lg:text-[10px] lg:mt-[-2px] lg:leading-[13px] lg:mb-[17px] xl:text-[17px] xl:leading-[15px]">{item.TechStack}</p>

                <p className="text-[7px] mb-[6px] leading-[9px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-[8px] sm:leading-[13px] sm:mt-[-13px] md:leading-[18px] md:text-[14px] md:mt-[3px] lg:leading-[11px] lg:text-[9px] lg:mt-[-12px] xl:text-[15px] xl:leading-[21px] xl:mt-[-4px]">{item.description}</p>

                <button className="text-[7px] rounded-full bg-neutral-900 px-3.5 sm:py-1 sm:px-1.5 sm:text-[8px] font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-slate-500 md:text-[15px] lg:text-[10px] xl:text-[13px]">Live Demo</button>


                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
    </div>
    </div>

)};



const data = [
  {
    id : 1,
    img:'/To_do_list.png',
    title:'To-do-List App',
    description:'This project aimed to demonstrate my proficiency in building interactive web applications, emphasizing user experience and effective task management. Implemented key features, including adding, editing and deleting tasks, as well as marking tasks as completed.',
    githubLink : 'https://github.com/mitumoni-k?tab=repositories',
    liveDemoLink : 'https://github.com/mitumoni-k?tab=repositories',
    alt : 'To-do app',
    TechStack : 'Tech Stack - React , Tailwind CSS.'
  },
  {
    id : 2,
    img: '/weather_app.jpg',
    title: 'Weather forecasting App',
    description: 'A feature-rich weather application to provide real-time weather information, utilized React Hooks to manage state and lifecycle within the application, ensuring efficient data retrieval and rendering. ',
    githubLink : 'https://github.com/mitumoni-k?tab=repositories',
    liveDemoLink :  'https://github.com/mitumoni-k?tab=repositories',
    alt : 'Weather app',
    TechStack : 'Tech Stack - React, Tailwind CSS,  Fetch API(OpenWeather)' 
  },
  {
    id : 3,
    img: '/chat_application.jpg',
    title: 'UIchat',
    description: 'Spearheaded the design and implementation of a modern chat application utilizing MERN stack technologies and Socket.IO for real-time messaging, enhancing user engagement and fostering dynamic communication experiences.',
    githubLink : 'https://github.com/mitumoni-k?tab=repositories',
    liveDemoLink :  'https://github.com/mitumoni-k?tab=repositories',
    alt : 'chat app',
    TechStack : 'Tech Stack - MongoDB, Express.js, React.js , Node.js , Socket.IO' 
  },
  {
    id : 4,
    img : '/blood_bank.png',
    title : 'B-Hero App',
    description : 'Developed a user-friendly online platform, Blood-Hero, facilitating seamless blood donation and transfusion processes for donors, hospitals, and organizations, with integrated map features for locating nearby blood donation centers and hospitals.',
    githubLink  : 'https://github.com/mitumoni-k?tab=repositories',
    liveDemoLink  :  'https://github.com/mitumoni-k?tab=repositories',
    alt : 'blood bank app',
    TechStack : 'Tech Stack - MySQL, ExpressJs, ReactJs, NodeJs '
  },


]


export default Projects;