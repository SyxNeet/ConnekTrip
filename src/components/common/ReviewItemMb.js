import Image from 'next/image'
import React from 'react'
import img from '@/assets/images/imgTour1.png'
import star from '@/assets/images/star.svg'
function ReviewItemMb({className}) {
    const arrStar = new Array(5).fill(0)
  return (
    <div className={`grid grid-cols-3 grid-rows-3 gap-[0.5rem] px-[0.5rem] py-[0.5rem] h-[8.76rem] bg-gray-900 bg-opacity-20 rounded-[1rem] ${className}`}>
    <Image src={img} alt='img' quality={100} className='object-cover  h-[5.125rem] rounded-[1rem] row-start-1 row-end-2 col-start-1 col-end-2'/>
    <div className='flex flex-col gap-[0.25rem] col-start-2 col-end-4 row-start-1 row-end-3'>
            <h4 className='items-stretch text-[#fff] text-[0.875rem] font-[500] tracking-[0.00188rem]'>Lê Hoàng Hà (banking staff)</h4>
            <div className='flex items-center'>
                {arrStar?.map((item,index)=>(
                    <Image key={index} src={star} quality={100} className='w-[1rem] h-[1rem]' />
                ))}
            </div>
            <p className='items-stretch  leading-[1.48]  text-[0.875rem] tracking-[0.00219rem] line-clamp-2'>
            Amet minim mollit non deserunt ullamco est sit aliqua ullamco est sit aliqua ullamco est sit aliqua 
            </p>
        </div>  
    <p className='items-stretch text-[#fff] italic font-[300] tracking-[0.00875rem] row-start-3 col-start-1 col-end-4'>
        “Amet minim mollit non deserunt ests ullamco est sit aliqua”.
    </p>    
</div>
  )
}

export default ReviewItemMb