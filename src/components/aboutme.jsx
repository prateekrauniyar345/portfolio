import './aboutme.css';

function Aboutme() {
  return (
    <div className="Home">
      <div className="content">
        <h1>About Me</h1>
        <p>
          Hello! I'm <strong>Pratik Rauniyar</strong>, a passionate Computer Science student at the 
          University of Idaho, expected to graduate in May 2026. With a strong foundation in programming 
          languages like C, C++, Python, and JavaScript, I am enthusiastic about developing web applications 
          and leveraging machine learning to create innovative solutions.
        </p>
        <h2>Skills</h2>
        <ul>
          <li><strong>PROGRAMMING:</strong> C, C++, Python, JavaScript, C#</li>
          <li><strong>WEB & DATABASE:</strong> HTML, CSS, SASS, SQL</li>
          <li><strong>FRAMEWORKS:</strong> Bootstrap, ReactJS</li>
          <li><strong>TECH:</strong> Git, Postman, Unix, LaTeX, Visual Studio, VSCode, MS Office</li>
          <li><strong>LANGUAGES:</strong> English, Nepali, Hindi</li>
        </ul>
        <h2>Experience</h2>
        <p>
          As a <strong>NSF REU Intern</strong>, I contributed to the development of a machine learning model 
          to calculate the SDImax for various regions and integrated it into a web application. My role also 
          involved rigorous testing and quality assurance of raster data,enhancing the model's efficiency 
          and accuracy.
        </p>
        <p>
          Currently, I am an <strong>Internal Helper</strong> at the <strong>Research Computing and Data ervices(RCDS)/Instutite for interdisciplinary Data Sciences(IIDS)</strong> at University of Idaho, working on projects 
          related to budget analysis and machine learning, where we develop data-driven web tools.
        </p>
        <h2>Current Projects</h2>
        <ul>
          <li>Developing an Antivirus system using Python and machine learning.</li>
          <li>Expanding the SDImax model to cover all regions of the USA.</li>
          <li>Building budget analysis tools to aid in university expenditure management.</li>
        </ul>
        <h2>Interests</h2>
        <p>
          I have a keen interest in AI/ML technologies, stock trading, and electric vehicles. In my spare time, 
          I enjoy playing badminton, listening to podcasts, and playing football.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
