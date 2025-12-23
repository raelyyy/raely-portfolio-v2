import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowUp, FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { GiElectric } from "react-icons/gi";
import './App.css'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">
          <GiElectric size={46} />
        </div>
        <div className="sidebar-divider"></div>
        <div className="sidebar-socials">
          <a href="#" className="sidebar-social"><FaGithub /></a>
          <a href="#" className="sidebar-social"><FaLinkedin /></a>
          <a href="#" className="sidebar-social"><FaFacebook /></a>
          <a href="#" className="sidebar-social"><AiFillInstagram /></a>
          <a href="#" className="sidebar-social"><BiLogoGmail /></a>
        </div>
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">Raely Ivan Reyes</a>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>
      <div className="hero" id="home">
        <video className="hero-video" autoPlay loop muted>
          <source src="/glassyObj.mp4" type="video/mp4" />
        </video>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hi! I'm Raely Ivan Reyes
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Frontend Developer
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            UI / UX Designer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            Passionate about creating innovative web solutions and user experiences.
          </motion.p>
          <div className="cta-buttons">
            <motion.button
              className="cta-button filled"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="cta-button outline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
      {showScrollTop && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </>
  )
}

export default App
