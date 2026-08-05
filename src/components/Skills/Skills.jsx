import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="skills-title">
        <h2>My Skills</h2>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Frontend</h3>

          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>

          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Database</h3>

          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Programming Languages</h3>

          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>

          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Currently Learning</h3>

          <ul>
            <li>Python</li>
            <li>Machine Learning</li>
            <li>Generative AI</li>
            <li>Google Gemini API</li>
            <li>Qdrant Vector Database</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Skills;