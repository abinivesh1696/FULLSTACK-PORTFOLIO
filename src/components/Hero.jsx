import { motion } from 'framer-motion'
import { FiMail, FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import profilePhoto from '../assets/portfolio-image1.png'
import resume from '../assets/ABINIVESH_FullStack.pdf'

const Hero = () => {
  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/abinivesh1696', icon: <FaGithub /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abinivesh-kv', icon: <FaLinkedinIn /> },
  ]

  return (
    <section className="hero" id="home">
      <div className="container hero-layout">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-badge">
            <span className="dot"></span>
            Available for opportunities
          </div>

          <h1 className="hero-title">
            Hi, I’m
            <span className="hero-name"> ABINIVESH KV</span>
          </h1>

          <p className="hero-role">Full Stack Developer</p>

          <p className="hero-description">
            I build responsive, end-to-end web applications with React, Node.js, Express,
            and modern databases like MongoDB and MySQL. My focus is on creating clean user experiences,
            reliable APIs, and maintainable code that works in production.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <FiMail />
              Get in touch
            </a>
            <a href={resume} className="btn btn-outline" target="_blank" rel="noopener noreferrer" aria-label="View resume">
              <FiExternalLink />
              View resume
            </a>
            <a href="#projects" className="btn btn-ghost">
              <FiArrowRight />
              View projects
            </a>
          </div>

          <div className="hero-socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">6+</div>
              <div className="stat-label">Months internship</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3</div>
              <div className="stat-label">Project builds</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring"></div>
            <div className="hero-avatar">
              <img
                src={profilePhoto}
                alt="Abinivesh KV portrait"
                className="hero-avatar-image"
              />
            </div>
            <div className="hero-avatar-glow"></div>

            <motion.div
              className="floating-icon"
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaReact color="#61DAFB" />
            </motion.div>
            <motion.div
              className="floating-icon"
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaJs color="#F7DF1E" />
            </motion.div>
            <motion.div
              className="floating-icon"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaHtml5 color="#E34F26" />
            </motion.div>
            <motion.div
              className="floating-icon"
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaCss3Alt color="#1572B6" />
            </motion.div>
            <motion.div
              className="floating-icon"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaNodeJs color="#339933" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
