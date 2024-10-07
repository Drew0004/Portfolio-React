import React, {useRef, useEffect} from 'react'
import MyHeader from '../MyHeader'
import ClaimSection from '../ClaimSection'
import AboutSection from '../AboutSection'
import ProjectSlider from '../ProjectsSlider'
const Home = () => {
    const abtRef = useRef(null)
    const worksRef = useRef(null)

    const scrollToAbout = () => {
      if (abtRef.current) {
        const offset = 80;
        const sectionPosition = abtRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionPosition - offset, 
          behavior: 'smooth',
        });
      }
    };

    const scrollToWorks = () => {
      if (worksRef.current) {
        const offset = 100;
        const sectionPosition = worksRef.current.getBoundingClientRect().top + window.scrollY; 
        window.scrollTo({
          top: sectionPosition - offset,
          behavior: 'smooth',
        });
      }
    };
    return (
        <>
            <MyHeader scrollToAbout={scrollToAbout} scrollToWorks={scrollToWorks}/>
            <ClaimSection scrollToAbout={scrollToAbout}/>
            <AboutSection ref={abtRef}/>
            <ProjectSlider ref={worksRef}/>
        </>
    )
}

export default Home
