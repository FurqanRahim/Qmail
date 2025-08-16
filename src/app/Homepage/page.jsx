'use client';

import React from 'react'

const page = () => {
    return (
        <div className='mt-16 flex flex-col gap-16 justify-center items-center pb-20'>
            <div className='text-3xl text-[#2F206A] font-black md:text-[48px]'>User feedback</div>
            <div className='text-3xl font-extrabold pl-4 text-[#ED2F74] md:text-[64px]'>Designed for you <span className='text-[#2F206A]'>and for <div>working with others</div></span></div>
            <div className='text-lg font-bold md:text-[20px]' >Watch our  <span className='text-cyan-600 underline'>team demo video</span> to learn more</div>
            <div className='text-lg bg-[rgb(48,153,26)] text-white rounded-md px-6 py-3 hover:bg-[bg-[#3CBF20]]'>Try it now</div>
        </div>
    )
}

export default page