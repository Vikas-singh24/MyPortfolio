import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll' 
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null); 
  const iconRef = useRef(null); 
  

  useEffect(() => {
    
    const handleClickOutside = (event) => {
      
     if (showMenu && menuRef.current && !menuRef.current.contains(event.target) &&iconRef.current && !iconRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 700) {
        setShowMenu(false);
      }
    };


    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [showMenu]);

  return (
    <>
  
    <div className='navbar' >
      <h1>PORTFOLIO</h1>
      
      <div className="desktopMenu">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={100}  className='desktopMenuListItem'>Home</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-40} duration={100} className='desktopMenuListItem'>About</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={100} className='desktopMenuListItem'>Skills</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-45} duration={100} className='desktopMenuListItem'>Projects</Link>
        <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-80} duration={100}className='desktopMenuListItem'>Contact</Link>
      </div>

      <IoMdMenu className='mobMenu' ref={menuRef} onClick={()=>setShowMenu(!showMenu)}/>
      
      <div className="navMenu" ref={iconRef} style={{ display : showMenu ? 'flex': 'none'}}>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={300}  className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={300} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={300} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-85} duration={300} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-80} duration={300}className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar;