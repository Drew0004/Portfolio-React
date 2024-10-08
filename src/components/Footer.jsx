import React from 'react'

const Footer = () => {
  return (
    <div className='main-red-bg py-4'>
        <div className="container-fluid">
            <div className="row g-0 justify-content-between align-items-center">
                <div className="col-auto">
                    <a className='text-black fw-bold text-decoration-none' href="mailto:andrea.aliquo99@gmail.com">andrea.aliquo99@gmail.com</a>
                </div>
                <div className="col-auto">
                    <a href="https://www.linkedin.com/in/andreaaliquò4" target="_blank">
                        <img style={{ height:'30px', width:'30px' }} className='mx-2 my-3 my-md-0' src="/img/Technologies/linkedin-rounded-svgrepo-com.svg" alt="LinkedIn Icon" />
                    </a>
                    <a href="https://www.behance.net/andrewaliqu" target="_blank">
                        <img style={{ height:'30px', width:'30px' }} className='mx-2 my-3 my-md-0' src="/img/Technologies/behance-rounded-svgrepo-com.svg" alt="Behance Icon" />
                    </a>
                    <a href="https://github.com/Drew0004" target="_blank">
                        <img style={{ height:'30px', width:'30px' }} className='mx-2 my-3 my-md-0' src="/img/Technologies/github-142-svgrepo-com.svg" alt="GitHub Icon" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
