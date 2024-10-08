import React from 'react'
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowRightUp, ArrowRightDown, ArrowLeftUp, ArrowLeftDown } from '../assets/icons/AllIcons'
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const ProjectFunctionality = () => {
    const location = useLocation();
    const { project } = location.state || {};
    return (
        <div className='container-fluid'>
            <div className="row g-0 justify-content-between">
                <div className="soft-gray-bg col-12 p-5 my-5">
                    <h5 className='text-black fw-bold fs-3 my-4'>
                        // FUNCTIONALITY
                    </h5>
                    <ol className='ps-3'>
                        {project.techFunct.map((singleFunct, singleFunctIndex)=>(
                            <li className='py-1' key={singleFunctIndex}>
                                {singleFunct}
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="col-12 mb-5 pb-5 dotted-border">
                    <Swiper
                        style={{ 
                        "--swiper-pagination-color": "#FF294D",
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
                            project.carouselPics.map((slide, slideIndex) => (
                                <SwiperSlide key={slideIndex}>
                                    <div className='min-h-200 min-h-md-500 min-h-lg-700 slider-img' style={{ backgroundImage: `url('${slide}')` }}>
                                    </div>
                                </SwiperSlide>
                            ))
                        
                        }
                    </Swiper>
                </div>
            </div>
            <div className="row g-3 justify-content-center align-items-center mb-5">
                <Link className='text-reset text-decoration-none col-auto' to={'/'}>
                    <button className="my-btn px-4 py-2 d-flex align-items-center">
                        <ArrowLeftUp width={'20px'} height={'20px'}/> <span className='fw-bold text-decoration-none ms-4 text-reset'>Back Home</span> 
                    </button>
                </Link> 
                <button className="col-auto my-btn px-4 py-2 d-flex align-items-center">
                    <a href={project.repoLink} target='_blank' className='fw-bold text-decoration-none me-4 text-reset'>View Code</a> <ArrowRightUp width={'20px'} height={'20px'}/>
                </button>
            </div>
        </div>
    )
}

export default ProjectFunctionality
