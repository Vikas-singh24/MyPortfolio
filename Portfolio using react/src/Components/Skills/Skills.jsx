import React from 'react'
import './Skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { RiTailwindCssLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import AnimateOnScroll from '../Animations/AnimateOnScroll';
import { SiMysql } from "react-icons/si";
const Skills = () => {
    const skill =[{id:1,logo:<FaHtml5 />,title:"HTML"},
        {id:2,logo:<FaCss3 />,title:"CSS"},
        {id:3,logo:<IoLogoJavascript />,title:"JavaScript"},
        {id:4,logo:<FaReact />,title:"React"},
        {id:5,logo:<BsBootstrap />,title:"Bootstrap"},
        {id:6,logo:<RiTailwindCssLine />,title:"Tailwind CSS"},
        {id:7,logo:<DiNodejs />,title:"Node.js"},
        {id:8,logo:<SiExpress />,title:"Express.js"},
        {id:9,logo:< SiMongodb />,title:"Mongodb"},
        {id:10,logo:< SiMysql />,title:"MySql"}
    ]
  return (
    <>
    <div className='skills'>
     <div className="heading-wrapper">
  <AnimateOnScroll animation='zoom-in' duration='1s'>
    <h1>My <span> Skills</span></h1>
  </AnimateOnScroll>
  <hr />
</div>
      
      <div className="skillsBox ">
        
        {skill.map((item)=>(
          <AnimateOnScroll animation='fade-up' duration='1s'>
            <div className="tech-grid" title={item.title}>
        <div class="icon" >
            {item.logo}        
</div>
 <h3>{item.title}</h3>
</div>
</AnimateOnScroll>
        ))}
    </div>
   
    </div>

    </>
  )
}

export default Skills
