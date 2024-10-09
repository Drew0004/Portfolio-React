import React, {useEffect} from 'react'
import MyHeader from '../MyHeader';
import Footer from '../Footer';
import AboutProject from '../AboutProject';
import ProjectFunctionality from '../ProjectFunctionality';
import { useLocation } from 'react-router-dom'

const Project = () => {
    const {pathname} = useLocation()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])
    
    return (
        <>
            <MyHeader/>
            <AboutProject/>
            <ProjectFunctionality/>
            <Footer/>
        </>
  )
}

export default Project
