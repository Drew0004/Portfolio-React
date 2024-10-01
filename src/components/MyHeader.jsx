import { useState } from 'react'
import { ArrowRightUp, ArrowRightDown, ArrowLeftUp, ArrowLeftDown } from '../assets/icons/AllIcons'

const MyHeader = () => {
  return (
    <>
        <header className='py-4'>
            <div className="container">
              <nav className='row justify-content-between g-0'>
                <div className='col-3'>
                  <h5 className='text-uppercase fw-bold'>Andrea <br /> Aliquò</h5>
                </div>
                <ul className='col-6 list-unstyled m-0 d-flex justify-content-between align-items-center'>
                    <li>
                        <a href="#nogo" className='text-uppercase text-underline fw-bold text-black'>About</a>
                    </li>
                    <li>
                        <a href="#nogo" className='text-uppercase text-underline fw-bold text-black'>Works</a>
                    </li>
                    <li>
                        <button className="my-btn px-5 py-2 d-flex align-items-center">
                            <a href='/img/Andrea_Aliquò_Resume_.pdf' download="Andrea_Aliquò_Resume_.pdf" className='fw-bold text-decoration-none me-4 text-reset'>Resume</a> <ArrowRightDown width={'20px'} height={'20px'}/>
                        </button>
                    </li>
                    <li>
                        <button className="my-btn px-5 py-2 d-flex align-items-center">
                            <span className='fw-bold me-4'>Contact Me</span> <ArrowRightUp width={'20px'} height={'20px'}/>
                        </button>
                    </li>
                </ul>
              </nav>
            </div>
        </header>
    </>
  )
}

export default MyHeader
