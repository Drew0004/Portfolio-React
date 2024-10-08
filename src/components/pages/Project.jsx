import React from 'react'
import { useLocation } from 'react-router-dom';
import MyHeader from '../MyHeader';
import Footer from '../Footer';


const Project = () => {
    const location = useLocation();
    const { project } = location.state || {};
    return (
        <>
            <MyHeader/>
            {project.title}
            <Footer/>
        </>
  )
}

export default Project
