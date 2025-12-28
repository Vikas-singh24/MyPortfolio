import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
     <Navbar />
     <Home />
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
     </div>
    </>
  )
}

export default App
