'use client';

import Link from 'next/link';
import React from 'react'

const page = () => {
    return (
        <div className='bg-[#F0F0F2] py-10 flex flex-col gap-10'>

            <div className='text-[32px] text-[#2F206A] font-black text-center -ml-16 md:text-[64px] md:mt-12 md:-ml-4'>Registration</div>
            <div className='text-[24px] font-bold pl-24 md:text-[30px] -ml-8 md:text-center md:-ml-36'>Create  your account</div>
            <div className='bg-white w-[380px] mx-auto shadow border-[#2F206A] rounded-md p-4 md:w-[500px] md:mt-8'>

                <div className='text-[16px] font-medium  p-2 flex flex-col gap-6 md:p-4'>


                    {/* Section : Name  */}

                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] pl-1 md:text-[18px]'>Username</div>
                        <div>
                            <input type='text' className='bg-[#F0F0F2] w-[340px] h-[45px] rounded-md p-4  border-[#2F206A] border-1 hover:border-[#2F206A] md:w-[440px]' required />
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] pl-1 md:text-[18px]'>Email address</div>
                        <div>
                            <input type='email' className='bg-[#F0F0F2] w-[340px] h-[45px] rounded-md p-4  border-[#2F206A] border-1 hover:border-[#2F206A] md:w-[440px]' required />
                        </div>
                    </div>

                    {/* Section : Email  */}

                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] pl-1 md:text-[18px]'>Password</div>
                        <div>
                            <input type='password' className='bg-[#F0F0F2] w-[340px] h-[45px] rounded-md p-4  border-[#2F206A] border-1 hover:border-[#2F206A] md:w-[440px]' required />
                        </div>
                    </div>

                    {/* Section : Message  */}

                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] pl-1 md:text-[18px]'>Confirm Password</div>
                        <div>
                            <input type='password' className='bg-[#F0F0F2] w-[340px] h-[45px] rounded-md p-4  border-[#2F206A] border-1 hover:border-[#2F206A] md:w-[440px]' required />
                        </div>
                    </div>

                    <div className='pl-2 flex gap-1'>
                        Already Account? <div className='text-[#2F206A] font-bold cursor-pointer border-black border-b-1'>
                            <Link href='/login'>Go to Sign in</Link>
                        </div>
                    </div>



                    {/* Section : divider  */}

                    <div className='w-[340px] pt-4 border-[#2F206A]  border-b-1 md:w-[440px]'>

                    </div>

                    {/* Section Submit Button  */}

                    <div className='text-white bg-[rgb(48,153,26)] w-[90px] h-[45px] cursor-pointer text-center pt-2 rounded-md hover:bg-[#3CBF20]  md:mt-6 md:w-[120px]'>
                        <input type='submit' value='Register' />
                    </div>


                </div>




            </div>


        </div>
    )
}

export default page