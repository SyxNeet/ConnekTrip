"use client";
import React, { useEffect, useRef, useState } from "react";

function MenuMobile({ handleClose, data }) {
  const [active, setActive] = useState(0);
  const countryRef = useRef();
  const handleSelect = (num) => {
    if (num == active) {
      setActive(null);
    } else {
      setActive(num);
    }
  };

  return (
    <div className="md:hidden w-full h-full  py-[2.1rem] bg-[#002634]">
      <div className="flex justify-between items-center border-b-[0.02669rem] border-solid border-[#f6f6f6] border-opacity-[0.5] px-[1.8rem]">
        <div className="w-[5.28544rem] h-[1.07rem]"></div>
        <svg
          onClick={handleClose}
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1.6rem] h-[1.6rem]"
          viewBox="0 0 26 27"
          fill="none"
        >
          <path
            d="M19.5867 6.8269L6.78674 19.6269"
            stroke="#F7F7F7"
            stroke-width="1.06667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.78674 6.8269L19.5867 19.6269"
            stroke="#F7F7F7"
            stroke-width="1.06667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {/* content */}
      <div className="w-full py-[1.23rem]  flex flex-col">
        {data?.map((item1, index) => (
          <div key={index} className="">
            <span
              onClick={() => handleSelect(index)}
              className={`text-[1rem] nav_item_mb font-bold leading-[0.85331rem] py-[0.88rem] pl-[1.8rem] block ${
                index === active ? "text-[#002634] bg-[#fff]" : "text-[#fff]"
              }`}
            >
              {item1?.name}
            </span>
            {item1?.listCate1 && (
              <div
                ref={countryRef}
                className="flex flex-col pl-[2.5rem] listCate1Mb"
                style={
                  active === 1
                    ? {
                        height: countryRef?.current?.scrollHeight,
                        overflow: "visible",
                      }
                    : {
                        height: "0",
                        overflow: "hidden",
                      }
                }
              >
                {item1?.listCate1?.map((item2, index) => (
                  <div key={index} className="pt-[1rem]">
                    <h5 className="text-[#fff] text-[0.85rem] font-semibold leading-[0.85331rem]">
                      {item2?.name}
                    </h5>
                    {item2?.listCate2 && (
                      <div className="flex flex-col gap-[1rem] pl-[1rem] pt-[0.5rem]">
                        {item2?.listCate2?.map((item3, index) => (
                          <h5
                            key={index}
                            className="text-[#fff] text-[0.75rem] font-medium leading-[0.85331rem]"
                          >
                            {item3?.text}
                          </h5>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuMobile;
