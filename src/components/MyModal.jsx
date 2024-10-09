import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ArrowRightUp, ArrowRightDown, ArrowLeftUp, ArrowLeftDown } from '../assets/icons/AllIcons'

const MyModal = (props) => {
    const handleClose = () => {
        props.onHide();
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        }, 300);
    };
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className='main-red'>
              Invio del messaggio effettuato con successo!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>E adesso?</h4>
            <p>
                Grazie mille per il messaggio! La sua comunicazione è importante per me, e desidero assicurarle che mi impegnerò a rispondere nel più breve tempo possibile. 
                Se ha ulteriori domande o necessità di chiarimenti, non esiti a contattarmi nuovamente.
                A presto!
            </p>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button className='my-btn' onClick={handleClose}>Close</Button> */}
            <button onClick={handleClose} className="carousel-btn px-4 py-2 d-flex align-items-center">
                <span  className='fw-bold me-4'>Chiudi</span> <ArrowRightUp width={'20px'} height={'20px'}/>
            </button>
          </Modal.Footer>
        </Modal>
      );
}

export default MyModal
