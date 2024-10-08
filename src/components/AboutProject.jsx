import React from 'react'
import { useLocation } from 'react-router-dom';

const AboutProject = () => {
    const location = useLocation();
    const { project } = location.state || {};
    return (
        <div className='main-red-bg py-5'>
            <div className="container-fluid">
                <div className='row g-0 justify-content-between'>
                    <div className="col-12">
                        <h2 className='secondary-titles fw-bold text-uppercase text-black my-5'>
                            // {project.title}
                        </h2>
                    </div>
                    <div className="col-12 col-md-8 offset-0 offset-md-4">
                        <h5 className='mt-5 text-white text-uppercase fw-bold fs-3 mb-4 text-end'>
                            //About
                        </h5>
                        <p className='text-white'>
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AboutProject
