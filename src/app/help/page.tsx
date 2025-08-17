'use client';

import React from 'react'

const page = () => {
    return (
        <div className='bg-[#F0F0F2] py-10 flex flex-col gap-10'>

            <div className='text-[32px] text-[#2F206A] font-black text-center md:text-[64px] md:mt-12'>Contact us</div>
            <div className='text-[20px] font-bold pl-8 md:text-[24px] md:text-center'>Contact us today to ask a question or send a message...</div>
            <div className='bg-white w-[380px] mx-auto shadow border-[#2F206A] rounded-md p-4 md:w-[500px] md:mt-8'>

                <div className='text-[16px] font-medium  p-2 flex flex-col gap-6 md:p-4'>

                    {/* Section : Name  */}

                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] md:text-[18px]'>Your name</div>
                        <div>
                            <input type='text' className='bg-[#F0F0F2] w-[340px] h-[45px] rounded-md p-4  border-[#2F206A] border-1 hover:border-[#2F206A] md:w-[440px]' />
                        </div>
                    </div>

                    {/* Section : Email  */}

                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] md:text-[18px]'>Your email</div>
                        <div>
                            <input type='text' className='bg-[#F0F0F2] w-[340px] h-[45px] rounded-md p-4  border-[#2F206A] border-1 hover:border-[#2F206A] md:w-[440px]' />
                        </div>
                    </div>

                    {/* Section : Message  */}

                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] md:text-[18px]'>Your message</div>
                        <div>
                            <textarea
                                className="bg-[#F0F0F2] w-[340px] h-[120px] rounded-md px-3 py-2 border border-[#2F206A] focus:outline-none focus:ring-2 focus:ring-[#2F206A] text-left align-top resize-none required md:w-[440px]"
                            />
                        </div>


                    </div>

                    {/* Section : divider  */}

                    <div className='w-[340px] pt-4 border-[#2F206A]  border-b-1 md:w-[440px]'>

                    </div>

                    {/* Section Submit Button  */}

                    <div className='text-white bg-[#2F206A] w-[90px] h-[45px] cursor-pointer text-center pt-2 rounded-md md:mt-6 md:w-[120px]'>Submit</div>

                </div>




            </div>


        </div>
    )
}

export default page