"use client";
import Image from "next/image";
import slide1 from "@/assets/images/bannerSlide1.png";
import slide2 from "@/assets/images/bannerHome.png";
import image from "@/assets/images/destination.png";
import Destination_item from "@/components/common/Destination_item";
import imgLocation from "@/assets/images/imgLocation.svg";
import star from "@/assets/images/star.svg";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

function SlideTour() {
  const data = [
    {
      img: slide1,
      imgLocation: imgLocation,
      location: "Nghe An, Viet Nam",
      text: "Hoa Lu ancient capital Ninh Binh ",
      star: star,
      estimate: "4.8 / 5",
    },
    {
      img: slide2,
      imgLocation: imgLocation,
      location: "Nghe An, Viet Nam",
      text: "Hoa Lu ancient capital Ninh Binh ",
      star: star,
      estimate: "4.8 / 5",
    },
    {
      img: slide1,
      imgLocation: imgLocation,
      location: "Nghe An, Viet Nam",
      text: "Hoa Lu ancient capital Ninh Binh ",
      star: star,
      estimate: "4.8 / 5",
    },
    {
      img: slide2,
      imgLocation: imgLocation,
      location: "Nghe An, Viet Nam",
      text: "Hoa Lu ancient capital Ninh Binh ",
      star: star,
      estimate: "4.8 / 5",
    },
    {
      img: slide1,
      imgLocation: imgLocation,
      location: "Nghe An, Viet Nam",
      text: "Hoa Lu ancient capital Ninh Binh ",
      star: star,
      estimate: "4.8 / 5",
    },
    {
      img: slide2,
      imgLocation: imgLocation,
      location: "Nghe An, Viet Nam",
      text: "Hoa Lu ancient capital Ninh Binh ",
      star: star,
      estimate: "4.8 / 5",
    },
    {
      img: slide1,
      imgLocation: imgLocation,
      location: "Nghe An, Viet Nam",
      text: "Hoa Lu ancient capital Ninh Binh ",
      star: star,
      estimate: "4.8 / 5",
    },
    {
      img: slide2,
      imgLocation: imgLocation,
      location: "Nghe An, Viet Nam",
      text: "Hoa Lu ancient capital Ninh Binh ",
      star: star,
      estimate: "4.8 / 5",
    },
  ];
  const [indexSlide, setIndexSlide] = useState(0);
  const [select, setSelect] = useState(0);
  console.log(select);
  const swiperRef = useRef();
  const handleSlideChange = (swiper) => {
    setIndexSlide(swiper.realIndex);
    setSelect(swiper.realIndex);
  };
  return (
    <section className="slide_tour relative h-[100vh]">
      <div className=" flex w-[60%] h-full absolute swiper_des_tour">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          onSlideChange={handleSlideChange}
          loop={true}
          onBeforeInit={(swiper) => {
            if (swiperRef) {
              swiperRef.current = swiper;
            }
          }}
          className=""
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <Destination_item imgHeight={"md:h-[28.9rem]"} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SlideTour;
