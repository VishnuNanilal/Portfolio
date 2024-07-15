import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({ imgsrc, name, demoLink, codeLink }) {
  const linkStyle = {
    color: "var(--light2)",
    textDecoration: "none",
  }
  return (
    <div className='project-card .font-playwrite-normal' onClick={(e)=>e.stopPropagation()}>
      <h3>{name}</h3>
      <div className='project-link-cont'>
        <div className='nav-link'>
          <Link to={demoLink} style={linkStyle}><span>Demo</span></Link>
        </div>
        <div className='nav-link'>
          <Link to={codeLink} style={linkStyle}>Code</Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard