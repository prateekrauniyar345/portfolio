import './projects.css';

function Projects() {
  return (
    <div className="Home">
      <div className="content">
        <div className="first-line">
          <h1><strong>These are some of the selected projects.</strong></h1>
        </div>

        <div className="project-card-container">
          {/* Project 1 */}
          <div className="project-card">
            <div className="projects">
              <div className="project-image">
                <img src="/assets/park.png" alt="Park Locator Project" className="park-locator" />
              </div>
              <div className="project-description">
                <p>This is the Park Locator that can help you locate a park near you.</p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="projects">
              <div className="project-image">
                <img src="/assets/portfolio.png" alt="Portfolio webpage" className="park-locator" />
              </div>
              <div className="project-description">
                <p>This is my portfolio webpage. You are right in here.</p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          {/* <div className="project-card">
            <div className="projects">
              <div className="project-image">
                <img src="/assets/financial-data.png" alt="Financial Data Analysis" className="park-locator" />
              </div>
              <div className="project-description">
                <p>This is the Financial Data Analysis Tool.</p>
              </div>
            </div>
          </div> */}

          {/* Additional projects can be added similarly */}
        </div>
      </div>
    </div>
  );
}

export default Projects;


