import React, {forwardRef, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projects } from '../assets/storage/data';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const ProjectSlider = forwardRef((props, worksRef) => {
  return (
    <div ref={worksRef}>
      <Swiper
        style={{ 
          "--swiper-pagination-color": "#FF294D"
        }}         
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        loop={true}
        pagination={{ type : 'bullets'}}
        className="mySwiper">
        {
          projects.map((slide, slideIndex) => (
              <SwiperSlide className='min-h-700' key={slideIndex}>
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

