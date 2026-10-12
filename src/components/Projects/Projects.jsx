import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-title">
        <h2>My Projects</h2>
        <p>Some of my recent work</p>
      </div>

      <div className="projects-container">
        <div className="project-card">
          <h3>🤖 Chat with PDF</h3>
          <p>
            An AI-powered Full Stack application that allows users to upload PDF
            documents and ask questions in natural language using Google Gemini
            AI, Qdrant Vector Database, and the RAG (Retrieval-Augmented
            Generation) approach.
          </p>

          <h4>Tech Stack</h4>
          <div className="tech">
            <span>React.js</span>
            <span>Node.js</span>
            <span>CSS3</span>
            <span>Express.js</span>
            <span>Gemini AI</span>
            <span>Qdrant</span>
          </div>

          <div className="project-buttons">
            <a href="https://chat-with-pdf-yq98.vercel.app/"target="_blank"rel="noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/Prince9559/CHAT_WITH_PDF"target="_blank"rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>


        <div className="project-card">
          <h3>🛒 E-Commerce Website</h3>
          <p>
            Responsive e-commerce website with a modern and user-friendly
            interface for an enhanced online shopping experience.
          </p>

          <h4>Tech Stack</h4>

          <div className="tech">
            <span>React.js</span>
            <span>CSS3</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>

          <div className="project-buttons">
            <a href="https://fontend-peach.vercel.app/" target="_blank" rel="noreferrer">
            Live Demo
            </a>
            <a href="https://github.com/Prince9559/" target="_blank" rel="noreferrer">
            GitHub
            </a>
          </div>
        </div>


        <div className="project-card">
          <h3>🏫 School Management System</h3>

          <p>
            A responsive school management website designed to manage students,
            courses, and educational information with a clean interface.
          </p>

          <h4>Tech Stack</h4>

          <div className="tech">
            <span>React.js + Vite</span>
            <span>CSS3</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>SQLite</span>
          </div>

          <div className="project-buttons">
            <a href="https://raj-school-f5my.vercel.app/" target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/Prince9559/school-management/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        
      
      {/* StudioFlow */}
      <div className="project-card">
        <h3>🚀 StudioFlow</h3>

        <p>
          A full-stack studio management platform to manage clients, orders,
          scripts, creators, shoot schedules, videos, payments, expenses, and
          tasks with JWT authentication and role-based access.
        </p>

        <h4>Tech Stack</h4>

        <div className="tech">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>JWT</span>
          <span>REST API</span>
        </div>

        <h4>Demo Login</h4>
        <p>
          <strong>Email:</strong> prince@test.com
          <br />
          <strong>Password:</strong> 123456
        </p>

        <div className="project-buttons">
          <a href="https://leadyfy-os-lemon.vercel.app/" target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href="https://github.com/Prince9559" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>



        <div className="project-card">
          <h3>🌐 Coaching Website</h3>

          <p>
            A modern and responsive coaching institute website with an
            attractive design and user-friendly experience.
          </p>

          <h4>Tech Stack</h4>

          <div className="tech">
            <span>React.js</span>
            <span>CSS3</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MySQL</span>
          </div>

          <div className="project-buttons">
            <a href="https://developer-pi-five.vercel.app/" target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/Prince9559/developer" target="_blank"rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
