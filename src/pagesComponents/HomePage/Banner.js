import React from 'react'
import banner1 from '@/assets/images/bannerHome.png'
import SlideBannerHomePage from '@/components/common/SlideBannerHomePage'
function Banner() {
    const data = [
        {
            title:'BEGINS WITH A SINGLE STEP',
            image:banner1
        },
        {
            title:'BEGINS2 WITH2 A2 SINGLE2 STEP2',
            image:banner1
        }
    ]
  return (
    <section className='w-full md:h-[54rem]'>
        <SlideBannerHomePage data={data} />
        
    </section>
  )
}

export default Banner