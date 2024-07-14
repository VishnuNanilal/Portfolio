import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({imgsrc, demoLink, codeLink}) {
  return (
    <div className='project-card'>
      <img alt='project-image' src=''/>
      <div className='project-link-cont'>
        <Link to={demoLink}>Demo</Link>
        <Link to={codeLink}>Code</Link>
      </div>
    </div>
  )
}

export default ProjectCard