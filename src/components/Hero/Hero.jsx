import "./Hero.css";
import profile from "../../assets/images/profile.png";
import resume from "../../assets/resume/Prince_Kumar_Resume.pdf";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h3>Hello, I'm</h3>
        <h1>Prince Kumar</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I am a Full Stack Developer specializing in React.js, Node.js,
          Express.js, MongoDB, and modern web technologies. I enjoy building
          responsive, scalable, and user-friendly web applications.
        </p>

        <div className="hero-buttons">
          <a href={resume} download className="btn">
            Download Resume
          </a>

          <a href="#contact" className="btn-outline">
            Hire Me
          </a>

        </div>

        <div className="social-icons">

          <a href="https://github.com/Prince9559" target="_blank"rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/prince-kumar-724160333" target="_blank"rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="mailto:kumarprince95596186@gmail.com">
            <FaEnvelope />
          </a>

        </div>
      </div>

      <div className="hero-right">
      <div className="image-box">
    <img src={profile} alt="Prince Kumar" />
  </div>
</div>

</section>
  );
}

export default Hero;