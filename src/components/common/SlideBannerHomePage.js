"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Aos from "aos";
function SlideBannerHomePage(data) {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="h-full">
      <Swiper
        modules={[Pagination]}
        className="mySwiper h-full"
        slidesPerView={1}
        pagination={true}
        paginationClickable={true}
      >
        {data?.data?.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative flex items-center h-full">
              <Image
                src={item?.image}
                alt="banner"
                fill
                quality={100}
                className="object-cover z-[-1]"
              />
              <div className="md:pl-[11.25rem] z-1 relative md:w-[70rem] w-full max-md:px-[0.94rem]">
                <span
                  data-aos-disabled="true"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-[#fff] font-poppin md:text-[6.25rem] text-[1.875rem] font-bold leading-[1.24] tracking-[0.0625rem]"
                >
                  {item?.title}
                </span>
              </div>
            <div className="bg-banner z-[1] bottom-[-5%] left-0 right-0 w-full md:h-[14.25rem] h-[4.9375rem]"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlideBannerHomePage;
