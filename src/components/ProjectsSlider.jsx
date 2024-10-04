import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projects } from '../assets/storage/data';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const ProjectSlider = () => {
  return (
    <div>
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
                {/* <div className='min-h-700' style={{ backgroundImage: `url(${slide.mainImg})`}}>
                  Ciao
                </div> */}
                <img className='w-100 h-100 object-fit-contain' src={slide.mainImg} alt={`Slide ${slide.title}`} />
              </SwiperSlide>
            ))
          
        }
      </Swiper>
    </div>
  );
}

export default ProjectSlider;

