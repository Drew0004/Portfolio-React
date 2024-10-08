import React from 'react'
import { graphicTechnologies, webDevTechnologies } from '../assets/storage/data'

const TechnologiesSect = () => {
  return (
    <div className='container-fluid mt-5'>
        <h2 className='fw-bold text-uppercase text-black secondary-titles'>
            //02 - <br /> Technologies
        </h2>
        <div className="row g-0 my-5 justify-content-between align-items-center pb-5 dotted-border">
            <div className="col-12 col-lg-5">
                <h5 className='main-red fw-bold fs-3 my-4'>
                    Graphic Design
                </h5>
                <p>
                    I tools che utilizzo giornalmente per svolgere il mio lavoro nel campo del design includono 
                    Adobe Illustrator, Adobe Photoshop, Adobe InDesign, Blender, Figma.
                </p>
            </div>
            <div className="col-12 col-lg-5 black-border rounded-5 p-5 d-flex flex-wrap justify-content-center align-items-center">
                {graphicTechnologies.map((singleTech, techIndex)=>(
                    <div key={techIndex} className='icons-height mx-3 my-3'>
                        <img className='w-100 h-100' src={singleTech} alt={singleTech}/>
                    </div>
                ))}
            </div>
        </div>

        <div className="row g-0 my-5 justify-content-between align-items-center">
            <div className="col-12 col-lg-5 black-border rounded-5 p-5 d-flex flex-wrap justify-content-center align-items-center">
                {webDevTechnologies.map((singleTech, techIndex)=>(
                    <div key={techIndex} className='icons-height mx-3 my-3'>
                        <img className='w-100 h-100' src={singleTech} alt={singleTech}/>
                    </div>
                ))}
            </div>
            <div className="col-12 col-lg-5">
                <h5 className='main-red fw-bold fs-3 my-4'>
                    Web Development
                </h5>
                <p>
                    I tools che utilizzo giornalmente per svolgere il mio lavoro nel campo dello sviluppo web includono tecnologie front-end e back-end, tra cui:
                    HTML5, CSS3, Bootstrap, JavaScript, Vue.js, ReactJs, Sass, PHP, Laravel, MySql, Gestione di database relazionali, Git Versioning Control.
                </p>
            </div>
        </div>
    </div>
  )
}

export default TechnologiesSect
