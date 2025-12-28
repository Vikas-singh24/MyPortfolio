import React from 'react'
import './About.css'
import bg from '../../assets/image.jpg'
import AnimateOnScroll from '../Animations/AnimateOnScroll';
const About = () => {
  return (
    <>
    
    <div className='about'>
     
     <AnimateOnScroll className='aboutAnimateWrapper' animation='fade-left' duration='0.7s'>
              <div className="aboutImage">
            <div className="aboutBg">
       <img src={bg} alt="" className='bg'/>
       </div>
       </div>
       </AnimateOnScroll>

       <div className="aboutSection">
        <AnimateOnScroll animation='zoom-in' duration='0.7s'>
        <h1>About <span>Me</span></h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation='animate' duration='1.2s'>
        <hr className='abouthr1'/>
        </AnimateOnScroll>
        <br />
        <AnimateOnScroll animation='fade-right' duration='0.8s'>
        <p>I am a motivated MERN stack web developer with a strong interest in building clean, responsive, and user-friendly web applications. I work with MongoDB, Express.js, React, and Node.js to create full-stack solutions, and I enjoy turning ideas into functional and visually appealing products. I focus on writing clear, maintainable code and following best development practices.</p>
        </AnimateOnScroll>
        <br />
        <AnimateOnScroll animation='fade-right' duration='1s'>
        <p>I am continuously learning and improving my skills through hands-on projects and real-world problem solving. I enjoy exploring new technologies, improving performance, and building applications that provide a smooth user experience. I am eager to grow as a developer and contribute to meaningful projects while expanding my knowledge of modern web development.</p>
       </AnimateOnScroll>

       </div>
    
    </div>
    
     
    </>
  )
}

export default About
