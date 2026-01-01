import React from 'react'
import './Home.css'
import { Link } from 'react-scroll'
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import resume from '../../assets/Vikas_iimt_4.pdf'
import AnimateOnScroll from '../Animations/AnimateOnScroll';

const Home = () => {
  return (
    <>
    <div id='home'>
      <div className="homeContent">
       <AnimateOnScroll animation='zoom-in' duration='1s'>
          <span className='homeText'><span className="hello">Hello,</span> I'm
           <span className="homeName"> Vikas Kumar Singh</span> <br /> <span className="homeWork"> Full Stack Developer</span> </span>
       </AnimateOnScroll>
        <AnimateOnScroll animation='fade-left' duration='1s'>
        <p className='homePara'>Crafting clean, performant & responsive web experiences <br />using modern technologies.</p>
        </AnimateOnScroll>
        <div className="btns">
          <AnimateOnScroll animation='fade-left' duration='0.6s'>
        <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-85} duration={500} ><button className="hireBtn homeBtn"><IoBagOutline /> Hire Me</button></Link>
        </AnimateOnScroll>
        <AnimateOnScroll animation='animate' duration='1s'>
            <a href={resume} target='_blank'><button className="cvBtn homeBtn"><MdOutlineFileDownload /> Download CV</button></a>
            </AnimateOnScroll>
            <AnimateOnScroll animation='fade-right' duration='0.6s'>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-45} duration={500}><button className='workBtn homeBtn'>View My Work <FaArrowRightLong /></button></Link>
            </AnimateOnScroll>
        </div>
      </div>
     
    </div>

    </>
  )
}

export default Home
