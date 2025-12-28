import React, { useRef } from 'react'
import './Contact.css'
import { FiSend } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { TiSocialLinkedin } from "react-icons/ti";
import AnimateOnScroll from '../Animations/AnimateOnScroll';

const Contact = () => {
  

  return (
    <>
    <div id='contactPage'> 
      <AnimateOnScroll animation='zoom-in' duration='1s'>
      <h1 className='contactPageTitle'>Get In <span>Touch</span></h1>
      </AnimateOnScroll>
      <AnimateOnScroll animation='zoom-in' duration='1s'>
        <hr id='titleHr'/>
      </AnimateOnScroll>
      
      <br />

      <p><AnimateOnScroll animation='fade-right' duration='1s'>
        Have a project in mind or just want to say hello? Drop me a message and let's create something amazing together</AnimateOnScroll></p>
      <div className="contactBox">
        <div className="contactDetails">
          <form className='contactForm' action=""  >
            <div id="nameSection" className='contactFormDetails'>
              <AnimateOnScroll className='contactFormDetails' animation='fade-left' duration='0.7s'>
              <label htmlFor="">Name</label>
              <input className='name' type="text" placeholder='Your Name' required/>
              </AnimateOnScroll>
            </div>
              
           <div id="emailSection" className='contactFormDetails'>
             <AnimateOnScroll className='contactFormDetails' animation='fade-left' duration='0.8s'>
               <label htmlFor="">Email</label>
              <input className='email' type="email" placeholder='Your Email' required/>
              </AnimateOnScroll>
           </div>
            
             
         <div id="messageSection" className='contactFormDetails'>
           <AnimateOnScroll className='contactFormDetails' animation='fade-left' duration='0.9s'>
             <label htmlFor="">Message</label>
             <textarea className='msg' name="message" id="" placeholder='Tell Me About Your Project...' rows='7' required></textarea>
             </AnimateOnScroll>
         </div>
             
             <AnimateOnScroll className='contactFormDetails' animation='fade-left' duration='1s'>
            <button type='submit' value='send' className='submitBtn'>Send Message <FiSend id='sendIcon'/></button>
            </AnimateOnScroll>
          </form>
        </div>
        <div className="letsConnect">

          <h2> <AnimateOnScroll animation='animate zoom-in' duration='0.9s'> Let's Connect</AnimateOnScroll>
           </h2>
          <p> <AnimateOnScroll animation='fade-right zoom-in' duration='1s'>I'm always excited to work on new projects and collaborate with amazing people. Wheather you have a specific project in mind or just want to explore possibilites. I'd love to hear from you</AnimateOnScroll></p>
           
          {/* <div id="myEmailBox" className='contactMeBox'> */}
            <AnimateOnScroll id="myEmailBox" className='contactMeBox' animation='fade-right' duration='0.8s'>
            <div className="contactLogo">
                 <MdOutlineEmail/>
            </div>
            <div className="contactMe">
             
              <h3>Email</h3>
              <p>vksingh.2024k@gmail.com</p>
             
            </div>
          </AnimateOnScroll>
          {/* </div> */}
           
          <AnimateOnScroll id="myNumberBox" className='contactMeBox' animation='fade-right' duration='0.9s'>
               <div className="contactLogo">
              <FiPhone/>
            </div>
             <div className="contactMe">
              <h3>Phone</h3>
              <p>+91 9718638076</p>
            </div> 
          </AnimateOnScroll>
          <AnimateOnScroll id="myLocationBox" className='contactMeBox' animation='fade-right' duration='1s'>
             <div className="contactLogo">
              <GrLocation/>
            </div>
              <div className="contactMe">
              <h3>Location</h3>
              <p>Delhi, India</p>
            </div>
          </AnimateOnScroll>

          <div className="followMe">
            <h3><AnimateOnScroll animation='fade-right zoom-in' duration='1s'>Follow Me</AnimateOnScroll></h3>
            <div className="followBtns" >
              <AnimateOnScroll animation='fade-up' duration='0.8s' className="followLink">
              <a href="https://github.com/Vikas-singh24" target='_blank'>
              
            <SiGithub/>
           </a></AnimateOnScroll>
           <AnimateOnScroll  animation='fade-up' duration='1s' className="followLink">
            <a href="https://www.linkedin.com/in/vikas-kumar-singh-b25a60329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' >  
           
            <TiSocialLinkedin/>
          
           </a> 
            </AnimateOnScroll>
            </div>
          
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Contact
