import './connect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Connect() {
   return (
      <div className="Home">
         <div className="content">
            <h1>Connect with me on</h1>
            <div className="ConnectOptions">
               <div className="Connect">
                  <a href="https://www.facebook.com/pratik.rauniyar.7" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faFacebook} size = '2x' />
                  </a>
               </div>
               <div className="Connect">
                  <a href="https://www.linkedin.com/in/pratik-rauniyar-531a97174/" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faLinkedin} size = '2x'/>
                  </a>
               </div>
               <div className="Connect">
                  <a href="https://github.com/prateekrauniyar345" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faGithub} size = '2x'/>
                  </a>
               </div>
            </div>

            <div className="email">
               <h1>Shoot me an email</h1>
               <div className=".emailContent">
                     <div className="TextBox">
                        <label htmlFor="message">Message</label> 
                        <br />
                        <textarea 
                           id="message" 
                           name="message" 
                           required 
                           maxLength="200" 
                           placeholder="Up to 200 characters" 
                           rows="15" 
                           cols="50" 
                           spellCheck="true"
                        ></textarea> 
                     </div>
               </div>
               <div className="SendEmail">
                  <button type="submit" className="cta-button">Send</button>
               </div>
         </div>
         </div>
      </div>
   );
}

export default Connect;
