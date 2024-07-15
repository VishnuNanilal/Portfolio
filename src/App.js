import { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import ProjectCard from './components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';

function App() {
  const [showWebProjects, setShowWebProjects] = useState(false)
  const [showGameProjects, setShowGameProjects] = useState(false)

  function handleClick() {
    setShowGameProjects(prev => !prev)
  }

  return (
    <div className="App">
      <header>
      <FontAwesomeIcon icon={faGithub} />
        <div>link 2</div>
        <div>link 3</div>
        <div>link 4</div>
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
                  <ProjectCard name='Snake' demoLink='' codeLink='https://github.com/VishnuNanilal/Game-Snake'/>
                  <ProjectCard name='Card Compat' demoLink='' codeLink='https://github.com/VishnuNanilal/Game-CardCompat'/>
                  <ProjectCard name='Text Based Adventure' demoLink='' codeLink='https://github.com/VishnuNanilal/Game-TextBasedAdventure'/>
                  <ProjectCard name='Chess' demoLink='' codeLink='https://github.com/VishnuNanilal/Game-Chess'/>
                  <ProjectCard name='Area Calculation' demoLink='' codeLink=''/>
                  <ProjectCard name='Factory Sorting' demoLink='' codeLink=''/>
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
        footer
      </footer>
    </div>
  );
}

export default App;
