import React from 'react'
import './Projects.css'
import Amazon from '../../assets/project-1.jpg'
import GoldsGym from '../../assets/project-2.jpg'
import Calculator from '../../assets/project-3.png'
import Login_page from '../../assets/project-4.png'
import Zomato from '../../assets/project-5.png'
import ShopyStyle from '../../assets/project-6.png'
import ChatAI from '../../assets/project-7.png'
import tenant from '../../assets/project-8.png'
import { FaArrowRightLong } from "react-icons/fa6";
import AnimateOnScroll from '../Animations/AnimateOnScroll'

const Projects = () => {
    const ProjectLists = [{id:1,image:tenant,title:"Multi-Tenant Sales Dashboard",description:"A React-based frontend application that simulates a SaaS sales platform with tenant-specific data, role-based access, analytics dashboards, and persistent login using localStorage.",tools:["React"],link:"https://github.com/Vikas-singh24/Multi-Tenant-Sales",live:"https://multi-tenant-sales.netlify.app"},{id:2,image:ChatAI,title:"Chat AI", description:"Chat AI is a responsive AI-powered chat application built with React that provides real-time conversations with clean formatting and an intuitive user experience.",tools:["React","TailWind CSS"],link:"https://github.com/Vikas-singh24/Chat-AI", live:"https://chat-ai-ca.netlify.app/"},
        {id:3, image:ShopyStyle,title:"ShopyStyle", description:"An e-commerce website with a modern and attractive UI where users can browse clothing for men, women, and kids. The project emphasizes user experience, product layouts, and clean design.",tools:["React"], link:`https://github.com/Vikas-singh24/E-commerce`, live:"https://shopy-style.netlify.app/"},
         {id:4, image:Zomato ,title:"Zomato UI Clone",description:"A React-based UI clone of the Zomato website focusing on component-based architecture and responsive design. This project demonstrates efficient UI rendering and modern front-end practices.",tools:["React"],link:"https://github.com/Vikas-singh24/Git-MERN/tree/c53cdc70508540816c17a259f40918252bdfbc67/Zomato%20clone%20by%20react/Clone"},
         {id:5, image:Login_page ,title:"“Let’s Chat” -Login Page",description:"A simple login page with client-side validation where users can log in only if all fields are filled and the password is longer than 8 characters. This project focuses on form validation and user interaction.",tools:["HTML", "CSS" ,"JavaScript"], link:"https://github.com/Vikas-singh24/Git-MERN/tree/c53cdc70508540816c17a259f40918252bdfbc67/LoginPage"},
         {id:6, image:Calculator,title:"Simple Calculator", description:"A functional calculator that performs basic arithmetic operations along with trigonometric calculations such as sine, cosine, and tangent. Designed with a clean UI and interactive functionality using JavaScript.",tools:["HTML", "CSS" ,"JavaScript"],link:"https://github.com/Vikas-singh24/Git-MERN/tree/c53cdc70508540816c17a259f40918252bdfbc67/Calculator"},
         {id:7, image:GoldsGym,title:"Gold’s Gym Webpage Clone",description:"A visually engaging clone of the Gold’s Gym website created using HTML and CSS with smooth animations. The project highlights responsive layouts, transitions, and animated UI elements.",tools:['HTML', "CSS"],link:"https://github.com/Vikas-singh24/Git-MERN/tree/c53cdc70508540816c17a259f40918252bdfbc67/GoldsGym%20Clone"},
         {id:8, image:Amazon, title:"Amazon Webpage UI Clone",description:"A responsive UI clone of the Amazon homepage built using pure HTML and CSS. This project focuses on layout design, flexbox, and modern styling techniques to closely replicate the original interface.",tools:['HTML', "CSS"], link:"https://github.com/Vikas-singh24/Git-MERN/tree/c53cdc70508540816c17a259f40918252bdfbc67/Amazon"},
    ]
  return (
    <>
    <div id='projects'>
      <AnimateOnScroll animation='animate' duration='1s'>
      <h1 className='projectHeading'>My <span>Projects</span></h1>
      </AnimateOnScroll>
      <AnimateOnScroll animation='fade-left' duration='1s'>
      <hr className='projectLine'/>
      </AnimateOnScroll>
      <br />
      <AnimateOnScroll className='paraAnimate' animation='fade-right' duration='0.8s'>
              <p className='projectPara'>A curated collection of full stack projects demonstrating my expertise in building modern, scable web applications</p>
              </AnimateOnScroll>

      <div className="projectBox">
        {ProjectLists.map((item)=>(
             <AnimateOnScroll className='projectShow' key={item.id} animation='animate' duration='0.5s'>

            <img className='projectImage' src={item.image} alt="" />
            <h2 className="projectName">{item.title}</h2>
            <p className="projectDescription">{item.description}</p>
            <div className="projectTools">
             {item.tools.map((tool, index) => (
          <span key={index} className={`tool ${tool.toLowerCase()}`}>
            {tool}
          </span>
        ))}
            </div>
            <div className='projectViewBox'>
         <a href={item.link} target='_blank'>  <button  className='projectView'  >Git Hub <FaArrowRightLong/> </button></a> 
         <a href={item.live} target='_blank'>  <button  className='projectView' style={{display: item.id<4? 'block' : 'none'}} >Live <FaArrowRightLong/> </button></a> 
        </div>
        </AnimateOnScroll>
        ))}
       
      </div>
    </div>
    </>
  )
}

export default Projects
