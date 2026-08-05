import "./Footer.css";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}

        <div className="footer-column">

          <h3>Prince Kumar</h3>

          <p>
            I am a Full Stack Developer currently pursuing a Bachelor of
            Computer Applications (BCA). I enjoy building responsive web
            applications and continuously learning new technologies,
            Generative AI, and Machine Learning.
          </p>

          <p className="copyright">
            © 2026 Prince Kumar. All Rights Reserved.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h4>Quick Links</h4>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>

        {/* Skills */}

        <div className="footer-column">

          <h4>Technologies</h4>

          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>JavaScript</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Generative AI</li>
            <li>Machine Learning</li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h4>Contact</h4>

          <p>📧kumarprince95596186@gmail.com</p>

          <p>📱 +91 9559618602</p>

          <p>📍 Varanasi, Uttar Pradesh, India</p>

          <div className="social-icons">

            <a
              href="https://linkedin.com/in/prince-kumar-724160333"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Prince9559"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/919559618602"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>
      <hr/>

      <div className="footer-bottom">
        <p>
          Designed & Developed ❤️ by <strong>Prince Kumar</strong>
        </p>
      </div>

    </footer>
  );
}

export default Footer;