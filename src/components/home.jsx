// import './home.css'
// function Home(){
//    return (
//       <div className="Home">
//          <p>HEY WSSUUPPP.........</p>
//          <p>WELCOME TO MY WEBPAGE. LET'S KNOW EACH OTHER AND BUILD SOMETHING TOGETEHR.</p>
//       </div>
//    )
// }
// export default Home;

import './home.css';

function Home({ setActiveSection }) {
  return (
    <div className="Home">
      <div className="content">
        <h1>Hello, I'm Pratik Rauniyar!</h1>
        <h2>Let's Build Something Amazing Together</h2>
        <p>Hey, welcome to my webpage! I'm a passionate developer, and I'd love to connect with you to collaborate on exciting projects. Let's explore ideas and create something impactful!</p>
        <button onClick={() => setActiveSection('projects')} className="cta-button">View My Work</button>
      </div>
    </div>
  );
}

export default Home;
