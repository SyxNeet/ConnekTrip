import React from 'react'

function Button({text,className}) {
  return (
    <div className='btn_common md:flex justify-center items-center md:px-[0.88rem] md:py-[1.12rem] px-[0.62rem] py-[1rem] md:rounded-[2rem] rounded-[1.5rem]'>
        <span className={`${className} text-[1rem] font-bold tracking-[0.0125rem]`}>{text}</span>
    </div>
  )
}

export default Button