"use client"
import React, { ReactElement } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/legacy/image";






function Projects() {
  const settings: any = {
    dots: true,
    autoplay: true,
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
      },
    ],
  }
  return (
    <div className='flex flex-col items-center justify-center py-20'>
       <h1 className='text-[60px] sm:text-[80px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
         Projects Corner
      </h1>
    <div className="w-3/4 m-auto">
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
                <h1 className="font-dmserif text-2xl font-bold text-white">{item.title}</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">{item.TechStack}</p>
                <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.description}</p>

                <button className="rounded-full bg-neutral-900 py-2 px-3.5 sm:py-1 sm:px-1.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-slate-500">Live Demo</button>


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
    title: 'MERNChat',
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
    description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis cumque aut adipisci illum, earum officia sit cupiditate quibusdam, maxime perferendis atque aliquid nam corrupti minus dolore? Temporibus mollitia hic quos?',
    githubLink  : 'https://github.com/mitumoni-k?tab=repositories',
    liveDemoLink  :  'https://github.com/mitumoni-k?tab=repositories',
    alt : 'blood bank app',
    TechStack : 'Tech Stack - MySQL, Next.js , OpenMap'
  },


]


export default Projects;