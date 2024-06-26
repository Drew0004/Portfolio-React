import { useState } from 'react'
import MyHeader from './MyHeader'
import AboutSection from './AboutSection'

function App() {
  return (
    <>
        <MyHeader/>
        <div className="container">
            <AboutSection/>
        </div>
    </>
  )
}

export default App