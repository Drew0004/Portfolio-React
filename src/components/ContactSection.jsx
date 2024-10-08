import React, {forwardRef} from 'react'

const ContactSection = forwardRef((props, contactRef) => {
  return (
    <div ref={contactRef} className='container-fluid mt-5'>
        <h2 className='fw-bold text-uppercase text-black secondary-titles'>
            //04 - <br /> Contact
        </h2>
    </div>
  )
})

export default ContactSection
