import React, {forwardRef, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projects } from '../assets/storage/data';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowRightUp, ArrowRightDown, ArrowLeftUp, ArrowLeftDown } from '../assets/icons/AllIcons'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

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
        pagination={
            { 
                type : 'bullets',
                clickable: true
            }
        }
        className="mySwiper">
        {
          projects.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className='min-h-200 min-h-md-500 min-h-lg-700 slider-img' style={{ backgroundImage: `url('${slide.mainImg}')`}}>
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <h2 className='fw-bold text-uppercase main-red secondary-titles'>
                            // 0 {slideIndex + 1}
                        </h2>
                        <Link
                            to={`/projects/${slide.title}`}
                            className='text-reset text-decoration-none'
                            state={{ 
                                project: slide
                            }}
                            >
                            <button className="carousel-btn px-3 py-1 px-md-4 py-md-2 d-flex align-items-center">
                                <span className='fw-bold me-4'>View Project</span> <ArrowRightUp width={'20px'} height={'20px'}/>
                            </button>
                        </Link>
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

