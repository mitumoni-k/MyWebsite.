import React from "react";
import {LuGraduationCap} from 'react-icons/lu'
import {CgWorkAlt} from 'react-icons/cg'
import {FaPython} from 'react-icons/fa'

export const Skill_data = [
    {
      skill_name: "Html 5",
      Image: "/html.png",
      width: 100,
      height: 100,
      exp : "2+ years"
    },
    {
      skill_name: "Css",
      Image: "/css.png",
      width: 100,
      height: 100,
      exp : "2+ years"

    },
    {
      skill_name: "Tailwind Css",
      Image: "/tailwind.png",
      width: 100,
      height: 100,
      exp : "1+ years"

    },
    {
      skill_name: "React",
      Image: "/react.png",
      width: 100,
      height: 100,
      exp : "1+ years"

    },
    {
      skill_name: "Type Script",
      Image: "/ts.png",
      width: 100,
      height: 100,
      exp : "0.5+ years"

    },
    {
      skill_name: "Next js 13",
      Image: "/next.png",
      width: 100,
      height: 100,
      exp : "0.5+ years"

    },  
  ];
  
  export const Socials = [
    {
      name: "Discord",
      src: "/discord.svg",
    },
    {
      name: "Facebook",
      src: "/facebook.svg",
    },
    {
      name: "Instagram",
      src: "/instagram.svg",
    },
  ];
  
  
  export const Backend_skill = [
    {
      skill_name: "Node js",
      Image: "/node-js.png",
      width: 100,
      height: 100,
      exp : "1+ years"

    },
    {
      skill_name: "Mongo db",
      Image: "/mongodb.png",
      width: 100,
      height: 100,
      exp : "1+ years"

    },
    {
      skill_name: "My SQL",
      Image: "/mysql.png",
      width: 100,
      height: 100,
      exp : "1+ years"

    },
    {
      skill_name: "PostgreSQL",
      Image: "/postger.png",
      width: 100,
      height: 100,
      exp : "Beginner"

    },
    {
      skill_name : "Express",
      Image : "/express.png",
      exp : "1+ years",
      width : 100,
      height : 100
    }
  ];
  
  export const Full_stack = [
    {
      skill_name: "Docker",
      Image: "/docker.webp",
      exp : "Learning",
      width: 100,
      height : 100
    },
  ];
  export const Prog_languages = [
    {
      skill_name : "Python",
      Image : "/python_prev_ui.png",
      exp : "1+ years",
      width : 100,
      height : 100

    },
    {
      skill_name : "C++",
      Image : "/cpp_prev_ui.png",
      exp : "2+ years",
      width : 100 ,
      height : 100

    },
    {
      skill_name: "Java Script",
      Image: "/js.png",
      exp : "1+ years",
      width : 100,
      height : 100

    },
  ]

  export const Experience_data = [
    {
      title: "Graduation",
      location:"Jorhat Engineering College",
      description:" Currently a final year UnderGraduate Student in Computer Science & Engineering Branch",
      icon : React.createElement(LuGraduationCap),
      date : "2021-2025"

    },
    {
      title: "Speech Lab Research Intern",
      location:"Indian Institute of Technology , Guwahati",
      description:"Worked under the Guidance of Dr. Pradip Kumar Das Sir and successfully developed a Gender Recognition Model using neural networks based on a Vocal Dataset which showed 93% of accuracy in its prediction. ",
      icon : React.createElement(CgWorkAlt),
      date : "Jul'23 - Aug'23"
    },
    {
      title: "Python Backend Developer Intern",
      location:"TalenTitan Pvt. Limited",
      description:"Worked in the development and maintenance of real-time stock market reports using Python to provide timely and accurate financial information to clients and stakeholders. ",
      icon : React.createElement(FaPython),
      date : "Oct'23 - Dec'23"
    }
  ];
  
  