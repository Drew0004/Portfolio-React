import React from 'react'
import { aboutMe } from '../assets/storage/data'

const AboutSection = () => {
  return (
    <section id='about-section'>
        <div className="row g-0 justify-content-between">
            {/* Text section */}
            <div className="col-7 py-5">
                <h1 className='text-white hello-claim'>{'<'}Hi!{'>'}</h1>
                <h2 className='text-white fw-bold my-4'>Who am i</h2>
                <p className='text-white my-4'>{aboutMe}</p>
            </div>

            {/* Picture section */}
            <div className="col-4 py-5">
                <div className='my-pic-container'>
                    <img className='w-100 h-100' src="/img/FotoCvDef.jpg" alt="Andrea Aliquò" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
