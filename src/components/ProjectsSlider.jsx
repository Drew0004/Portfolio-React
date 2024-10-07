import React, {forwardRef, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projects } from '../assets/storage/data';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowRightUp, ArrowRightDown, ArrowLeftUp, ArrowLeftDown } from '../assets/icons/AllIcons'
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
              <SwiperSlide key={slideIndex}>
                <div className='min-h-200 min-h-md-500 min-h-lg-700 slider-img' style={{ backgroundImage: `url('${slide.mainImg}')`}}>
                    <div className="container-fluid">
                        <h2 className='fw-bold text-uppercase main-red primary-titles'>
                            // 0 {slideIndex + 1}
                        </h2>
                    </div>
                </div>
              </SwiperSlide>
            ))
          
        }
      </Swiper>
    </div>
  );
})

export default ProjectSlider;

