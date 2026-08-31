import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="footer">
      <div className="container footer-shell">
        <div>
          <p className="footer-text">
            © {new Date().getFullYear()} <span>ABINIVESH KV</span>
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {quickLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/abinivesh-kv"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/abinivesh1696"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:abiniveshk@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
