import React, { useState , useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-scroll' 
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
    <div className='navbar'>
      <h1>PORTFOLIO</h1>
     
      <div className="desktopMenu">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>Home</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-85} duration={500} className='desktopMenuListItem'>Projects</Link>
        <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-70} duration={500}className='desktopMenuListItem'>Contact</Link>
       
      </div>

      <IoMdMenu className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      
      <div className="navMenu" style={{ display : showMenu ? 'flex': 'none'}}>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}  className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-85} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-80} duration={500}className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </div>

    </>
  )
}

export default Navbar
