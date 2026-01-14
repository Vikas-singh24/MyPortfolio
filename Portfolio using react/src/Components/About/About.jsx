import React, { useState, useEffect } from 'react'
import './About.css'
import AnimateOnScroll from '../Animations/AnimateOnScroll';
const About = () => {
  const [showImage, setShowImage] = useState(true)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setShowImage(false);
      }
    };
  
    return () => {
      window.addEventListener('resize', handleResize);
    }
  }, [showImage])
  
  return (
    <>
    
    <div className='about'>
       <div className="aboutSection">
        <AnimateOnScroll animation='zoom-in' duration='0.7s'>
        <h1>About <span>Me</span></h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation='animate' duration='1.2s'>
        <hr className='abouthr1'/>
        </AnimateOnScroll>
        <br />
        <AnimateOnScroll animation='fade-left' duration='0.8s'>
        <p>I am Vikas Kumar Singh, a motivated MERN Stack Web Developer with a strong interest in building clean, responsive, and user-friendly web applications. I work with MongoDB, Express.js, React, and Node.js to create full-stack solutions, and I enjoy transforming ideas into functional and visually appealing digital experiences. I focus on writing clear, maintainable code while following modern development best practices to ensure performance, scalability, and reliability.</p>
        </AnimateOnScroll>
        <br />
        <AnimateOnScroll animation='fade-right' duration='1s'>
        <p>I continuously improve my skills through hands-on projects and real-world problem solving, with a keen interest in exploring new technologies and optimizing application performance. I enjoy crafting smooth user experiences, refining UI details, and building applications that feel intuitive and efficient. I am eager to grow as a developer, collaborate on meaningful projects, and expand my knowledge of modern web development.</p>
       </AnimateOnScroll>

       </div>
    
    </div>
    
     
    </>
  )
}

export default About
