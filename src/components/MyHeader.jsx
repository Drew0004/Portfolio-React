import { useRef } from 'react'
import { ArrowRightUp, ArrowRightDown, ArrowLeftUp, ArrowLeftDown } from '../assets/icons/AllIcons'
import OffCanva from './OffCanva'
import { Link } from 'react-router-dom';

const MyHeader = ({scrollToAbout, scrollToWorks}) => {

  return (
    <>
        <header className='py-4'>
            <div className="container-fluid">
              <nav className='row justify-content-between align-items-center g-0'>
                <div className='col-auto'>
                    <Link to={'/'} onClick={()=>{window.scrollTo(0, 0)}} className='text-reset text-decoration-none'>
                        <h5 className='text-uppercase fw-bold'>Andrea <br /> Aliquò</h5>
                    </Link>
                </div>
                <ul className='col-7 list-unstyled m-0 d-flex justify-content-between align-items-center'>
                    <li className='d-lg-block d-none'>
                        <Link to={'/'} state={{ scrollAbt: true }} className='text-reset text-decoration-none'>
                            <span onClick={scrollToAbout} className='text-uppercase text-decoration-underline fw-bold text-black c-pointer'>About</span>
                        </Link>
                    </li>
                    <li className='d-lg-block d-none'>
                        <Link to={'/'} state={{ scrollWorks: true }} className='text-reset text-decoration-none'>
                            <span onClick={scrollToWorks} className='text-uppercase text-decoration-underline fw-bold text-black c-pointer'>Works</span>
                        </Link>
                    </li>
                    <li className='d-lg-block d-none'>
                      <button className="my-btn px-4 py-2 d-flex align-items-center">
                            <a href='/img/Andrea_Aliquò_Resume.pdf' download="Andrea_Aliquò_Resume.pdf" className='fw-bold text-decoration-none me-4 text-reset'>Resume</a> <ArrowRightDown width={'20px'} height={'20px'}/>
                      </button>

                    </li>
                    <li className='d-lg-block d-none'>
                        <button className="my-btn px-4 py-2 d-flex align-items-center">
                            <span className='fw-bold me-4'>Contact Me</span> <ArrowRightUp width={'20px'} height={'20px'}/>
                        </button>
                    </li>
                </ul>
                <OffCanva scrollToAbout={scrollToAbout} scrollToWorks={scrollToWorks}/>
              </nav>
            </div>
        </header>
    </>
  )
}

export default MyHeader
