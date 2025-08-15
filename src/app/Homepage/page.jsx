'use client';

import React from 'react'

const page = () => {
    return (
        <div className='mt-16 flex flex-col gap-16 justify-center items-center pb-20'>
            <div className='text-3xl text-[#2F206A] font-black'>User feedback</div>
            <div className='text-3xl font-extrabold pl-8 text-[#ED2F74]'>Designed for you <span className='text-[#2F206A]'>and for working with others</span></div>
            <div className='text-lg font-bold'>Watch our  <span className='text-cyan-600 underline'>team demo video</span> to learn more</div>
            <div className='text-lg bg-[rgb(48,153,26)] text-white rounded-md px-6 py-3 hover:bg-[bg-[#3CBF20]]'>Try it now</div>
        </div>
    )
}

export default page