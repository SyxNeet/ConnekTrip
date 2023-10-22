import Image from 'next/image'
import React from 'react'
import img from '@/assets/images/imgTour1.png'
import star from '@/assets/images/star.svg'
function ReviewItem({className}) {
    const arrStar = new Array(5).fill(0)
  return (
    <div className={`flex review_item  gap-[0.5rem] md:px-[1.5rem] md:py-[1.5rem] px-[0.5rem] py-[0.5rem] md:h-[16.05rem] h-[8.76rem] bg-gray-900 bg-opacity-20 rounded-[1rem] ${className}`}>
        <Image src={img} alt='img' quality={100} className='object-cover md:w-[13.25rem] rounded-[1rem] flex flex-shrink-0 '/>
        <div className='flex flex-col md:gap-[1.75rem] justify-between overflow-hidden md:pl-[2rem]'>
            <div className='flex flex-col gap-[0.25rem]'>
                <h4 className='items-stretch text-[#fff] md:text-[1.25rem] text-[0.875rem] font-[500] tracking-[0.00188rem] font-poppin text-ellipsis line-clamp-2'>Lê Hoàng Hà (banking staff)</h4>
                <div className='flex items-center'>
                    {arrStar?.map((item,index)=>(
                        <Image key={index} src={star} quality={100} className='w-[1rem] h-[1rem]' />
                    ))}
                </div>
            </div>
            <p className='items-stretch md:text-[1rem] leading-[1.48] text-[#fff] tracking-[0.01rem] text-[0.875rem] font-mons max-md:tracking-[0.00219rem]  xxl:line-clamp-3 text-ellipsis line-clamp-2'>
            Amet minim mollit non deserunt ullamco est sit aliqua ullamco est sit aliqua ullamco est sit aliqua 
            </p>

            <p className='items-stretch text-[#fff] italic font-[300] font-mons tracking-[0.00875rem] line-clamp-2 text-ellipsis'>
            “Amet minim mollit non deserunt ests ullamco est sit aliqua”.
            </p>
        </div>
    </div>
  )
}

export default ReviewItem