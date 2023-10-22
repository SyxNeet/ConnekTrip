import React from 'react'
import img from '@/assets/images/imgTour1.png'
import Image from 'next/image'
import calendar from '@/assets/images/Calendar.svg'

function BlogItem({className}) {
  return (
    <div className={`flex flex-col md:h-[22.4rem] gap-[0.5rem] md:px-[1.5rem] md:py-[1.5rem] bg-gray-900 bg-opacity-20 rounded-[1rem] outBlogItem ${className}`}>
        <div className='w-full md:h-[11.8rem] item_blog_nor rounded-[1rem]'>
        <Image src={img} alt='img' quality={100} className='object-cover w-full md:h-[11.8rem] h-[8.53rem] rounded-[1rem]' />
        </div>
        <div className='md:px-[1rem] px-[0.5rem] py-[0.25rem] text-[0.75rem] md:bg-[#fff] bg-[#70C4DC] font-mons rounded-[1rem] flex  w-fit items-center'>Advertising</div>
        <p className='items-stretch md:text-[1rem] text-[0.875rem] tracking-[0.0015rem] line-clamp-2 font-poppin text-ellipsis text-[#ffff]'>How beautifull Mu Cang Chai, middle skyland Viet Nam. </p>
        <div className='flex md:gap-[0.5rem] items-center'>
            <Image src={calendar} alt='calendar' quality={100} className=' md:w-[1.48525rem] w-[0.99019rem] h[1rem] md:h-[1.50031rem]' />
            <span className='md:text-[0.875rem] font-poppin text-[0.75rem] text-[#fff] tracking-[0.00219rem]'>
                26/5/2022
            </span>
        </div>
    </div>
  )
}

export default BlogItem