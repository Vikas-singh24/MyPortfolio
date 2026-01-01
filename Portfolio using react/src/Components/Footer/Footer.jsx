import React from 'react'
import './Footer.css'
import AnimateOnScroll from '../Animations/AnimateOnScroll'
const Footer = () => {
  return (
    <>
    <footer id='footer'>
      <AnimateOnScroll animation='animate ' duration='1s'>
       <h4> Designed & Built with ❤️ by <span> Vikas Kumar Singh </span>
        </h4>
   <p>  © 2025 Vikas Kumar Singh. All rights reserved.</p>
   </AnimateOnScroll>
    </footer>
    </>
  )
}

export default Footer
