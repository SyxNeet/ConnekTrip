"use client";
import img1 from "@/assets/images/imgTour1.png";
import img2 from "@/assets/images/imgTour2.png";
import img3 from "@/assets/images/img3.png";
import img4 from "@/assets/images/img4.png";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/navigation";
import TourExperience from "@/components/common/TourExperience";
function Experience() {
  const data = [
    {
      name: "MOUTAINOUS NORTHERN VIETNAM",
      tours: [
        {
          image: img1,
          text: "Ha Long Bay",
        },
        {
          image: img2,
          text: "Bana Hill",
        },
        {
          image: img3,
          text: "Pho Co",
        },
        {
          image: img4,
          text: "Da Nang",
        },
        {
          image: img1,
          text: "Ha Long Bay",
        },
        {
          image: img2,
          text: "Bana Hill",
        },
        {
          image: img3,
          text: "Pho Co",
        },
        {
          image: img2,
          text: "Da Nang",
        },
      ],
    },
    {
      name: "HANOI & SURROUNDS",
      tours: [
        {
          image: img1,
          text: "Ha Long Bay",
        },
        {
          image: img2,
          text: "Bana Hill",
        },
        {
          image: img3,
          text: "Pho Co",
        },
        {
          image: img2,
          text: "Da Nang",
        },
        {
          image: img4,
          text: "Ha Long Bay",
        },
        {
          image: img2,
          text: "Bana Hill",
        },
        {
          image: img4,
          text: "Pho Co",
        },
        {
          image: img4,
          text: "Da Nang",
        },
      ],
    },
    {
      name: "HALONG BAY, NINH BINH & RED RIVER DELTA",
      tours: [
        {
          image: img3,
          text: "Ha Long Bay",
        },
        {
          image: img2,
          text: "Bana Hill",
        },
        {
          image: img1,
          text: "Pho Co",
        },
        {
          image: img4,
          text: "Da Nang",
        },
        {
          image: img1,
          text: "Ha Long Bay",
        },
        {
          image: img3,
          text: "Bana Hill",
        },
        {
          image: img1,
          text: "Pho Co",
        },
        {
          image: img4,
          text: "Da Nang",
        },
      ],
    },
    {
      name: "CENTRAL VIETNAM",
      tours: [
        {
          image: img4,
          text: "Ha Long Bay",
        },
        {
          image: img2,
          text: "Bana Hill",
        },
        {
          image: img1,
          text: "Pho Co",
        },
        {
          image: img3,
          text: "Da Nang",
        },
        {
          image: img2,
          text: "Ha Long Bay",
        },
        {
          image: img4,
          text: "Bana Hill",
        },
        {
          image: img1,
          text: "Pho Co",
        },
        {
          image: img2,
          text: "Da Nang",
        },
      ],
    },
    {
      name: "CENTRAL HIGHLANDS",
      tours: [
        {
          image: img1,
          text: "Ha Long Bay",
        },
        {
          image: img2,
          text: "Bana Hill",
        },
        {
          image: img4,
          text: "Pho Co",
        },
        {
          image: img3,
          text: "Da Nang",
        },
        {
          image: img1,
          text: "Ha Long Bay",
        },
        {
          image: img2,
          text: "Bana Hill",
        },
        {
          image: img4,
          text: "Pho Co",
        },
        {
          image: img2,
          text: "Da Nang",
        },
      ],
    },
    {
      name: "HO CHI MINH CITY & SURROUNDS",
      tours: [
        {
          image: img3,
          text: "Ha Long Bay",
        },
        {
          image: img1,
          text: "Bana Hill",
        },
        {
          image: img4,
          text: "Pho Co",
        },
        {
          image: img2,
          text: "Da Nang",
        },
        {
          image: img3,
          text: "Ha Long Bay",
        },
        {
          image: img1,
          text: "Bana Hill",
        },
        {
          image: img4,
          text: "Pho Co",
        },
        {
          image: img2,
          text: "Da Nang",
        },
      ],
    },
  ];

  const [indexSlide, setIndexSlide] = useState(0);
  const [indexSlide2, setIndexSlide2] = useState(0);
  const [select, setSelect] = useState(0);
  const [realIndexProgress, setRealIndexProgress] = useState(0);
  const swiperRef = useRef();
  const swiperRef2 = useRef();

  const handleNextSlide = () => {
    swiperRef?.current?.slideNext();
  };
  const handlePreSlide = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleSlideChange = (swiper) => {
    setIndexSlide(swiper.realIndex);
    setRealIndexProgress(swiper.realIndex);
  };
  const handleNextSlide2 = () => {
    swiperRef2?.current?.slideNext();
  };
  const handlePreSlide2 = () => {
    swiperRef2?.current?.slidePrev();
  };
  const handleSlideChange2 = (swiper) => {
    setIndexSlide2(swiper.realIndex);
  };
  const progressLength = data[select]?.tours?.length;

  return (
    <section className="bg-[#352e2e] md:pt-[7.5rem] md:pb-[6.87rem] pt-[4.06rem] max-md:pl-[0.94rem] max-md:pb-[4rem]">
      <div className="circle-1 z-[-1] md:w-[72.875rem] md:h-[72.875rem]"></div>
      <div className="circle-1 z-[-1] right-0"></div>
      <h2 className="heading-1 md:mb-[1.5rem] md:pl-[11.25rem]">
        TOURS & EXPERIENCE
      </h2>
      <div className="flex items-center max-md:flex-col">
        {/* ------------------------------------contnet-left- ---------------------------------*/}
        <div className="max-md:hidden md:w-[35.75rem] md:h-[46.4375rem] items-center md:gap-[2rem]  flex flex-col bg-[#222] md:py-[3.31rem] md:pl-[11.25rem] md:pr-[1.75rem]">
          {/* list tour name */}
          <div className="flex flex-col md:gap-[2rem]">
            {data?.map((item, index) => (
              // click text-> xanh
              <h3
                key={index}
                className={`md:text-[0.875rem]  tracking-[0.00219rem] font-mons text-center items-stretch  cursor-pointer ${index === select ? "text-[#5CC4BB]" : "text-[#fff]"
                  }`}
                onClick={() => setSelect(index)}
              >
                {item?.name}
              </h3>
            ))}
          </div>

          {/* sub logo */}

          <div className="flex flex-col md:gap-[1rem] items-center">
            <div className="md:w-[0.0625rem] md:h-[2.75rem] bg-[#ffff]"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[1.14179rem] md:h-[1.5rem]"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                d="M17.9356 8.22486C16.3484 6.62484 16.2244 6.44984 16.2244 6.44984L10.0246 12.7499L3.60155 6.42484C0.37764 8.77486 0.0304473 14.0499 2.18799 16.2249C4.34552 18.3999 10.0494 24 10.0494 24L17.2164 16.7749C19.6963 14.2999 19.6963 9.99987 17.9356 8.22486ZM16.274 15.8499L10.0494 22.125C8.33821 20.45 4.7423 16.8999 3.15515 15.2749C2.46077 14.5749 2.08879 13.2249 2.18799 11.7749C2.28718 10.4249 2.80798 9.19986 3.57676 8.27486L9.87578 14.5999L16.2244 8.34986C16.4476 8.57486 16.7204 8.84986 17.018 9.14986C18.1587 10.3499 18.3075 13.7999 16.274 15.8499Z"
                fill="white"
              />
              <path
                d="M4.64317 13.7751C4.49437 13.6251 4.22161 13.0001 4.296 12.0251L9.45424 17.0501V15.0501L3.6512 9.37505C3.22961 10.0751 2.95682 10.9251 2.88243 11.8251C2.78323 13.0501 3.08082 14.2001 3.62641 14.7501C4.94077 16.0751 7.6439 18.7751 9.42945 20.5252V18.5251C7.74309 16.9001 5.73434 14.8751 4.64317 13.7751Z"
                fill="white"
              />
              <path
                d="M17.1176 11.8001C17.1176 11.9001 17.1176 12.0251 17.1176 12.1501C17.068 12.8751 16.8448 14.2501 15.7784 15.3501L10.5706 20.5752V18.5751L12.5545 16.5751L12.5793 15.0001L10.5706 17.0501V15.0751L16.2 9.37505C16.2992 9.47505 16.3984 9.57505 16.4976 9.67505C16.6712 9.85005 16.82 10.1251 16.944 10.5251L15.1088 12.4251L13.5217 14.0501L13.4969 15.6501L14.7864 14.3501C14.836 14.3001 14.8856 14.2501 14.9104 14.2001L17.1176 11.8001Z"
                fill="white"
              />
              <path
                d="M9.97445 2.97511L10.892 3.92512L9.18088 5.67514L9.97445 6.47515L11.7104 4.72513L12.628 5.67514L9.97445 8.37516L7.29614 5.67514L9.97445 2.97511Z"
                fill="white"
              />
              <path
                d="M9.97537 0L4.34595 5.67505L9.97537 11.3501L15.6048 5.67505L9.97537 0ZM6.0819 5.67505L9.97537 1.75002L13.8689 5.67505L9.97537 9.60009L6.0819 5.67505Z"
                fill="white"
              />
            </svg>
            <div className="md:w-[0.0625rem] md:h-[2.75rem] bg-[#ffff]"></div>
          </div>

          {/* button next, pre custom */}

          {/* button */}
          <div className="flex max-md:hidden rounded-[5.0625rem] bg-[#000]">
            {/* pre */}
            <button
              className="px-[0.75rem] py-[0.75rem]"
              onClick={handlePreSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[1.5rem] md:h-[1.5rem] w-[1rem] h-[1rem]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 12H5"
                  stroke="#DDB152"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 19L5 12L12 5"
                  stroke="#DDB152"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            {/* next */}

            <button
              className="px-[0.75rem] py-[0.75rem]"
              onClick={handleNextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[1.5rem] md:h-[1.5rem] w-[1rem] h-[1rem]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19"
                  stroke="#DDB152"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="#DDB152"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex max-md:hidden w-full bg-[#000]">
            {data[select]?.tours?.map((item, index) => (
              <div
                key={index}
                className={`md:w-[calc(100%/${progressLength ?? 8})] h-[0.25rem] ${index === realIndexProgress ? "bg-[#DDB152]" : ""
                  }`}
              ></div>
            ))}
          </div>
        </div>

        {/* content top mobile */}
        <div className="md:hidden swiper_ex flex gap-[1.5rem] w-[100%] px-[0.94rem] items-center">
          <div onClick={handlePreSlide2} className="w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center relative">
            <div className="absolute inset-0 bg-[#fff] bg-opacity-[0.25] backdrop-blur-[4px]"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[1rem] h-[1rem] relative z-[1]" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            onSlideChange={handleSlideChange2}
            loop={true}
            onBeforeInit={(swiper) => {
              if (swiperRef2) {
                swiperRef2.current = swiper;
              }
            }}
            className="!w-full "
          >
            {data?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <h3
                    key={index}
                    className={`text-[0.875rem] tracking-[0.00219rem] font-mons text-center items-stretch font-bold cursor-pointer ${index === indexSlide2 ? "text-[#5CC4BB]" : "text-[#fff]"
                      }`}
                  >
                    {item?.name}
                  </h3>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <button onClick={handleNextSlide2} className="w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center relative">
            <div className="absolute inset-0 bg-[#fff] bg-opacity-[0.25] backdrop-blur-[4px]"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[1rem] h-[1rem] relative z-[1]" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        {/* ------------------------------------contnet-right- ---------------------------------*/}
        <div className="relative swiper_tour flex-1 md:w-[calc(100%-35.75rem)] w-[100%]">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={16}
            breakpoints={{
              768: {
                slidesPerView: 2.3,
                spaceBetween: 32
              }
            }}
            onSlideChange={handleSlideChange}
            loop={true}
            onBeforeInit={(swiper) => {
              if (swiperRef) {
                swiperRef.current = swiper;
              }
            }}
            className="!w-full"
          >
            {data[select || indexSlide2]?.tours?.map((item, index) => (
              <SwiperSlide key={index}>
                <TourExperience img={item?.image?.src} text={item?.text} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        <div className="md:hidden flex gap-[1rem] w-full items-center max-md:pr-[0.94rem]">

          <div className="flex rounded-[5.0625rem] bg-[#000]">
            {/* pre */}
            <button
              className="px-[0.75rem] py-[0.75rem]"
              onClick={handlePreSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[1.5rem] md:h-[1.5rem] w-[1rem] h-[1rem]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 12H5"
                  stroke="#DDB152"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 19L5 12L12 5"
                  stroke="#DDB152"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            {/* next */}

            <button
              className="px-[0.75rem] py-[0.75rem]"
              onClick={handleNextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[1.5rem] md:h-[1.5rem] w-[1rem] h-[1rem]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19"
                  stroke="#DDB152"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="#DDB152"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex w-full bg-[#000] h-[0.25rem]">
            {data[select]?.tours?.map((item, index) => (
              <div
                key={index}
                className={`w-[calc(100%_/_${progressLength ? progressLength : 8})] h-[0.25rem] ${index === realIndexProgress ? "bg-[#DDB152]" : ""
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
