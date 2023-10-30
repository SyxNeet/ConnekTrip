'use client'
import React, { useRef } from "react";
import banner1 from "@/assets/images/bannerHome.png";
import SlideBannerHomePage from "@/components/common/SlideBannerHomePage";
import icon1 from '@/assets/images/icon1.svg'
import icon2 from '@/assets/images/icon2.svg'
import icon3 from '@/assets/images/icon3.svg'
import line from '@/assets/images/Line.svg'
import Image from "next/image";


function Banner() {
  const scrollRef = useRef()
  const handleClick = (scrollRef) => {
    if (scrollRef && scrollRef.current) {
        scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'nearest',
        });
    }
  }
  const data = [
    {
      title: "BEGINS WITH A SINGLE STEP",
      image: banner1,
    },
    {
      title: "BEGINS2 WITH2 A2 SINGLE2 STEP2",
      image: banner1,
    },
  ];
  return (
    <section className="w-full md:h-[53rem] h-[18.8125rem] relative overflow-hidden">
      <SlideBannerHomePage data={data} />
      <div
      onClick={() => handleClick(scrollRef)}
      className="discoveryBlock md:w-[8.5625rem] w-[3.875rem] h-[3.25rem] md:h-[8.8125rem] top-[65%] md:left-[11.25rem] left-[1.94rem] absolute z-[10]">
        <div className="discoveryAb md:w-[4.625rem] w-[1.5rem] h-[1.5rem] md:h-[4.62rem] rounded-[50%]">
          <Image src={line} alt='line'  />
        </div>
      </div>
      <div className="flex flex-col md:gap-[1.5rem] items-center fixed z-[100] bottom-[2rem] md:right-[2.75rem] right-[0.44rem]">
        <Image src={icon1} alt="icon1" width={100} height={100} quality={100} className="md:w-[3rem] w-[2rem] h-[2rem] md:h-[3rem] cursor-pointer" />
        <Image src={icon2} alt="icon2" width={100} height={100} quality={100} className="md:w-[3rem] w-[2rem] h-[2rem] md:h-[3rem] cursor-pointer" />
        <Image src={icon3} alt="icon3" width={100} height={100} quality={100} className="md:w-[3rem] w-[2rem] h-[2rem] md:h-[3rem] cursor-pointer" />
      </div>

      <div ref={scrollRef}></div>
    </section>
  );
}

export default Banner;
