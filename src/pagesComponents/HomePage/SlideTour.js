"use client";
import Image from "next/image";
import slide1 from "@/assets/images/bannerSlide1.png";
import slide2 from "@/assets/images/bannerHome.png";
import Destination_item from "@/components/common/Destination_item";
import imgLocation from "@/assets/images/imgLocation.svg";
import star from "@/assets/images/star.svg";
import React, { useEffect, useRef, useState } from "react";
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
    }
  ];
  const [indexSlide, setIndexSlide] = useState(0);
  const nextRef = useRef()
  const prevRef = useRef()
  useEffect(()=>{
    if(nextRef){
      nextRef?.current.addEventListener('click',()=>{
        const listSlide = document.querySelectorAll('.item')
        document.getElementById('slide').appendChild(listSlide[0])
      })
    }
    
    const prev = document.getElementById('prev')
    if(prev){
      prev.addEventListener('click',()=> {
        const listSlide = document.querySelectorAll('.item')
        document.getElementById('slide').prepend(listSlide[listSlide.length - 1])
      })
    }

    //  check handleChangeSlide trong container
    let startX 
    document.addEventListener('mousedown',(e)=> {
      if(e.target.closest('.containerSlide')){
        startX = e.pageX
      }
    })

    document.addEventListener('mouseup',(e) => {
      if(e.target.closest('.containerSlide')){
        let deltaX = e.pageX - startX
        if(deltaX > 0) {
          const listSlide = document.querySelectorAll('.item')
          document.getElementById('slide').appendChild(listSlide[0])

        }else if(deltaX < 0){
          const listSlide = document.querySelectorAll('.item')
          document.getElementById('slide').prepend(listSlide[listSlide.length - 1])
        }
      }
    })
  },[])
  return (
    <section className="slide_tour relative h-[100vh]">
      <div className="containerSlide">
        <div id="slide">
          {
            data?.map((item,index)=> (
              <Destination_item key={index} indexSlide={indexSlide} imgHeight={'md:h-[28.9rem] h-[9.27rem]'} className={'item'} data={item} />
            ))
          }
      </div>
      <div class="buttons" ref={prevRef}>
          <button id="prev">
            <svg xmlns="http://www.w3.org/2000/svg" className="md:w-[1.5rem] md:h-[1.5rem]" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
          <button id="next" ref={nextRef}>
            <svg xmlns="http://www.w3.org/2000/svg" className="md:w-[1.5rem] md:h-[1.5rem]" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
        </div>
    </div>
    </section>
  );
}

export default SlideTour;
