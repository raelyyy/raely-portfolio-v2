import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaFacebook } from 'react-icons/fa'
import { BiLogoGmail } from "react-icons/bi";
import { GiElectric } from "react-icons/gi";
import Hamburger from 'hamburger-react'
import FadeContent from './components/FadeContent'
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
                <a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</a>
                <a href="#education" className="nav-link" onClick={() => setIsMenuOpen(false)}>Education</a>
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
                <a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</a>
                <a href="#education" className="nav-link" onClick={() => setIsMenuOpen(false)}>Education</a>
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
        <FadeContent blur={true} duration={1000} ease="ease-out" initialOpacity={0} container={undefined} onComplete={undefined} onDisappearanceComplete={undefined}>
          <div className="about-content">
            <div className="about-image">
              <img src="/img/main-pic.png" alt="Raely Ivan Reyes" />
            </div>
            <div className="about-text">
              <h2>About Me</h2>
              <p>I'm Raely Ivan Reyes, a passionate Frontend Developer and UI/UX Designer with a keen interest in creating innovative web solutions and exceptional user experiences. With expertise in modern web technologies, I strive to build applications that are not only functional but also visually appealing and user-friendly.</p>
              <p>My journey in web development started with a curiosity for how things work on the internet, and it has evolved into a career where I continuously learn and adapt to new technologies. I enjoy working on projects that challenge me and allow me to push the boundaries of what's possible on the web.</p>
            </div>
          </div>
        </FadeContent>
      </section>
      <section id="experience" className="experience">
        <motion.div
          className="experience-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Graphic Designer</h3>
            <p className="company">Bureau of Information Technology Specialists (BITS) | 2024 – 2025</p>
            <p>Designed social media posts, announcements, and event graphics to support internal and external communications.</p>
          </div>
          <div className="experience-item">
            <h3>Frontend Developer</h3>
            <p className="company">DCC Student Enrollment System | 2024</p>
            <p>Built a local student enrollment system with a user-friendly interface that streamlines student registration and records.</p>
          </div>
          <div className="experience-item">
            <h3>Software Developer</h3>
            <p className="company">SafeHito: AI-Based Fungal Detection & Diagnosis System | 2025</p>
            <p>Developed an AI-based scanning system using Raspberry Pi for detecting fungal infections in catfish and monitoring water quality in aquaculture.</p>
          </div>
          <div className="experience-item">
            <h3>Frontend Developer</h3>
            <p className="company">CloudJamz Music Web Platform | 2025</p>
            <p>Developed a cloud-based music streaming platform with an interactive front-end to enhance user experience.</p>
          </div>
        </motion.div>
      </section>
      <section id="education" className="education">
        <motion.div
          className="education-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Education</h2>
          <div className="education-item">
            <h3>Pampanga State University - Candaba Campus</h3>
            <p className="institution">2021 – Present | President's Lister</p>
            <p>Pursuing Bachelor's degree in Computer Science. Focused on software development, web technologies, and digital design.</p>
          </div>
          <div className="education-item">
            <h3>San Carlos San Luis National High School</h3>
            <p className="institution">2015 – 2021 | With High Honors</p>
            <p>Completed secondary education with distinction in academic performance.</p>
          </div>
          <div className="education-item">
            <h3>Laug Elementary School</h3>
            <p className="institution">2009 – 2015 | Valedictorian</p>
            <p>Completed primary education as class valedictorian.</p>
          </div>
          <div className="certificates-section">
            <h3>Certificates</h3>
            <div className="certificates-grid">
              <div className="certificate-item">
                <img src="/Certificates/Introduction to HTML_certificate.jpg" alt="HTML Certificate" />
                <p>Introduction to HTML</p>
              </div>
              <div className="certificate-item">
                <img src="/Certificates/Introduction to Java_certificate.jpg" alt="Java Certificate" />
                <p>Introduction to Java</p>
              </div>
              <div className="certificate-item">
                <img src="/Certificates/Java Intermediate_certificate.jpg" alt="Java Intermediate" />
                <p>Java Intermediate</p>
              </div>
              <div className="certificate-item">
                <img src="/Certificates/Python Developer_certificate.jpg" alt="Python Developer" />
                <p>Python Developer</p>
              </div>
              <div className="certificate-item">
                <img src="/Certificates/Python Intermediate_certificate.jpg" alt="Python Intermediate" />
                <p>Python Intermediate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section id="projects" className="projects">
        <motion.div
          className="projects-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src="/Portfolio/HTML Projects/CloudDesk Text Editor Website/CloudDesk.png" alt="CloudDesk Text Editor" />
              <h4>CloudDesk Text Editor</h4>
              <p>Web-based text editor with cloud functionality.</p>
              <span className="project-category">Web Project</span>
            </div>
            <div className="project-card">
              <img src="/Portfolio/HTML Projects/Cloudjamz Music Website/CloudJamz.png" alt="Cloudjamz Music Website" />
              <h4>Cloudjamz Music Website</h4>
              <p>Music streaming platform interface.</p>
              <span className="project-category">Web Project</span>
            </div>
            <div className="project-card">
              <img src="/Portfolio/HTML Projects/CoffeeCo Website/CoffeeCoWebsite1.png" alt="CoffeeCo Website" />
              <h4>CoffeeCo Website</h4>
              <p>E-commerce site for coffee products.</p>
              <span className="project-category">Web Project</span>
            </div>
            <div className="project-card">
              <img src="/Portfolio/HTML Projects/Enrollment System/EnrollmentSystem1-Index.png" alt="Enrollment System" />
              <h4>Enrollment System</h4>
              <p>Student enrollment management system.</p>
              <span className="project-category">Web Project</span>
            </div>
            <div className="project-card">
              <img src="/Portfolio/HTML Projects/Personal Website/PersonalWebsite.png" alt="Personal Website" />
              <h4>Personal Website</h4>
              <p>Personal portfolio website.</p>
              <span className="project-category">Web Project</span>
            </div>
            <div className="project-card">
              <img src="/Portfolio/HTML Projects/Valorant Website/ValorantEcommerce1.png" alt="Valorant Website" />
              <h4>Valorant E-commerce</h4>
              <p>Valorant-themed online store.</p>
              <span className="project-category">Web Project</span>
            </div>
            <div className="project-card">
              <img src="/Portfolio/Graphic Designs/LogoMayWeatherApp.png" alt="MayWeather Logo" />
              <h4>MayWeather App Logo</h4>
              <span className="project-category">Graphic Design</span>
            </div>
            <div className="project-card">
              <img src="/Portfolio/Graphic Designs/LogoSafeHitoApp.png" alt="SafeHito Logo" />
              <h4>SafeHito App Logo</h4>
              <span className="project-category">Graphic Design</span>
            </div>
            <div className="project-card">
              <img src="/Portfolio/Graphic Designs/HonorianBrochure.png" alt="Honorian Brochure" />
              <h4>Honorian Brochure</h4>
              <span className="project-category">Graphic Design</span>
            </div>
            <div className="project-card">
              <img src="/Portfolio/Graphic Designs/PageantPoster.png" alt="Pageant Poster" />
              <h4>Pageant Poster</h4>
              <span className="project-category">Graphic Design</span>
            </div>
            <div className="project-card">
              <img src="/Portfolio/Graphic Designs/DigitalDrawing.png" alt="Digital Drawing" />
              <h4>Digital Art</h4>
              <span className="project-category">Graphic Design</span>
            </div>
            <div className="project-card">
              <img src="/Portfolio/Graphic Designs/MsDccGrandWinner.jpg" alt="Ms DCC Winner" />
              <h4>Ms. DCC Grand Winner</h4>
              <span className="project-category">Graphic Design</span>
            </div>
          </div>
        </motion.div>
      </section>
      <section id="contact" className="contact">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Contact Me</h2>
          <p>Let's work together! Feel free to reach out for collaborations or just to say hello.</p>
          <div className="contact-info">
            <div className="contact-item">
              <BiLogoGmail />
              <span>raelyivan@example.com</span>
            </div>
            <div className="contact-item">
              <FaGithub />
              <span>github.com/raelyivan</span>
            </div>
            <div className="contact-item">
              <FaFacebook />
              <span>facebook.com/raelyivan</span>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default App

