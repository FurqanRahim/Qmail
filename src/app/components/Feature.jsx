'use client';

import React from 'react'
import Link from 'next/link';
import Image from "next/image"

const Feature = () => {
    return (
        <div className='bg-[#F3F3F5] -mt-20 pt-10 '>

            {/* Section 1  */}

            <div className='flex flex-col align-items justify-center  pl-4 md:text-center  md:pt-20 '>
                <div className='text-4xl text-[#ED2F74] font-black  md:text-[72px]'>keep track
                    <span className='text-[#2F206A] pl-2'>of what matters</span>
                </div>
                <div className='text-xl text-wrap mt-6 font-medium md:text-[32px]'>Qmail - the effortless way to focus your mind</div>
            </div>

            {/* Section 2  */}

            <div className='md:flex flex-row-reverse md:mt-24 md:justify-center md:items-center md:ml-32 '>
                <div className='pl-4 pt-10 md:pl-12 '>
                    <div className='text-[#2F206A] text-4xl font-black md:text-[48px]'>Capture <span className='text-4xl text-[#ED2F74] font-black md:text-[56px]'>ideas</span></div>
                    <div className='text-xl text-wrap mt-6 font-medium text-wrap md:text-[24px]  '>Open the sidebar as you browse and
                        <div>make notes instantly - it's that simple</div>
                    </div>
                    <div className='text-xl text-wrap mt-6 pb-12 font-bold  md:text-[24px] '>
                        Never lose a thought again
                    </div>
                </div>

                <div className=''>
                    <div className='flex justify-center'>
                        <Image src='/Capture 1.png' alt='feature' width={380} height={0} className='object-contain rounded-md shadow-md md:w-[800px] md:h-[600px] md:bg-white' />

                    </div>
                </div>
            </div>


            {/* Section 3 */}

            <div className='md:flex md:flex justify-center items-center gap-6 md:mt-24 md:ml-12'>

                <div className='flex flex-col justify-center pl-4 pt-16 '>
                    <div className='flex gap-2 text-3xl text-[#2F206A] font-black md:text-[48px]'>
                        Manage
                        <div className='text-[#ED2F74]'>resources</div>
                    </div>
                    <div className='text-wrap text-xl font-medium pt-8 md:text-[24px]'>Create notes exactly where they're <div>needed: on the resource they belong to</div></div>
                    <div className='text-2xl font-bold  pt-8 md:text-[24px]'>Stay focused as you work</div>
                </div>

                <div className='flex flex-col'>

                    <div className='flex pl-4 pt-12'>
                        <Image src='/Capture 2.png' alt='feature' width={380} height={0} className='object-contain rounded-md shadow-md md:w-[800px] md:h-[600px] md:bg-white' />

                    </div>
                </div>
            </div>


            {/* Section 4  */}

            <div className='md:flex flex-row-reverse justify-center items-center gap-6 md:mt-20 md:ml-6'>

                <div className='flex flex-col justify-center pl-4 pt-16 '>
                    <div className='flex gap-2 text-3xl text-[#2F206A] font-black md:text-[48px]'>
                        Work
                        <div className='text-[#ED2F74]'>everywhere</div>
                    </div>
                    <div className='text-wrap text-xl font-medium pt-8 md:text-[24px]'>Take notes on top of all your web-based <div>documents, applications and media</div></div>
                    <div className='text-2xl font-bold  pt-8 md:text-[24px]'>One tool to unify your digital world</div>
                </div>

                <div className='flex flex-col'>

                    <div className='flex pl-4 pt-12'>
                        <Image src='/Cloud of apps.png' alt='feature' width={380} height={0} className='object-contain rounded-md shadow-md md:w-[800px] md:h-[600px] md:bg-white' />

                    </div>
                </div>
            </div>




            {/* Section 5 */}

            <div className='md:flex justify-center gap-4 md:mt-18 md:ml-16'>
                <div className=' pl-4 pt-10 flex flex-col gap-6 md:mt-30'>
                    <div className='text-3xl text-[#2F206A] font-black md:text-[48px]'>Relax <span className='text-[#ED2F74]'>you've got this</span></div>
                    <div className='text-xl font-medium md:text-[24px]'>Your home feed - thoughts, ideas, tasks,<div>personal and shared</div></div>
                    <div className='text-xl font-bold md:text-[24px]'>One place to reflect, think and do your <div>best work</div></div>
                    <div className='text-2xl text-[#2F206A] font-black md:text-[32px]'>insite - <span className='text-[#ED2F74]'>the app for thinking</span></div>
                    <Link href="/Dashboard">
                        <div className='text-xl bg-[rgb(48,153,26)] text-white rounded-md p-2 w-[200px] hover:bg-[bg-[#3CBF20]] '>Get insite for free</div>
                    </Link>
                </div>
                <div className=' '>
                    <Image src='/Capture 3.png' alt='feature' width={380} height={0} className='object-contain rounded-md shadow-md mt-6 bg-white ml-4 md:w-[800px] md:h-[800px]' />
                </div>
            </div>


            {/* Section 6 */}

            <div className='pt-10 flex flex-col gap-8 pb-20'>
                <div className='text-3xl text-[#2F206A] font-black  flex gap-2 justify-center md:text-[48px] md:mt-12'>See<span className='text-[#ED2F74]'>insite in action</span></div>
                <div className='pl-4'>
                    <Image src='/SingleDemo-Thumbnail.png' alt='feature' width={380} height={0} className='object-contain rounded-md shadow-md md:w-[1400px] md:h-[600px] md:mx-auto md:mt-12' />
                </div>
            </div>





        </div>
    )
}

export default Feature