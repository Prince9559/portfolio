import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h2>About Me</h2>
        <p>Get to know me</p>
      </div>

      <div className="about-container">

        <div className="about-left">
          <h3>Full Stack Developer</h3>

          <p>
            My name is <strong>Prince Kumar</strong>, and I am currently
            pursuing a <strong>Bachelor of Computer Applications (BCA)</strong>{" "}
            from{" "}
            <strong>
              Microtek College of Management & Technology, Varanasi
            </strong>.
          </p>

          <p>
            I have a strong interest in programming, software development,
            and learning new technologies. I am passionate about building my
            career in the IT industry and continuously improving my technical
            and problem-solving skills.
          </p>

          <p>
            I am currently learning and working with{" "}
            <strong>
              C, C++, Java, HTML, CSS, JavaScript, React.js, Node.js,
              Express.js, MySQL, MongoDB,
            </strong>{" "}
            and <strong>Full Stack Web Development</strong>. I enjoy building
            real-world projects that help me improve my development skills
            and gain practical experience.
          </p>

          <p>
            Recently, I developed an AI-powered{" "}
            <strong>Chat with PDF</strong> application using{" "}
            <strong>Google Gemini AI</strong>,{" "}
            <strong>Qdrant Vector Database</strong>, and{" "}
            <strong>Retrieval-Augmented Generation (RAG)</strong>. Building
            this project gave me practical experience in integrating AI with
            web applications and inspired me to continue learning
            <strong> Generative AI</strong> and
            <strong> Machine Learning</strong>.
          </p>

          <p>
            Apart from coding, I enjoy playing <strong>Cricket</strong> and
            reading <strong>Books</strong>. I believe in continuous learning
            and always look for opportunities to improve my skills and build
            impactful software solutions.
          </p>
        </div>

        <div className="about-right">

          <div className="info-card">
            <h4>Name</h4>
            <p>Prince Kumar</p>
          </div>

          <div className="info-card">
            <h4>Education</h4>
            <p>BCA - Microtek College of Management & Technology</p>
          </div>

          <div className="info-card">
            <h4>Experience</h4>
            <p>8 Months Full Stack Developer Internship</p>
          </div>

          <div className="info-card">
            <h4>Location</h4>
            <p>Varanasi, Uttar Pradesh, India</p>
          </div>

          <div className="info-card">
            <h4>Email</h4>
            <p>kumarprince95596186@gmail.com</p>
          </div>

          <div className="info-card">
            <h4>Phone</h4>
            <p>+91 9559618602</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;