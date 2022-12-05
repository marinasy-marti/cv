import '../styles/Work.css'

const Work = () => {

    return <>  
        <div className='education'>
            <div className='year-box'>
                <span className='year'>Oct-Nov 2022</span>
            </div>
            <div className='place-box'>
            <span className='place-name'>Orange Digital Center and Arkup Academy</span>
                    <span className='place-desc'>Full Stack MERN Bootcamp</span>
            </div>
        </div> 
        <div className='education'>
            <div className='year-box'>
                <span className='year'>June-Dec 2022</span>
            </div>
            <div className='place-box'>
            <span className='place-name'> Ministère de l’Enseignement Supérieur et de la Recherche Scientifique</span>
                    <span className='place-desc'>Computer Networking Intern</span>
                    <ul>
                        <li>pfSense Administration</li>
                        <li>Designed and Produced a time clock for employee</li>
                    </ul>
            </div>
        </div>
        <div className='education'>
            <div className='year-box'>
                <span className='year'>Nov 2018 - Feb 2019</span>
            </div>
            <div className='place-box'>
            <span className='place-name'>Ministère du Tourisme</span>
                    <span className='place-desc'>IT Intern</span>
                    <ul>
                        <li>Linux (Ubuntu as Server) Administration </li>
                        <li>Created a Local live chat app using Php, MySQL, JavaScript</li>
                    </ul>
            </div>
        </div>
    </>
}


export default Work; 
