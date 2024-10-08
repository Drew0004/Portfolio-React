import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { artworks } from '../assets/storage/data'
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const ArtworksSlider = () => {
  return (
    <section>
        <div className="main-red-bg py-5">
            <div className="container-fluid">
                <h2 className='fw-bold text-uppercase text-black secondary-titles text-end'>
                    //03 <br /> Artworks
                </h2>
            </div>
        </div>
        <div>
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
                className="mySwiper bg-black">
                {
                artworks.map((slide, slideIndex) => (
                    <SwiperSlide key={slideIndex}>
                        <div className='min-h-200 min-h-md-500 min-h-lg-700 artwork-img' style={{ backgroundImage: `url('${slide}')` }}>
                        </div>
                    </SwiperSlide>
                    ))
                
                }
            </Swiper>
        </div>
      
    </section>
  )
}

export default ArtworksSlider
