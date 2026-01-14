import React from 'react'
import './Home.css'
import { Link } from 'react-scroll'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { RiTailwindCssLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import resume from '../../assets/Vikas_resume_FB.pdf'
import AnimateOnScroll from '../Animations/AnimateOnScroll';
import bg from '../../assets/image.jpg'

const Home = () => {
  return (
    <>
    <div id='home'> 
      <div className="homeSkills">
        
        <div className="marquee">
        <span> <FaReact/> <BsBootstrap/> <RiTailwindCssLine/> <DiNodejs/> <SiExpress/> <SiMongodb/> <IoLogoJavascript/> <FaHtml5/> <FaCss3/> </span>
        <span> <FaReact/> <BsBootstrap/> <RiTailwindCssLine/> <DiNodejs/> <SiExpress/> <SiMongodb/> <IoLogoJavascript/> <FaHtml5/> <FaCss3/> </span>
        </div>
      </div>
      <div className="homeContent">
       <AnimateOnScroll animation='zoom-in' duration='1s'>
          <span className='homeText'><span className="hello">Hello,</span> I'm
           <span className="homeName"> Vikas Kumar Singh</span> <br /> <span className="homeWork"> Full Stack Developer</span> </span>
       </AnimateOnScroll>
        <AnimateOnScroll animation='fade-left' duration='1s'>
        <p className='homePara'>Crafting clean, performant & responsive web experiences <br />using modern technologies.</p>
        </AnimateOnScroll>
        <div className="btns">
         
        <AnimateOnScroll animation='fade-left' duration='0.5s'>
            <a href={resume} target='_blank'><button className="cvBtn homeBtn"><MdOutlineFileDownload /> Download CV</button></a>
            </AnimateOnScroll>
            <AnimateOnScroll animation='fade-right' duration='0.6s'>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-45} duration={500}><button className='workBtn homeBtn'>View My Work <FaArrowRightLong /></button></Link>
            </AnimateOnScroll>
        </div>
      </div>
     
     <AnimateOnScroll className='aboutAnimateWrapper' animation='fade-left' duration='0.7s'>
              <div className="aboutImage">
            <div className="aboutBg">
       <img src={bg} alt="" className='bg'/>
       </div>
       </div>
       </AnimateOnScroll>

    </div>

    </>
  )
}

export default Home
