import { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import ProjectCard from './components/ProjectCard';

function App() {
  const [showWebProjects, setShowWebProjects] = useState(false)
  const [showGameProjects, setShowGameProjects] = useState(false)
  return (
    <div className="App">
      <header>
        <div>link 1</div>
        <div>link 2</div>
        <div>link 3</div>
        <div>link 4</div>
      </header>
      <main>
        <div className='main-center'>
          <Profile />

          <button>Contact Me</button>
          
          <section className='project-cont'>
            <h3>Projects</h3>

            <div className='game-project-cont' onClick={() => setShowGameProjects(prev => !prev)}>
              <img />
              <h4>
                Game Dev Projects
              </h4>
              {
                showGameProjects
                &&
                <div>
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                </div>
              }
            </div>

            <div className='web-project-cont' onClick={() => setShowWebProjects(prev => !prev)}>
              <img />
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
