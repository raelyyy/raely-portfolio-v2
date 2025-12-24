import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaFacebook } from 'react-icons/fa'
import { BiLogoGmail } from "react-icons/bi";
import { GiElectric } from "react-icons/gi";
import Hamburger from 'hamburger-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOnHero, setIsOnHero] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsOnHero(window.scrollY < window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="hero" id="home">
        {isOnHero && (
          <div className="sidebar">
            <div className="sidebar-logo">
              <GiElectric size={46} />
            </div>
            <div className="sidebar-divider"></div>
            <div className="sidebar-socials">
              <a href="#" className="sidebar-social"><FaGithub /></a>
              <a href="#" className="sidebar-social"><FaFacebook /></a>
              <a href="#" className="sidebar-social"><BiLogoGmail /></a>
            </div>
          </div>
        )}
        {isOnHero && (
          <nav className="navbar">
            <div className="nav-container">
              <a href="#" className="nav-logo"><GiElectric size={24} /> Raely Ivan Reyes</a>
              <div className="hamburger">
                <Hamburger color="white" size={18} toggled={isMenuOpen} toggle={setIsMenuOpen} />
              </div>
              <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </div>
          </nav>
        )}
        <AnimatePresence>
          {!isOnHero && (
            <motion.div
              className="fixed-hamburger"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="hamburger">
                <Hamburger color="white" size={18} toggled={isMenuOpen} toggle={setIsMenuOpen} />
              </div>
              <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
          <div className="social-links">
            <motion.a
              href="#"
              className="social-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="#"
              className="social-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 1 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="#"
              className="social-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 1 }}
            >
              <BiLogoGmail />
            </motion.a>
          </div>
        </motion.div>
      </div>
      <section id="about" className="about">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>I'm Raely Ivan Reyes, a passionate Frontend Developer and UI/UX Designer with a keen interest in creating innovative web solutions and exceptional user experiences. With expertise in modern web technologies, I strive to build applications that are not only functional but also visually appealing and user-friendly.</p>
          <p>My journey in web development started with a curiosity for how things work on the internet, and it has evolved into a career where I continuously learn and adapt to new technologies. I enjoy working on projects that challenge me and allow me to push the boundaries of what's possible on the web.</p>
        </motion.div>
      </section>
    </>
  )
}

export default App

