import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logo.svg'
import arrow from '@/assets/images/arrow-down.svg'
import Button from './Button'
function Navbar() {
    const data = [
        {
            name:'Home'
        },
        {
            name:'Destination',
            listCate1:[
                {
                   name:'VietNam',
                   listCate2:[
                        {
                            text:'Central VietNam'
                        },
                        {
                            text:'Central Highlands'
                        },
                        {
                            text:'HaNoi survey'
                        },
                        {
                            text:'Ho Chi Minh survey'
                        }
                   ]
                },
                {
                    name:'Lao'
                },
                {
                    name:'Combodia'
                }
            ]
        },
        {
            name:'Travel Styles'
        },
        {
            name:'About Us'
        },
        {
            name:'Blog'
        },
        {
            name:'Contact'
        }
    ]
  return (
    <nav className='md:px-[11.25vw] md:pt-[1vw] items-center flex justify-between fixed z-[10] w-full'>
        <Image src={logo} alt='logo' priority className='md:w-[8.8125rem] md:h-[6.4375rem] object-cover' />
        <div className='flex md:gap-[2rem]'>
            {data?.map((nav,index)=>(
                <div  key={index} className='relative nav_item'>
                    <div className=' flex items-center gap-[0.25rem]'>
                        <span className='text-[#fff] md:text-[1rem] font-semibold tracking-[0.005rem]'>{nav?.name}</span>
                        {index===1 || index ===2 || index === 4 ? (
                            <Image src={arrow} alt='arrow' quality={100} className='object-cover md:w-[1rem] md:h-[1rem]'  />
                        ) : ('')}
                    </div>
                    <div className='absolute cate_arr'>
                        {nav?.listCate1 && 
                            (<div className='md:px-[2rem] md:py-[1.5rem] flex flex-col w-[20rem] gap-[1rem] cate1 '>
                                {nav?.listCate1?.map((cate1,index)=>(
                                    <div key={index} className='flex flex-col gap-[1rem]'>
                                        <h4>{cate1?.name}</h4>
                                        {index === 0 && (
                                            <div className='flex flex-col gap-[1rem] md:pl-[1rem] '>
                                                  {cate1?.listCate2?.map((cate2,index)=>(
                                                    <span>{cate2?.text}</span>
                                                  ))}  
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>)
                        }
                    </div>
                </div>
            ))}
        </div>
        <div>
            <Button className={'text-[#fff]'} text={'PlAN MY TOUR'} />
        </div>
    </nav>
  )
}

export default Navbar