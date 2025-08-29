'use client';

import React from 'react'
import Link from 'next/link';
import Image from "next/image"

const Feature = () => {
    return (
        <div className='bg-[#F3F3F5] -mt-20 pt-10 '>

            {/* Section 1  */}
            <div className='flex flex-col align-items justify-center pl-4 md:text-center md:pt-20'>
                <div className='text-4xl text-[#ED2F74] font-black md:text-[72px]'>
                    Take control
                    <span className='text-[#2F206A] pl-2'>of your email</span>
                </div>
                <div className='text-xl mt-6 font-medium md:text-[32px]'>
                    Scheduling Email System – write now, send later
                </div>
            </div>

            {/* Section 2  */}
            <div className='md:flex flex-row-reverse md:mt-24 md:justify-center md:items-center md:ml-32 '>
                <div className='pl-4 pt-10 md:pl-12 '>
                    <div className='text-[#2F206A] text-4xl font-black md:text-[48px]'>
                        Schedule <span className='text-4xl text-[#ED2F74] font-black md:text-[56px]'>emails</span>
                    </div>
                    <div className='text-xl mt-6 font-medium md:text-[24px]'>
                        Compose your message today and choose the exact date & time
                        <div>you want it delivered – no need to be online later</div>
                    </div>
                    <div className='text-xl mt-6 pb-12 font-bold md:text-[24px]'>
                        Never miss the right moment again
                    </div>
                </div>

                <div className='flex justify-center'>
                    <Image src='/Capture 1.png' alt='Schedule emails feature' width={380} height={0} className='object-contain rounded-md shadow-md md:w-[800px] md:h-[600px] md:bg-white' />
                </div>
            </div>

            {/* Section 3 */}
            <div className='md:flex justify-center items-center gap-6 md:mt-24 md:ml-12'>
                <div className='flex flex-col justify-center pl-4 pt-16'>
                    <div className='flex gap-2 text-3xl text-[#2F206A] font-black md:text-[48px]'>
                        Manage
                        <div className='text-[#ED2F74]'>reminders</div>
                    </div>
                    <div className='text-xl font-medium pt-8 md:text-[24px]'>
                        Send birthday wishes, client follow-ups, or meeting reminders
                        <div>automatically at the perfect time</div>
                    </div>
                    <div className='text-2xl font-bold pt-8 md:text-[24px]'>
                        Stay organized and professional
                    </div>
                </div>

                <div className='flex pl-4 pt-12'>
                    <Image src='/Capture 2.png' alt='Reminder management feature' width={380} height={0} className='object-contain rounded-md shadow-md md:w-[800px] md:h-[600px] md:bg-white' />
                </div>
            </div>

            {/* Section 4  */}
            <div className='md:flex flex-row-reverse justify-center items-center gap-6 md:mt-20 md:ml-6'>
                <div className='flex flex-col justify-center pl-4 pt-16'>
                    <div className='flex gap-2 text-3xl text-[#2F206A] font-black md:text-[48px]'>
                        Send
                        <div className='text-[#ED2F74]'>anywhere</div>
                    </div>
                    <div className='text-xl font-medium pt-8 md:text-[24px]'>
                        Whether personal or business, our system works across
                        <div>all your contacts and email needs</div>
                    </div>
                    <div className='text-2xl font-bold pt-8 md:text-[24px]'>
                        One tool to simplify communication
                    </div>
                </div>

                <div className='flex pl-4 pt-12'>
                    <Image src='/Cloud of apps.png' alt='Send anywhere feature' width={380} height={0} className='object-contain rounded-md shadow-md md:w-[800px] md:h-[600px] md:bg-white' />
                </div>
            </div>

            {/* Section 5 */}
            <div className='md:flex justify-center gap-4 md:mt-18 md:ml-16'>
                <div className='pl-4 pt-10 flex flex-col gap-6 md:mt-30'>
                    <div className='text-3xl text-[#2F206A] font-black md:text-[48px]'>
                        Relax <span className='text-[#ED2F74]'>we’ve got this</span>
                    </div>
                    <div className='text-xl font-medium md:text-[24px]'>
                        Draft now, schedule later – messages, campaigns, and reminders
                    </div>
                    <div className='text-xl font-bold md:text-[24px]'>
                        One inbox, total control of delivery time
                    </div>
                    <div className='text-2xl text-[#2F206A] font-black md:text-[32px]'>
                        Scheduling Email System – <span className='text-[#ED2F74]'>never mistime your message</span>
                    </div>
                    <Link href="/Dashboard">
                        <div className='text-xl bg-[rgb(48,153,26)] text-white rounded-md p-2 w-[240px] hover:bg-[#3CBF20]'>
                            Start Scheduling for Free
                        </div>
                    </Link>
                </div>
                <div>
                    <Image src='/Capture 3.png' alt='Relax feature' width={380} height={0} className='object-contain rounded-md shadow-md mt-6 bg-white ml-4 md:w-[800px] md:h-[800px]' />
                </div>
            </div>

            {/* Section 6 */}
            <div className='pt-10 flex flex-col gap-8 pb-20'>
                <div className='text-3xl text-[#2F206A] font-black flex gap-2 justify-center md:text-[48px] md:mt-12'>
                    See<span className='text-[#ED2F74]'>scheduling in action</span>
                </div>
                <div className='pl-4'>
                    <Image src='/SingleDemo-Thumbnail.png' alt='Demo feature' width={380} height={0} className='object-contain rounded-md shadow-md md:w-[1400px] md:h-[600px] md:mx-auto md:mt-12' />
                </div>
            </div>
        </div>
    )
}

export default Feature
