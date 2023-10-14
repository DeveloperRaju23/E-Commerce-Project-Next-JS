
import React from 'react'
import Sidebar from '../SideBar/Sidebar'

import Container from '@/pages/container'
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
const Hero = () => {
    const sliderInfo = [
        {
            id:'1',
            name:'Tom Cruise',
            img:'https://i.ibb.co/ZhKfjsP/slider.png',
            title:'Founder & Chairman'
    
        },
        {
            id:'2',
            name:'Tom Cruise',
            img:'https://i.ibb.co/ZhKfjsP/slider.png',
            title:'Founder & Chairman'
    
        },
        {
            id:'3',
            name:'Tom Cruise',
            img:'https://i.ibb.co/ZhKfjsP/slider.png',
            title:'Founder & Chairman'
    
        },
        {
            id:'4',
            name:'Tom Cruise',
            img:'https://i.ibb.co/ZhKfjsP/slider.png',
            title:'Founder & Chairman'
    
        },
    ]
  return (
    <Container>
       <div className='flex flex-col md:flex-row justify-center items-center gap-[40px]'>
       <div className='lg:w-[250px] hidden lg:block pt-10  border-r-2'>
            <Sidebar/>
        </div>
        <div className='lg:w-[860px]  w-full mt-[40px]'>
        <Swiper
          modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
            }}
          
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
          >
            {sliderInfo?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className=" cursor-pointer  px-[10px] lg:px-[0px]">
                 <div className='flex justify-center '>
                 <img className='rounded-md' src={item.img} alt="" />
                 </div>
                 <span className='absolute bottom-[14%] left-[8%] border-b text-sm md:text-[18px] text-whiteColor'>Shop Now</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
       </div>
    </Container>
  )
}

export default Hero