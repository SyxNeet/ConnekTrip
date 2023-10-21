"use client";
import React from "react";
import image from "@/assets/images/destination.png";
import imgLocation from "@/assets/images/imgLocation.svg";
import star from "@/assets/images/star.svg";
import Image from "next/image";
function Destination_item({ imgHeight, className, index }) {
  const data = {
    img: image,
    imgLocation: imgLocation,
    location: "Nghe An, Viet Nam",
    text: "Hoa Lu ancient capital Ninh Binh ",
    star: star,
    estimate: "4.8 / 5",
  };
  const arrStar = new Array(5).fill(star);
  return (
    <div
      className={`flex flex-col rounded-[1rem] md:px-[1rem] md:py-[1rem] justify-end relative ${className} ${imgHeight}`}
    >
      {/* <div className="absolute inset-0 bg_item"></div> */}
      {index ? (
        <Image
          src={image}
          alt="img"
          priority
          quality={100}
          fill
          className={`object-cover z-[1] rounded-[1rem]`}
        />
      ) : (
        <Image
          src={image}
          alt="img"
          priority
          quality={100}
          fill
          className={`object-cover z-[1] rounded-[1rem]`}
        />
      )}

      <div className="flex md:gap-[0.5rem] md:px-[0.56rem] md:py-[0.56rem] md:rounded-[2rem] mt-[0.7rem] mr-[0.7rem] bg-[#fff] bg-opacity-[0.2] backdrop-blur-4 absolute z-[1] top-0 right-0">
        <span className="md:text-[1rem] tracking-[0.005rem]">
          {data?.estimate}
        </span>
        <div className="flex">
          {arrStar?.map((item, index) => (
            <Image src={item} alt="star" className="md:w-[1rem] md:h-[1rem]" />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:gap-[0.5rem] z-10">
        <div className="flex gap-[0.25rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            className="object-cover md:w-[1rem] md:h-[1rem]"
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

          <span className="text-[#fff] md:text-[0.875rem] font-[500] tracking-[0.00088rem]">
            {data?.location}
          </span>
        </div>

        <div>
          <span className="text-[#fff] md:text-[1.5rem] font-bold leading-[1.5625rem] tracking-[0.015rem]">
            {data?.text}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Destination_item;
