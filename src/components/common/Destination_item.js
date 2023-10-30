"use client";
import React from "react";
import image from "@/assets/images/destination.png";
import imgLocation from "@/assets/images/imgLocation.svg";
import star from "@/assets/images/star.svg";
import Image from "next/image";
import Button from "./Button";
function Destination_item({ indexSlide,imgHeight,data, className, index,className2 }) {
  const arrStar = new Array(5).fill(star);
  return (
    <div
      className={`slideItem flex flex-col rounded-[1rem] md:px-[1rem] px-[0.5rem] py-[0.5rem] md:py-[1rem] justify-end relative ${className} ${imgHeight}`}
    >
      {index ? (
        <Image
          src={data?.img?.src || image}
          alt="img"
          priority
          quality={100}
          fill
          className={`object-cover z-[1] rounded-[1rem] pointer-events-none`}
        />
      ) : (
        <Image
          src={data?.img?.src || image}
          alt="img"
          priority
          quality={100}
          fill
          className={`object-cover z-[1] rounded-[1rem] pointer-events-none`}
        />
      )}

      <div className="flex md:gap-[0.5rem] md:px-[0.56rem] px-[0.25rem] py-[0.25rem] md:py-[0.56rem] rounded-[2rem] mt-[0.7rem] mr-[0.7rem] bg-[#fff] bg-opacity-[0.2] backdrop-blur-4 absolute z-[1] top-0 right-0">
        <span className="md:text-[1rem] tracking-[0.005rem] whitespace-nowrap">
          {data?.estimate || '4.8 / 5'}
        </span>
        <div className="flex">
          {arrStar?.map((item, index) => (
            <Image src={item} alt="star" className="md:w-[1rem] md:h-[1rem]" />
          ))}
        </div>
      </div>
      <div className= {`flex flex-col md:gap-[0.5rem] content z-10 `}>
        <div className="flex gap-[0.25rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 17"
            fill="none"
            className="object-cover w-[1rem] h-[1rem]"
          >
            <g clip-path="url(#clip0_1_1255)">
              <path
                d="M14 7.16663C14 11.8333 8 15.8333 8 15.8333C8 15.8333 2 11.8333 2 7.16663C2 5.57533 2.63214 4.0492 3.75736 2.92399C4.88258 1.79877 6.4087 1.16663 8 1.16663C9.5913 1.16663 11.1174 1.79877 12.2426 2.92399C13.3679 4.0492 14 5.57533 14 7.16663Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 9.16663C9.10457 9.16663 10 8.2712 10 7.16663C10 6.06206 9.10457 5.16663 8 5.16663C6.89543 5.16663 6 6.06206 6 7.16663C6 8.2712 6.89543 9.16663 8 9.16663Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1255">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>

          <span className="text-[#fff] text-[0.875rem] font-poppin font-[500] tracking-[0.00088rem] max-md:w-[4.125rem] text-ellipsis overflow-hidden line-clamp-1">
            {data?.location || 'Nghe An, Viet Nam'}
          </span>
        </div>

        <div>
          <span className={`text-[#fff] md:text-[1.5rem] cursor-pointer  text-ellipsis  text-[0.875rem] font-poppin font-bold leading-[1.8625rem] tracking-[0.015rem] ${className2}`}>
            {data?.text || 'Hoa Lu Ninh Binh'}
          </span>
        </div>
        <div className="price  md:gap-[0.5rem] md:w-[31rem] hidden justify-between items-center">
            <span className="text-[#fff] text-center font-poppin md:text-[2rem] font-bold tracking-[0.003rem]">$ 199.999</span>
            <svg xmlns="http://www.w3.org/2000/svg"width="330" height="6" viewBox="0 0 330 6" fill="none">
              <path d="M1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5V2.5ZM329.887 3L327 0.113249L324.113 3L327 5.88675L329.887 3ZM1 3.5H327V2.5H1V3.5Z" fill="white"/>
            </svg>
        </div>

        <div className="contentType flex-col hidden md:mt-[4.5rem] mt-[1rem]">
          <div className="flex gap-[0.5rem] px-[1rem] py-[0.25rem] items-center rounded-[1.5rem] typeTour">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" fill="url(#paint0_linear_945_6923)" stroke="white" stroke-width="2"/>
              <defs>
                <linearGradient id="paint0_linear_945_6923" x1="1" y1="7" x2="13" y2="7" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2E3192"/>
                  <stop offset="1" stop-color="#1BFFFF"/>
                </linearGradient>
              </defs>
            </svg>
            <p className="md:text-[1.25rem] tracking-[0.005rem] text-[#fff] font-poppin font-bold ">
              <span className="md:text-[1rem] font-mons font-normal ">Travel styles:</span> classic trip
            </p>
          </div>
          <div className="flex md:mt-[1rem]">
            {arrStar?.map((item, index) => (
              <Image src={item} alt="star" className="md:w-[1rem] md:h-[1rem]" />
            ))}
          </div>
          <span className="font-mons text-[#fff] md:text-[1rem] tracking-[0.005rem]">4.8 (850)</span>
        </div>
        <div className="groupBtn md:mt-[4.5rem] mt-[1rem] hidden max-md:flex-col">
          <Button text={'View tour now'} />
          <Button text={'View other tour'} classNameBtn={true} />
        </div>
      </div>
    </div>
  );
}

export default Destination_item;
