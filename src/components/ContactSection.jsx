import React, {forwardRef, useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import ValidateForm from '../utils/ValidateForm';
import { ArrowRightUp, ArrowRightDown, ArrowLeftUp, ArrowLeftDown } from '../assets/icons/AllIcons'

const ContactSection = forwardRef((props, contactRef) => {
    const [errors, setErrors] = useState({});
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        const formData = e.target;
        const formErrors = ValidateForm(formData);

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        emailjs
        .sendForm(`${import.meta.env.VITE_EMAILJS_SERVICE_ID}`, `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`, form.current, {
            publicKey: `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`,
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                // console.log('FAILED...', error.text);
                alert('Errore! Invio del messaggio non riuscito.')
            },
        );
    };
    return (
        <div ref={contactRef} className='container-fluid mt-5'>
            <h2 className='fw-bold text-uppercase text-black secondary-titles'>
                //04 - <br /> Contact
            </h2>
            <div className="row g-0 my-5">
                <div className="col-12 col-lg-6">
                    <h5 className='main-red text-uppercase fw-bold fs-3 my-4'>
                        Let's keep in touch
                    </h5>
                    <form className="row g-3 w-100 justify-content-between my-5" ref={form} onSubmit={sendEmail}>
                        <div className="col-6">
                            <input className='my-custom-input py-3' type="text" name="userName" required minLength={3} placeholder='Nome o Nome Azienda'/>
                            {errors.userName && <p className="main-red">{errors.userName}</p>}
                        </div>

                        <div className="col-6">
                            <input className='my-custom-input py-3' type="email" name="userEmail" placeholder='Email' required minLength={3}/>
                            {errors.userEmail && <p className="main-red">{errors.userEmail}</p>}
                        </div>

                        <div className="col-12 my-5">
                            <textarea className='my-custom-input min-h-150' name="message" required minLength={10} placeholder='Messaggio'/>
                            {errors.message && <p className="main-red">{errors.message}</p>}
                        </div>
                        <div className='col-12 d-flex justify-content-end'>
                            <button type="submit" className="my-btn px-4 py-2 d-flex align-items-center">
                                <span  className='fw-bold me-4'>Send</span> <ArrowRightUp width={'20px'} height={'20px'}/>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-lg-6">
                    <ArrowRightUp className={'w-100 h-100 object-fit-contain'}/>
                </div>
            </div>
        </div>
    )
    })

export default ContactSection
