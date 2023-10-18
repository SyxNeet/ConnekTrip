import Button from "@/components/common/Button";
import Destination_item from "@/components/common/Destination_item";
import Image from "next/image";
import React from "react";
import union from "@/assets/images/Union.png";
function Destination() {
  const data = new Array(12).fill(0);
  return (
    <section className="md:pt-[7rem] top_destination">
      <div className="flex flex-col md:gap-[3rem] md:px-[11.25rem]">
        <h2 className="heading-1">TOP DESTINATIONS</h2>
        <div className="grid grid-cols-12 grid-rows-2 gap-[2rem]">
          <Destination_item
            className={"col-start-1 col-end-6 row-start-1 row-end-2"}
            imgHeight={"md:h-[21.875rem]"}
          />
          <Destination_item
            className={"col-start-6 col-end-10 row-start-1 row-end-3"}
            imgHeight={"md:h-[45.8125rem]"}
          />
          <Destination_item
            className={"col-start-10 col-end-13 row-start-1 row-end-2"}
            imgHeight={"md:h-[21.875rem]"}
          />
          <Destination_item
            className={"col-start-1 col-end-4 row-start-2 row-end-3"}
            imgHeight={"md:h-[21.875rem]"}
          />
          <Destination_item
            className={"col-start-4 col-end-6 row-start-2 row-end-3"}
            imgHeight={"md:h-[21.875rem]"}
          />
          <Destination_item
            className={"col-start-10 col-end-13 row-start-2 row-end-3"}
            imgHeight={"md:h-[21.875rem]"}
          />
        </div>
      </div>

      <div className="md:pt-[7.5rem] md:pl-[11.25rem] md:pr-[4.5rem] flex flex-row-reverse relative">
        <Image
          src={union}
          alt="img"
          priority
          quality={100}
          className="md:w-[49.25rem] md:h-[53rem] object-cover relative top-0 right-0 z-1"
        />
        <div>
          <div className="w-[50%] flex flex-col md:gap-[1.5rem]">
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

          <div className="flex gap-[9.5rem]"></div>
        </div>
      </div>
    </section>
  );
}

export default Destination;
