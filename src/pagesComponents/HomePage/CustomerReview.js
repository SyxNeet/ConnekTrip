import Button from '@/components/common/Button'
import ReviewItem from '@/components/common/ReviewItem'
import ReviewItemMb from '@/components/common/ReviewItemMb'
import React from 'react'

function CustomerReview() {
    const data = new Array(5).fill(0)
  return (
    <section className='md:py-[7.5rem] py-[4rem] md:px-[11.31rem] px-[0.94rem] md:grid flex flex-col gap-[2rem] relative grid-cols-2 bg-[#222]'>
        <div className='circle-1'></div>
        <div className='circle-2 bottom-0'></div>

        <div className='flex flex-col md:gap-[1.5rem] gap-[1rem] col-start-1 col-end-2 relative z-10'>
            <h2 className='heading-1'>
            CUSTOMER’S REVIEW
            </h2>
            <div className='w-fit'>
            <Button text={'Book your trip'} className={'text-[#002634]'} />
            </div>
        </div>
        {
            data?.map((item,index)=>(
               <div key={index} className='relative z-10' >
                <ReviewItem className={'max-md:hidden'}  />
                <ReviewItemMb className={'md:hidden'} />
               </div>
            ))
        }

    </section>
  )
}

export default CustomerReview