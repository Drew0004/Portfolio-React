import React from 'react'
import { Square, Triangle, Circle, Star, Bars} from '../assets/icons/AllIcons'

const ClaimSection = () => {
  return (
    <div className='main-red-bg'>
        <div className="row align-items-end g-0">
            {/* left side  */}
            <div className="col-6 d-flex flex-wrap my-5">

                {/* black stripes */}
                <div className='bg-black my-1 col-12' style={{ height: '60px' }}></div>
                <div className='bg-black my-1 col-12' style={{ height: '30px' }}></div>
                <div className='bg-black my-1 col-12' style={{ height: '15px' }}></div>
                <div className='bg-black my-1 col-12' style={{ height: '10px' }}></div>
                {/* shapes */}
                <div className="col-6 mt-5">
                    <div className="container-fluid">
                        <Star height={150} className={'m-2'}/>
                        <Triangle height={150} className={'m-2'}/>
                        <Square height={150} className={'m-2'}/>
                        <Circle height={150} className={'m-2'}/>
                    </div>
                </div>

                {/* vertical bars */}
                <div className="col-6 mt-5 text-end">
                    <Bars height={300}/>
                </div>

            </div>

            {/* right side */}
            <div className="col-6 mt-5" style={{ maxHeight:'400px' }}>
                <img style={{ objectPosition: 'right' }} className='w-100 h-100 object-fit-contain'  src="public/img/Astronaut.png" alt="Astronaut" />
            </div>
        </div>
    </div>
  )
}

export default ClaimSection
