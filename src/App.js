import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProjectCard from './components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [showWebProjects, setShowWebProjects] = useState(false)
  const [showGameProjects, setShowGameProjects] = useState(false)

  function handleClick() {
    setShowGameProjects(prev => !prev)
  }

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
          <button className='contact-me-btn'>Contact Me</button>

          <section className='project-cont'>
            <h2>Projects</h2>

            <div className='game-project-cont' onClick={() => handleClick()}>
              <div className='project-header-div'>
                <h4>
                  Game Dev Projects
                </h4>
                <FontAwesomeIcon icon={showGameProjects ? faCaretUp : faCaretDown} />
              </div>
              {
                showGameProjects
                &&
                <div className='project-items-cont'>
                  <ProjectCard name='Snake' demoLink='https://lucky-puffpuff-46e2bf.netlify.app/' codeLink='https://github.com/VishnuNanilal/Game-Snake' />
                  <ProjectCard name='Card Compat' demoLink='https://resonant-crepe-c42fb0.netlify.app/' codeLink='https://github.com/VishnuNanilal/Game-CardCompat' />
                  <ProjectCard name='Text Based Adventure' demoLink='https://glowing-cocada-826e7f.netlify.app/' codeLink='https://github.com/VishnuNanilal/Game-TextBasedAdventure' />
                  <ProjectCard name='Chess' demoLink='https://669671d247c83b94e660bcef--idyllic-kitsune-998576.netlify.app/' codeLink='https://github.com/VishnuNanilal/Game-Chess' />
                  <ProjectCard name='Area Calculation' demoLink='https://66966d03d13a7ca190672b46--cheerful-monstera-77e70c.netlify.app/' codeLink='https://github.com/VishnuNanilal/Area-Calculator' />
                  <ProjectCard name='Factory Sorting' demoLink='https://66967b7cd560b1a13f166c0b--lustrous-pithivier-2b9b4a.netlify.app/' codeLink='https://github.com/VishnuNanilal/Factory-settings' />
                </div>
              }
            </div>

            <div className='web-project-cont' onClick={() => setShowWebProjects(prev => !prev)}>
              <h4>
                Web Dev Projects
              </h4>
              {
                showWebProjects
                &&
                <div>
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
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
