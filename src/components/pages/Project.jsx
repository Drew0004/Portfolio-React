import React from 'react'
import { useLocation } from 'react-router-dom';


const Project = () => {
    const location = useLocation();
    const { project } = location.state || {};
    return (
        <div>
            {project.title}
        </div>
  )
}

export default Project
