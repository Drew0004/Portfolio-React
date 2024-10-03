import React from 'react'
import { Square, Triangle, Circle, Star, Bars, ArrowRightDown} from '../assets/icons/AllIcons'

const ClaimSection = ({scrollToAbout}) => {
  return (
    <div className='img-responsive-claim-lg img-responsive-claim-md img-responsive-claim d-flex justify-content-center align-items-end min-h-700'>
        <h4 onClick={scrollToAbout} className='text-white text-decoration-underline text-uppercase fw-bold c-pointer mb-3'>
            // About me <ArrowRightDown width={20} height={20} className={'fill-white ms-3'}/>
        </h4>
    </div>
  )
}

export default ClaimSection
