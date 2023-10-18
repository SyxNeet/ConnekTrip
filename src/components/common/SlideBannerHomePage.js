'use client'
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Aos from "aos";
function SlideBannerHomePage(data) {
    useEffect(()=>{
        Aos.init()
        Aos.refresh()
    },[])
  return (
    <div className="h-full">
        <Swiper 
            modules={[Pagination]} 
            className="mySwiper h-full"
            slidesPerView={1}
            pagination={true}
            paginationClickable={true}
        >
            {data?.data?.map((item,index)=>(
                <SwiperSlide key={index} className="relative">
                    <div className='relative flex items-center h-full'>
                        <Image src={item?.image} alt='banner' fill quality={100} className='object-cover' />
                        <div className='md:pl-[11.25vw] z-1 relative w-[70rem]'>
                            <span 
                                data-aos-disabled='true'
                                data-aos-once='true'
                                data-aos='fade-up'
                                data-aos-duration='1000'
                                className='text-[#fff] md:text-[6.25rem] font-bold leading-[1.24] tracking-[0.0625rem]'>
                                {item?.title}
                            </span>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='absolute z-[1] bottom-[-5%] md:w-full md:h-[14.25rem]' width="1600" height="228" viewBox="0 0 1600 228" fill="none">
                        <path d="M0 36.9048C621.444 -12.314 971.788 -12.2892 1600 36.9048V228H0V36.9048Z" fill="url(#paint0_linear_1_1173)"/>
                            <defs>
                                <linearGradient id="paint0_linear_1_1173" x1="800" y1="228" x2="800" y2="36.9049" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#222222"/>
                                <stop offset="1" stop-color="#222222" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                    </svg>
                </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}

export default SlideBannerHomePage