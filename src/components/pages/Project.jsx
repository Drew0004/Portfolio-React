import React from 'react'
import { useLocation } from 'react-router-dom';
import MyHeader from '../MyHeader';


const Project = () => {
    const location = useLocation();
    const { project } = location.state || {};
    return (
        <>
            <MyHeader/>
            {project.title}
        </>
  )
}

export default Project
