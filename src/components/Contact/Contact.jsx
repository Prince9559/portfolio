import "./Contact.css";
import {FaEnvelope,FaPhoneAlt,FaLinkedin,FaGithub,FaMapMarkerAlt,} from "react-icons/fa";
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-title">
        <h2>Contact Me</h2>
        <p>Let's build something amazing together.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            I am currently looking for Full Stack Developer opportunities,
            internships, and freelance projects. Feel free to contact me.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <span>kumarprince95596186@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 9559618602</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Varanasi, Uttar Pradesh, India</span>
          </div>

          <div className="social-links">

            <a href="https://linkedin.com/in/prince-kumar-724160333" target="_blank"rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://github.com/Prince9559" target="_blank"rel="noreferrer">
              <FaGithub />
            </a>

          </div>

        </div>
        <form className="contact-form">

          <input type="text" placeholder="Your Name"required/>

          <input type="email"placeholder="Your Email"required/>

          <input type="text" placeholder="Subject" required/>

          <textarea rows="6" placeholder="Your Message"required></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>

    </section>
  );
}

export default Contact;