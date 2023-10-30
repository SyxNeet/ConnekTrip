import BlogItem from '@/components/common/BlogItem'
import Button from '@/components/common/Button'
import React from 'react'

function OurBlog() {
    const arrBlog = new Array(5).fill(0)
  return (
    <section className='flex flex-col gap-[1.5rem]  md:px-[11.31rem] px-[0.94rem] max-md:py-[4rem] bg-[#222] relative md:pb-[4.51rem]'>
        <div className='circle-1 right-0 !block top-[-10%] max-md:!hidden'></div>
        <div className='flex justify-between relative z-10'>
            <h2 className='heading-1'>
            OUR BLOG 
            </h2>
            <div className='w-fit max-md:hidden'>
                <Button text={'See all blog'} />
            </div>
        </div>

        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-[2rem] gap-[1rem] grid-rows-2 relative z-10'>
            {arrBlog?.map((blog,index)=>(
                <BlogItem key={index} className={index === 0 && 'bigger'} />
            ))}
        </div>

    </section>
  )
}

export default OurBlog