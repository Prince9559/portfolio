import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">

      <div className="education-title">
        <h2>Education</h2>
        <p>My academic journey</p>
      </div>

      <div className="education-container">

        <div className="education-card">
          <h3>Bachelor of Computer Applications (BCA)</h3>

          <h4>Microtek College of Management & Technology, Varanasi, Uttar-Pradesh, India</h4>

          <span>2024 - 2027</span>

          <p>
            Currently pursuing BCA with a strong focus on programming,
            full stack web development, data structures, databases,
            and modern software development technologies.
          </p>
        </div>

        <div className="education-card">
          <h3>Higher Secondary (Class 12)</h3>

          <h4>Netaji Rajnarayan Inter College ,Bhadohi, Uttar-Pradesh, India</h4>

          <span>2024</span>

          <p>
            Completed Higher Secondary with
            <strong> 74.4%</strong>.
          </p>
        </div>

        <div className="education-card">
          <h3>Secondary School (Class 10)</h3>

          <h4>Netaji Rajnarayan Inter College, Bhadohi, Uttar-Pradesh, India</h4>

          <span>2022</span>

          <p>
            Completed Secondary School with
            <strong> 76.33%</strong>.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Education;