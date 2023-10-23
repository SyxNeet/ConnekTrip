import Image from "next/image";
import React from "react";

function TourExperience({ img, text }) {
  return (
    <div className="tour_experience md:rounded-[1.5rem] rounded-[1rem] md:h-[43.18rem] h-[16.64rem] flex items-end justify-center relative max-md:my-[1rem]">
      <div className="bg-tour absolute inset-0"></div>
      <Image
        src={img}
        alt="img"
        fill
        className="object-cover md:h-[43.18rem] h-[16.64rem] rounded-[1rem] md:rounded-[1.5rem]"
      />
      <p className="items-stretch z-1 absolute text_tourDes font-poppin whitespace-nowrap text-[#fff] text-center md:text-[1.25rem] w-full font-bold tracking-[0.000188rem] md:px-[4rem]">
        {text}
      </p>
      <div className="flex flex-col md:gap-[0.75rem] md:px-[4rem] item_des_hover items-center md:pb-[1.5rem] max-md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[5.375rem] md:h-[7.028rem]"
          viewBox="0 0 87 113"
          fill="none"
        >
          <path
            d="M80.6801 39.0396C73.2438 31.543 72.6628 30.7231 72.6628 30.7231L43.6146 60.2409L13.5207 30.606C-1.58436 41.6166 -3.21107 66.3319 6.89769 76.5225C17.0065 86.7132 43.7308 112.951 43.7308 112.951L77.3105 79.0995C88.9298 67.5032 88.9298 47.3561 80.6801 39.0396ZM72.8951 74.7655L43.7308 104.166C35.7135 96.3182 18.8655 79.6852 11.4292 72.0714C8.17577 68.7917 6.43292 62.4664 6.89769 55.6727C7.36247 49.3474 9.80255 43.6078 13.4045 39.2739L42.9175 68.9088L72.6628 39.6253C73.7085 40.6795 74.9866 41.968 76.3809 43.3736C81.7258 48.996 82.4229 65.1605 72.8951 74.7655Z"
            fill="white"
          />
          <path
            d="M18.4017 65.0448C17.7045 64.342 16.4265 61.4136 16.7751 56.8454L40.9431 80.3894V71.0186L13.754 44.4292C11.7787 47.709 10.5006 51.6915 10.152 55.9083C9.68726 61.6479 11.0816 67.0361 13.6378 69.613C19.796 75.8211 32.4611 88.4716 40.8269 96.671V87.3003C32.9258 79.6866 23.5142 70.1987 18.4017 65.0448Z"
            fill="white"
          />
          <path
            d="M76.8458 55.7912C76.8458 56.2597 76.8458 56.8454 76.8458 57.4311C76.6134 60.828 75.5676 67.2704 70.5714 72.4243L46.1709 96.9053V87.5346L55.4663 78.1638L55.5825 70.7844L46.1709 80.3894V71.1358L72.5467 44.4292C73.0115 44.8977 73.4762 45.3663 73.941 45.8348C74.7543 46.6547 75.4515 47.9432 76.0325 49.8174L67.4342 58.7196L59.9979 66.3333L59.8817 73.8299L65.9237 67.7389C66.156 67.5046 66.3884 67.2704 66.5046 67.0361L76.8458 55.7912Z"
            fill="white"
          />
          <path
            d="M43.3817 14.4419L47.6809 18.893L39.6636 27.0924L43.3817 30.8407L51.5152 22.6413L55.8144 27.0924L43.3817 39.7429L30.833 27.0924L43.3817 14.4419Z"
            fill="white"
          />
          <path
            d="M43.3825 0.50293L17.0068 27.0924L43.3825 53.6818L69.7583 27.0924L43.3825 0.50293ZM25.1403 27.0924L43.3825 8.70232L61.6249 27.0924L43.3825 45.4824L25.1403 27.0924Z"
            fill="white"
          />
        </svg>
        <p className="items-stretch text-center md:text-[0.875rem] font-mons tracking-[0.00219rem] text-[#fff]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat.
        </p>
      </div>
    </div>
  );
}

export default TourExperience;
