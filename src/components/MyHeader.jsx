import { useState } from 'react'
import { ArrowRightUp, ArrowRightDown, ArrowLeftUp, ArrowLeftDown } from '../assets/icons/AllIcons'

const MyHeader = () => {
  return (
    <>
        <header className='my-bg py-4'>
            <div className="container">
                <ul className='list-unstyled m-0 d-flex justify-content-between align-items-center'>
                    <li className='text-white m-0 fw-bold'>Andrea Aliquò</li>
                    <li className='text-white m-0 fw-bold'>(Jr Full Stack Web Developer && Graphic Designer){"{"}</li>
                    <button className="my-btn px-5 py-2 d-flex align-items-center"><span className='me-4'>Contact Me</span> <ArrowRightUp width={'20px'} height={'20px'}/></button>
                </ul>
            </div>
        </header>
    </>
  )
}

export default MyHeader
