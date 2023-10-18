import React from "react";
import banner1 from "@/assets/images/bannerHome.png";
import SlideBannerHomePage from "@/components/common/SlideBannerHomePage";
function Banner() {
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
      <div className="discoveryBlock md:w-[8.5625rem] w-[3.875rem] h-[3.25rem] md:h-[8.8125rem] top-[65%] md:left-[11.25rem] left-[1.94rem] absolute z-[10]">
        <div className="discoveryAb md:w-[4.625rem] w-[1.5rem] h-[1.5rem] md:h-[4.62rem] rounded-[50%]"></div>
      </div>
    </section>
  );
}

export default Banner;
