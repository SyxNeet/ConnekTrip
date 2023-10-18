import Button from "@/components/common/Button";
import Destination_item from "@/components/common/Destination_item";
import Image from "next/image";
import React from "react";
import starDes from '@/assets/images/starDes.svg'
import profile from '@/assets/images/Profile.svg'
import imgTextDes from '@/assets/images/imgTextDes.png'
import heart from '@/assets/images/Heart.svg'
import vector from '@/assets/images/Vector.svg'


import union from "@/assets/images/Union.png";
function Destination() {
  const data = new Array(12).fill(0);
  return (
    <section className="md:pt-[7rem] top_destination relative pt-[4rem]">
      <div className="circle-1"></div>
      <div className="circle-1"></div>
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="flex flex-col md:gap-[3rem] md:px-[11.25rem] px-[0.94rem]">
        <h2 className="heading-1">TOP DESTINATIONS</h2>
        <div className="grid md:grid-cols-12 md:grid-rows-2 md:gap-[2rem] grid-cols-2 grid-rows-5 gap-[1rem]">
          <Destination_item
            className={"col-start-1 md:col-end-6 col-end-3 row-start-1 row-end-2"}
            imgHeight={"md:h-[21.875rem] h-[11.2rem]"}
          />
          <Destination_item
            className={"md:col-start-6 md:col-end-10 md:row-start-1 row-end-3 col-start-1 col-end-2 row-start-2"}
            imgHeight={"md:h-[45.8125rem] "}
          />
          <Destination_item
            className={"md:col-start-10 md:col-end-13 col-start-2 col-end-3 md:row-start-1 row-start-2 row-end-3 md:row-end-2"}
            imgHeight={"md:h-[21.875rem]"}
          />
          <Destination_item
            className={"col-start-1 md:col-end-4 col-end-3 row-start-3 row-end-5"}
            imgHeight={"md:h-[21.875rem]"}
          />
          <Destination_item
            className={"md:col-start-4 col-start-1 md:col-end-6 col-end-2 md:row-start-2 row-start-5 md:row-end-3"}
            imgHeight={"md:h-[21.875rem]"}
          />
          <Destination_item
            className={"md:col-start-10 col-start-2 md:col-end-13 md:row-start-2 row-start-5 md:row-end-3"}
            imgHeight={"md:h-[21.875rem]"}
          />
        </div>
      </div>

      <div className="md:pt-[7.5rem]  max-md:flex-col-reverse pt-[4rem] md:px-[11.25rem] px-[0.94rem] flex flex-row-reverse relative">
        <Image
          src={union}
          alt="img"
          priority
          quality={100}
          className="md:w-[49.25rem] md:h-[53rem] object-cover relative top-0 right-0 z-1"
        />
        <div className="flex-1 md:absolute md:pl-[11.25rem] max-md:mb-[1.5rem] max-md:gap-[1rem]">
          <div className="md:w-[40%] flex flex-col md:gap-[1.5rem]  max-md:gap-[1rem]">
            <h2 className="heading-1">ABOUT US</h2>
            <p className="line-clamp-[7] overflow-hidden text-ellipsis text-[#fff] text-[1rem] tracking-[0.005rem]">
              If you are planning travel for a vacation in Vietnam with your
              family, your friend group, your spouse or with yourself, you might
              need a personalized trip planner. Connek trip shall be helpful for
              you. When traveling, time is a resource you don’t want to waste.
              Our job as your trip consultant is to help you plan your dream
              itineraries, stay up to date the information of travel
              restrictions and changes after Covid-19, get the “Insider”
              knowledge of the destination, protect your from scams and fraud,
              deal with last-minute changes and emergencies, etc. We do our best
              to help you receive the most value for your money. You will have
              complete peace of mind knowing there’re someone take care for you,
              24/7 during your trip, and that is invaluable. “
            </p>
            <div className="w-fit">
              <Button text={"Read More"} />
            </div>
          </div>

          <div className="flex  md:w-[40%] justify-between md:pl-[3rem]">
            <div className="flex flex-col justify-center items-center translate-y-[100%]">
              <span className="text-[#fff] text-center md:text-[2.375rem] font-bold tracking-[0.00594rem]">2500</span>
              <h5 className="text-[#fff] text-center md:text-[1rem] tracking-[0.005rem] md:mb-[1rem]">
                Happy guests
              </h5>
              <Image src={heart} alt='heart' quality={100} className="md:w-[4.87456rem] md:h-[3.97581rem]" />
            </div>

            <div className="flex flex-col justify-center items-center translate-y-[50%]">
              <span className="text-[#fff] text-center md:text-[2.375rem] font-bold tracking-[0.00594rem]">8125</span>
              <h5 className="text-[#fff] text-center md:text-[1rem] tracking-[0.005rem] md:mb-[1rem]">
              Trips se rved
              </h5>
              <Image src={profile} alt='heart' quality={100} className="md:w-[4.87456rem] md:h-[3.97581rem]" />
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-[#fff] text-center md:text-[2.375rem] font-bold tracking-[0.00594rem]">5</span>
              <Image src={imgTextDes} alt='heart' quality={100} className="md:w-[5.75rem] md:h-[1.0625rem]" />
              <h5 className="text-[#fff] text-center md:text-[1rem] tracking-[0.005rem] md:mb-[1rem]">
              Tripadvisor rate
              </h5>
              <Image src={starDes} alt='heart' quality={100} className="md:w-[4.87456rem] md:h-[3.97581rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destination;
