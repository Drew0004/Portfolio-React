import { useState } from 'react'
import { ArrowRightUp, ArrowRightDown, ArrowLeftUp, ArrowLeftDown } from '../assets/icons/AllIcons'
import OffCanva from './OffCanva'

const MyHeader = () => {
  return (
    <>
        <header className='py-4'>
            <div className="container-fluid">
              <nav className='row justify-content-between align-items-center g-0'>
                <div className='col-auto'>
                  <h5 className='text-uppercase fw-bold'>Andrea <br /> Aliquò</h5>
                </div>
                <ul className='col-7 list-unstyled m-0 d-flex justify-content-between align-items-center'>
                    <li className='d-lg-block d-none'>
                        <a href="#nogo" className='text-uppercase text-underline fw-bold text-black'>About</a>
                    </li>
                    <li className='d-lg-block d-none'>
                        <a href="#nogo" className='text-uppercase text-underline fw-bold text-black'>Works</a>
                    </li>
                    <li className='d-lg-block d-none'>
                        <button className="my-btn px-4 py-2 d-flex align-items-center">
                            <a href='/img/Andrea_Aliquò_Resume.pdf' download="Andrea_Aliquò_Resume.pdf" className='fw-bold text-decoration-none me-4 text-reset'>
                                <span className='fw-bold me-4'>Resume</span> <ArrowRightDown width={'20px'} height={'20px'}/>
                            </a> 
                        </button>
                    </li>
                    <li className='d-lg-block d-none'>
                        <button className="my-btn px-4 py-2 d-flex align-items-center">
                            <span className='fw-bold me-4'>Contact Me</span> <ArrowRightUp width={'20px'} height={'20px'}/>
                        </button>
                    </li>
                </ul>
                <OffCanva/>
              </nav>
            </div>
        </header>
    </>
  )
}

export default MyHeader
