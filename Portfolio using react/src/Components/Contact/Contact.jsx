import React, { useState } from 'react'; 
import './Contact.css';
import { FiSend, FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { TiSocialLinkedin } from "react-icons/ti";
import AnimateOnScroll from '../Animations/AnimateOnScroll';

const Contact = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const data ={
    access_key : import.meta.env.VITE_CONTACTFORM_KEY ,
    ...formData
  }
  

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers :{
      "Content-Type": "application/json"   
    },
     body: JSON.stringify(data)
  });

  const result = await response.json();

  if (result.success) {
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" })
   
  } else {
    console.log("Error", data);
    alert(result.message);
  }
};

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

        <span>
          <AnimateOnScroll animation='fade-right' duration='1s'>
            Have a project in mind or just want to say hello? Drop me a message and let's create something amazing together
          </AnimateOnScroll>
        </span>

        <div className="contactBox">
          <div className="contactDetails">
           
            <form className='contactForm' onSubmit={onSubmit}>
              
              
              <input type="checkbox" name="botcheck" style={{ display: "none" }} />

              <div id="nameSection" className='contactFormDetails'>
                <AnimateOnScroll className='contactFormDetails' animation='fade-left' duration='0.7s'>
                  <label>Name</label>
                
                  <input className='name' name="name" type="text" value={formData.name} onChange={handleChange}placeholder='Your Name' required/>
                </AnimateOnScroll>
              </div>
                
              <div id="emailSection" className='contactFormDetails'>
                <AnimateOnScroll className='contactFormDetails' animation='fade-left' duration='0.8s'>
                  <label>Email</label>
                  
                  <input className='email' name="email" type="email" value={formData.email}
    onChange={handleChange} placeholder='Your Email' required/>
                </AnimateOnScroll>
              </div>
              
              <div id="messageSection" className='contactFormDetails'>
                <AnimateOnScroll className='contactFormDetails' animation='fade-left' duration='0.9s'>
                  <label>Message</label>
                 
                  <textarea className='msg' name="message"  value={formData.message}
    onChange={handleChange} placeholder='Your Message...' rows='7' required></textarea>
                </AnimateOnScroll>
              </div>
                
              <AnimateOnScroll className='contactFormDetails' animation='fade-left' duration='1s'>
                <button type='submit' className='submitBtn'>
                  Send Message <FiSend id='sendIcon'/>
                </button>
              </AnimateOnScroll>

             
              
              
            </form>
          </div>

          <div className="letsConnect">
            <h2><AnimateOnScroll animation='animate zoom-in' duration='0.9s'> Let's Connect</AnimateOnScroll></h2>
            <span><AnimateOnScroll animation='fade-right zoom-in' duration='1s'>I'm always excited to work on new projects and collaborate with amazing people. Whether you have a specific project in mind or just want to explore possibilities. I'd love to hear from you</AnimateOnScroll></span>
             
            <AnimateOnScroll id="myEmailBox" className='contactMeBox' animation='fade-right' duration='0.8s'>
              <div className="contactLogo"><MdOutlineEmail/></div>
              <div className="contactMe">
                <h3>Email</h3>
                <p>vksingh.2024k@gmail.com</p>
              </div>
            </AnimateOnScroll>
             
            <AnimateOnScroll id="myNumberBox" className='contactMeBox' animation='fade-right' duration='0.9s'>
              <div className="contactLogo"><FiPhone/></div>
              <div className="contactMe">
                <h3>Phone</h3>
                <p>+91 9718638076</p>
              </div> 
            </AnimateOnScroll>

            <AnimateOnScroll id="myLocationBox" className='contactMeBox' animation='fade-right' duration='1s'>
              <div className="contactLogo"><GrLocation/></div>
              <div className="contactMe">
                <h3>Location</h3>
                <p>Delhi, India</p>
              </div>
            </AnimateOnScroll>

            <div className="followMe">
              <h3><AnimateOnScroll animation='fade-right zoom-in' duration='1s'>Follow Me</AnimateOnScroll></h3>
              <div className="followBtns" >
                <AnimateOnScroll animation='fade-up' duration='0.8s' className="followLink">
                  <a href="https://github.com/Vikas-singh24" target='_blank' rel="noreferrer"><SiGithub/></a>
                </AnimateOnScroll>
                <AnimateOnScroll animation='fade-up' duration='1s' className="followLink">
                  <a href="https://www.linkedin.com/in/vikas-kumar-singh-b25a60329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noreferrer"><TiSocialLinkedin/></a> 
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;