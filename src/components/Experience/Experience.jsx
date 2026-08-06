import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">

      <div className="experience-title">
        <h2>Experience</h2>
        <p>My internship journey</p>
      </div>

      <div className="experience-container">
        <div className="experience-card">

          <div className="experience-header">
            <h3>Full Stack Developer Intern</h3>
            <span>4 Months</span>
          </div>

          <h4>Varanasi Software Junction</h4>

          <p className="location">
            📍 Varanasi, Uttar Pradesh, India
          </p>

          <p>
  Completed a 4-month Full Stack Developer internship at Varanasi Software
  Junction, where I worked on responsive web applications using modern web
  technologies. Gained hands-on experience in frontend and backend
  development, database management, and real-world project collaboration.
</p>

          <div className="experience-tech">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MySQL</span>
          </div>

        </div>

        <div className="experience-card">

          <div className="experience-header">
            <h3>Full Stack Developer Intern</h3>
            <span>4 Months</span>
          </div>

          <h4>A2 Developer</h4>

          <p className="location">
            📍 Gurugram, Haryana, India
          </p>

          <p>
  Completed a 4-month Full Stack Developer internship at A2 Developer, where
  I worked on MERN Stack applications. Contributed to developing responsive
  user interfaces, REST APIs, backend features, and gained practical
  experience by working on live client projects.
</p>

          <div className="experience-tech">
            <span>React.js</span>
            <span>React Native</span>
            <span>Tailwind CSS</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>REST API</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;