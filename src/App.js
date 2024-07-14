import './App.css';
import Profile from './components/Profile';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <header>
        header
      </header>
      <main>
        <div className='main-center'>
          <Profile/>
          <section className='project-cont'>
            <h3>Projects</h3>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
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
