import React from 'react'
import { useLocation } from 'react-router-dom';

const ProjectFunctionality = () => {
    const location = useLocation();
    const { project } = location.state || {};
    return (
        <div className='my-5 container-fluid'>
            <div className="row g-0">
                <div className="soft-gray-bg col-12 col-lg-5 p-5">
                    <h5 className='text-black fw-bold fs-3 my-4'>
                        // FUNCTIONALITY
                    </h5>
                    <ol className='ps-3'>
                        {project.techFunct.map((singleFunct, singleFunctIndex)=>(
                            <li className='py-1' key={singleFunctIndex}>
                                {singleFunct}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ProjectFunctionality
