import './App.css'

function App() {
  return (
    <div className="canvas">
      <header className="header">
        <h1>Sudarshan Karn</h1>
        <p>Business Analyst & Automation Specialist</p>
      </header>

      <div className="grid">
        <div className="left">
          <div className="card welcome">
            <h2>Welcome to My Dashboard</h2>
            <p>Driving business decisions through data, automation and analytics.</p>
            <div className="pill-row">
              <span>7+ Years Experience</span>
              <span>Data & Automation</span>
              <span>Process Optimization</span>
            </div>
            <div className="btn-row">
              <button className="primary">View Resume</button>
              <button>Download CV</button>
            </div>
          </div>

          <div className="card achievements">
            <h3>Key Achievements</h3>
            <div className="kpi">
              <div>
                <strong>30+</strong>
                <small>Projects Automated</small>
              </div>
              <div>
                <strong>15%</strong>
                <small>Cost Reduction</small>
              </div>
              <div>
                <strong>40%</strong>
                <small>Productivity Increase</small>
              </div>
            </div>
          </div>

          <div className="card projects">
            <h3>Recent Projects & Case Studies</h3>
            <div className="project-row">
              <div className="project">Sales Reporting Automation</div>
              <div className="project">CRM Integration</div>
              <div className="project">Process Optimization</div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="card analytics">
            <h3>Analytics Dashboard</h3>
            <div className="chart-placeholder" />
          </div>

          <div className="card skills">
            <h3>Skills & Tools</h3>
            <div className="skills-row">
              <span>Python</span>
              <span>SQL / Power BI</span>
              <span>Looker Studio</span>
              <span>Automation</span>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <a href="mailto:sudarshankarn.works@gmail.com">Email</a>
        <a href="https://github.com/Sudarshan-Karn/">GitHub</a>
        <a href="https://www.linkedin.com/in/sudarshan-karn/">LinkedIn</a>
        <span>📞 8434507008</span>
      </footer>
    </div>
  )
}

export default App
