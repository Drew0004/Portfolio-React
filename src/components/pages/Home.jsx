import React, {useRef} from 'react'
import MyHeader from '../MyHeader'
import ClaimSection from '../ClaimSection'
import AboutSection from '../AboutSection'
import ProjectSlider from '../ProjectsSlider'
const Home = () => {
    const abtRef = useRef(null)

    const scrollToAbout = () => {
      if (abtRef.current) {
        const offset = 80;
        const sectionPosition = abtRef.current.getBoundingClientRect().top;
        window.scrollTo({
          top: sectionPosition - offset, 
          behavior: 'smooth',
        });
      }
    };
    return (
        <>
            <MyHeader scrollToAbout={scrollToAbout}/>
            <ClaimSection scrollToAbout={scrollToAbout}/>
            <AboutSection ref={abtRef}/>
            <ProjectSlider/>
        </>
    )
}

export default Home
