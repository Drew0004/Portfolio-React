import React, {forwardRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projects } from '../assets/storage/data';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const ProjectSlider = forwardRef((props, worksRef) => {
  return (
    <div ref={worksRef}>
      <Swiper         
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true} 
        className="mySwiper">
        {
          projects.map((slide, slideIndex) => (
              <SwiperSlide className='min-h-700 c-ew' key={slideIndex}>
                <div className='min-h-700' style={{ backgroundImage: `url('${slide.mainImg}')`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                  Ciao
                </div>
              </SwiperSlide>
            ))
          
        }
      </Swiper>
    </div>
  );
})

export default ProjectSlider;

