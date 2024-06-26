import { useState } from 'react'

const MyHeader = () => {
  return (
    <>
        <header className='my-bg py-4'>
            <div className="container">
                <ul className='list-unstyled m-0 d-flex justify-content-between align-items-center'>
                    <li className='text-white m-0 fw-bold'>Andrea Aliquò</li>
                    <li className='text-white m-0 fw-bold'>(Jr Full Stack Web Developer && Graphic Designer){"{"}</li>
                    <li className='btn rounded-5 my-btn px-4 fw-bold'>Contact me</li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default MyHeader
