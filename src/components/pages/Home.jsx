import React, {useRef} from 'react'
import MyHeader from '../MyHeader'
import ClaimSection from '../ClaimSection'
import AboutSection from '../AboutSection'

const Home = () => {
    const abtRef = useRef(null)

    const scrollToAbout = () => {
      if (abtRef.current) {
        abtRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return (
        <>
            <MyHeader scrollToAbout={scrollToAbout}/>
            <ClaimSection scrollToAbout={scrollToAbout}/>
            <AboutSection ref={abtRef}/>
        </>
    )
}

export default Home
