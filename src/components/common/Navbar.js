"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "@/assets/images/logo.svg";
import arrow from "@/assets/images/arrow-down.svg";
import Button from "./Button";
import MenuMobile from "../menu/MenuMobile";
function Navbar() {
  const data = [
    {
      name: "Home",
    },
    {
      name: "Destination",
      listCate1: [
        {
          name: "VietNam",
          listCate2: [
            {
              text: "Central VietNam",
            },
            {
              text: "Central Highlands",
            },
            {
              text: "HaNoi survey",
            },
            {
              text: "Ho Chi Minh survey",
            },
          ],
        },
        {
          name: "Lao",
        },
        {
          name: "Combodia",
        },
      ],
    },
    {
      name: "Travel Styles",
    },
    {
      name: "About Us",
    },
    {
      name: "Blog",
    },
    {
      name: "Contact",
    },
  ];

  const mbMenuRef = useRef();
  const handleOpen = () => {
    mbMenuRef?.current?.classList.add("active");
  };

  const handleClose = () => {
    mbMenuRef?.current?.classList.remove("active");
  };
  return (
    <>
      <nav className="md:px-[11.25vw] px-[0.94rem] md:pt-[1vw] pt-[0.5rem] items-center flex justify-between fixed z-[10] w-full">
        <svg
          onClick={() => handleOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          className="md:hidden w-[1rem] h-[1rem]"
          viewBox="0 0 16 17"
          fill="none"
        >
          <g clip-path="url(#clip0_1_718)">
            <path
              d="M0 3.87817C0 3.74557 0.0526784 3.61839 0.146447 3.52462C0.240215 3.43085 0.367392 3.37817 0.5 3.37817H15.5C15.6326 3.37817 15.7598 3.43085 15.8536 3.52462C15.9473 3.61839 16 3.74557 16 3.87817C16 4.01078 15.9473 4.13796 15.8536 4.23173C15.7598 4.3255 15.6326 4.37817 15.5 4.37817H0.5C0.367392 4.37817 0.240215 4.3255 0.146447 4.23173C0.0526784 4.13796 0 4.01078 0 3.87817ZM15.5 8.03189H0.5C0.367392 8.03189 0.240215 8.08457 0.146447 8.17834C0.0526784 8.27211 0 8.39928 0 8.53189C0 8.6645 0.0526784 8.79168 0.146447 8.88545C0.240215 8.97921 0.367392 9.03189 0.5 9.03189H15.5C15.6326 9.03189 15.7598 8.97921 15.8536 8.88545C15.9473 8.79168 16 8.6645 16 8.53189C16 8.39928 15.9473 8.27211 15.8536 8.17834C15.7598 8.08457 15.6326 8.03189 15.5 8.03189ZM8 12.6856H0.5C0.367392 12.6856 0.240215 12.7383 0.146447 12.8321C0.0526784 12.9258 0 13.053 0 13.1856C0 13.3182 0.0526784 13.4454 0.146447 13.5392C0.240215 13.6329 0.367392 13.6856 0.5 13.6856H8C8.13261 13.6856 8.25979 13.6329 8.35355 13.5392C8.44732 13.4454 8.5 13.3182 8.5 13.1856C8.5 13.053 8.44732 12.9258 8.35355 12.8321C8.25979 12.7383 8.13261 12.6856 8 12.6856Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_718">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0 0.531982)"
              />
            </clipPath>
          </defs>
        </svg>
        <Image
          src={logo}
          alt="logo"
          priority
          className="md:w-[8.8125rem] w-[3rem] md:h-[6.4375rem] h-[2.19rem] object-cover"
        />
        <div className="flex md:gap-[2rem] max-md:hidden">
          {data?.map((nav, index) => (
            <div key={index} className="relative nav_item">
              <div className=" flex items-center gap-[0.25rem]">
                <span className="text-[#fff] md:text-[1rem] font-semibold tracking-[0.005rem]">
                  {nav?.name}
                </span>
                {index === 1 || index === 2 || index === 4 ? (
                  <Image
                    src={arrow}
                    alt="arrow"
                    quality={100}
                    className="object-cover md:w-[1rem] md:h-[1rem]"
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="absolute cate_arr">
                {nav?.listCate1 && (
                  <div className="md:px-[2rem] md:py-[1.5rem] flex flex-col w-[20rem] gap-[1rem] cate1 ">
                    {nav?.listCate1?.map((cate1, index) => (
                      <div key={index} className="flex flex-col gap-[1rem]">
                        <h4>{cate1?.name}</h4>
                        {index === 0 && (
                          <div className="flex flex-col gap-[1rem] md:pl-[1rem] ">
                            {cate1?.listCate2?.map((cate2, index) => (
                              <span>{cate2?.text}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="max-md:hidden">
          <Button className={"text-[#fff]"} text={"PlAN MY TOUR"} />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1rem] h-[1rem] md:hidden"
          viewBox="0 0 16 17"
          fill="none"
        >
          <g clip-path="url(#clip0_1_739)">
            <path
              d="M13.7859 11.6681C12.8194 10.8414 11.8384 10.3406 10.8838 11.1661L10.3137 11.665C9.8966 12.0271 9.1211 13.7192 6.12278 10.2701C3.12508 6.8253 4.90897 6.28895 5.32668 5.92993L5.89987 5.43041C6.84957 4.6031 6.49117 3.56161 5.80622 2.48954L5.39287 1.84017C4.70479 0.77059 3.95552 0.0681513 3.00333 0.89422L2.48883 1.34378C2.06799 1.65036 0.891641 2.64688 0.606295 4.54003C0.26288 6.81157 1.3462 9.41278 3.82815 12.2669C6.30698 15.1222 8.73398 16.5564 11.033 16.5314C12.9436 16.5108 14.0975 15.4856 14.4584 15.1128L14.9748 14.6626C15.9245 13.8372 15.3344 12.9968 14.3672 12.1682L13.7859 11.6681Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_739">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0 0.531982)"
              />
            </clipPath>
          </defs>
        </svg>
      </nav>
      <div ref={mbMenuRef} className="fixed inset-0 menu-mobile z-[11]">
        <MenuMobile data={data} handleClose={handleClose} />
      </div>
    </>
  );
}

export default Navbar;
