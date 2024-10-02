import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ArrowRightUp, ArrowRightDown, ArrowLeftUp, ArrowLeftDown } from '../assets/icons/AllIcons'

const OffCanva = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className='black-border p-2 col-auto d-lg-none d-block'>
            <GiHamburgerMenu className='c-pointer' size={20} onClick={handleShow}/>
            <Offcanvas className="col-12 col-md-50 col-lg-50" placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <h5 className='text-uppercase fw-bold m-0'>Andrea <br /> Aliquò</h5>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='list-unstyled m-0'>
                        <li className='dotted-border py-4'>
                            <a href="#nogo" className='text-uppercase text-underline fw-bold fs-5 text-black'>About</a>
                        </li>
                        <li className='dotted-border py-4'>
                            <a href="#nogo" className='text-uppercase text-underline fw-bold fs-5 text-black'>Works</a>
                        </li>
                        <li className='dotted-border py-4'>
                            <button className="my-btn px-4 py-2 d-flex align-items-center">
                                <a href='/img/Andrea_Aliquò_Resume_.pdf' download="Andrea_Aliquò_Resume_.pdf" className='fw-bold text-decoration-none me-4 text-reset'>Resume</a> <ArrowRightDown width={'20px'} height={'20px'}/>
                            </button>
                        </li>
                        <li className='dotted-border py-4'>
                            <button className="my-btn px-4 py-2 d-flex align-items-center">
                                <span className='fw-bold me-4'>Contact Me</span> <ArrowRightUp width={'20px'} height={'20px'}/>
                            </button>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    )
}

export default OffCanva
