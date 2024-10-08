import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightUp, ArrowRightDown, ArrowLeftUp, ArrowLeftDown } from '../../assets/icons/AllIcons'

const ErrorPage = () => {
  return (
    <div className='vh-100 main-red-bg d-flex justify-content-center align-items-center'>
        <div>
            <i className="fa-solid fa-triangle-exclamation text-white secondary-titles text-center d-block"></i>
            <h2 className='fw-bold text-uppercase text-white display-1 text-center mt-4'>
                Ops...
            </h2>

            <h6 className='my-4 text-white fw-bold fs-6 text-center'>
                Looks like the page you're trying to reach doesn't exist!
            </h6>

            <Link className='text-reset text-decoration-none' to={'/'}>
                <button className="carousel-btn px-4 py-2 d-flex align-items-center mx-auto">
                    <ArrowLeftUp width={'20px'} height={'20px'}/> <span className='fw-bold text-decoration-none ms-4 text-reset'>Back Home</span> 
                </button>
            </Link> 
        </div>
    </div>
  )
}

export default ErrorPage
