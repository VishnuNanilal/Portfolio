import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProjectCard from './components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  const webProjectsRef = useRef(null)
  const gameProjectsRef = useRef(null)

  const [showWebProjects, setShowWebProjects] = useState(false)
  const [showGameProjects, setShowGameProjects] = useState(false)
  const [showContactMe, setShowContactMe] = useState(false)

  useEffect(()=>{
    if(showWebProjects){
      webProjectsRef.current.style.height=`${webProjectsRef.current.scrollHeight}px`;
    }
    else{
      webProjectsRef.current.style.height="5rem";
    }

    if(showGameProjects){
      gameProjectsRef.current.style.height = `${gameProjectsRef.current.scrollHeight}px`;
    }
    else{
      gameProjectsRef.current.style.height="5rem";
    }
  }, [showWebProjects, showGameProjects])

  return (
    <div className="App">
      <header>
        <div className='nav-link'>
          <Link to={"https://github.com/VishnuNanilal?tab=repositories"} style={{ color: "var(--light2)" }}><FontAwesomeIcon icon={faGithub} /></Link>
        </div>
        <div className='nav-link'>
          <Link to={"https://www.linkedin.com/in/vishnu-n-p-871085151/  "} style={{ color: "var(--light2)", textDecoration: "none" }}>LinkedIn</Link>
        </div>
        <div className='nav-link'>
          <Link to={"https://leetcode.com/u/vishnunlal/"} style={{ color: "var(--light2)", textDecoration: "none" }}>LeetCode</Link>
        </div>
      </header>
      <main>
        <div className='main-center'>
          <Profile />
          <button className='contact-me-btn' onClick={() => setShowContactMe(prev => !prev)}>Contact Me</button>
          <div className={`contact-me-cont ${showContactMe ? "contact-me-cont-show" : "contact-me-cont-hide"}`}>
            <div className='contact-me-cont-inner'>
              <p>Ph No: +91 7306365503</p>
              <p>Email: vishnunlal@gmail.com</p>
            </div>
          </div>
          <section className='project-cont'>
            <h2>Projects</h2>

            <div className="web-project-cont" onClick={() => setShowWebProjects(prev => !prev)} ref={webProjectsRef}>
              <div className='project-header-div'>
                <h4>
                  Web Dev Projects
                </h4>
                <FontAwesomeIcon icon={showWebProjects ? faCaretUp : faCaretDown} />
              </div>
              {
                <div className='project-items-cont'>
                  <ProjectCard name='Real Estate' demoLink='https://real-estate-project-op7o.onrender.com/' codeLink='https://github.com/VishnuNanilal/real-estate-project' />
                  <ProjectCard name='Book My Show' demoLink='https://book-my-show-5bks.onrender.com/sign-in' codeLink='https://github.com/VishnuNanilal/book-my-show' />
                  <ProjectCard name='Greedy Game' demoLink='https://greedy-game-8aao.onrender.com' codeLink='https://github.com/VishnuNanilal/book-my-show' />
                </div>
              }
            </div>

            <div className='game-project-cont' onClick={() => setShowGameProjects(prev => !prev)} ref={gameProjectsRef}>
              <div className='project-header-div'>
                <h4>
                  Game Dev Projects
                </h4>
                <FontAwesomeIcon icon={showGameProjects ? faCaretUp : faCaretDown} />
              </div>
              {
                <div className='project-items-cont'>
                  <ProjectCard name='Snake' demoLink='https://lucky-puffpuff-46e2bf.netlify.app/' codeLink='https://github.com/VishnuNanilal/Game-Snake' />
                  <ProjectCard name='Card Compat' demoLink='https://resonant-crepe-c42fb0.netlify.app/' codeLink='https://github.com/VishnuNanilal/Game-CardCompat' />
                  <ProjectCard name='Text Based Adventure' demoLink='https://glowing-cocada-826e7f.netlify.app/' codeLink='https://github.com/VishnuNanilal/Game-TextBasedAdventure' />
                  <ProjectCard name='Chess' demoLink='https://669671d247c83b94e660bcef--idyllic-kitsune-998576.netlify.app/' codeLink='https://github.com/VishnuNanilal/Game-Chess' />
                  <ProjectCard name='Area Calculation' demoLink='https://66966d03d13a7ca190672b46--cheerful-monstera-77e70c.netlify.app/' codeLink='https://github.com/VishnuNanilal/Area-Calculator' />
                  <ProjectCard name='Factory Sorting' demoLink='https://66967b7cd560b1a13f166c0b--lustrous-pithivier-2b9b4a.netlify.app/' codeLink='https://github.com/VishnuNanilal/Factory-settings' />
                  <ProjectCard name='RPG' demoLink='' codeLink='https://github.com/VishnuNanilal/Game-RPG' />
                </div>
              }
            </div>

          </section>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
