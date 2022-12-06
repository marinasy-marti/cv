import Skills from  './Skills.jsx'
import Education from './Education.jsx'
import Work  from './Work.jsx';
import '../styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLanguage, faEnvelope,faMapMarker} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function App() {
  const callIcon = <FontAwesomeIcon icon = {faPhone} />
  const homeIcon = <FontAwesomeIcon icon = {faMapMarker} />
  const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />
  const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
  const languageIcon = <FontAwesomeIcon icon={faLanguage} />
  const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />
  const githubIcon = <FontAwesomeIcon icon={faGithub} />
  
  return <>
    <div className="App">
    <header class="mizara-roa">
        <div class="zanaka">
        </div>
        <div class="zanaka mampisaraka-azy-roa"></div>
        <div class="zanaka">
            <h1 class="soratra-avia">Behamby Marinasy</h1>
            <h2 class="soratra-agnivo">Full Stack Developer</h2>
        </div>
    </header>
    <div class="mampizara"></div>
    <main class="mizara-roa"> 
        <div class="zanaka">
            <aside>
                <table>
                    <tr>
                        <td>{callIcon}</td>
                        <td>+261 34 55 068 55</td>
                    </tr><br />

                    <tr>
                        <td>{whatsappIcon}</td>
                        <td>+261 32 21 521 88</td>
                    </tr>

                    <tr>
                        <td>{mailIcon}</td>
                        <td><div className='link'><br /><span>marinasy.behamby@gmail.com</span></div></td>
                    </tr>
                    <tr>
                        <td>{homeIcon} </td>
                        <td><br />CU Porte 376 Ankatso 1</td>
                    </tr>
                    <tr>
                    </tr>
                </table>

                <table>
                    <tr>
                        <td>{languageIcon}</td>
                        <td>Languages</td>
                    </tr>
                </table>
                <ul className='langue'>
                    <li>Malagasy: Native</li>
                    <li>French: Advanced</li>
                    <li>English: Advanced</li>
                </ul>
                  
                <table>
                     <tr>
                        <td></td>
                        <td>Link</td>
                    </tr>
                    <tr>
                        <td>{linkedInIcon}</td>
                        <td  className='u'><div className='link'><span>https://www.linkedin.com/in/marinasy-marti/</span></div></td> 
                    </tr>
                    <tr>
                        <td>{githubIcon}</td>
                        <td  className='u'><div className='link'><br /><span>https://github.com/marinasy-marti</span></div></td>
                    </tr>
                </table>
            </aside>
        </div>

        <div class="zanaka mapisaraka-azy-roa">
        </div>
        <div class="zanaka">
            <section>
                <h2 className='content-title top'>Works and Projects</h2>
                <Work />
            </section>
            <section>
                <h2 className='content-title'>Education</h2>
                <Education />
            </section>
            <section>
                <h2 className='content-title'>Skills</h2>    
                <Skills />                  
            </section>
            
        </div>
    </main>
    </div>
  </>;
}

export default App;
