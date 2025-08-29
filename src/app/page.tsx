'use client';

import React from 'react'
import Link from 'next/link';
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Feature from "./components/Feature.jsx";
import Footer from "./components/Footer.jsx";

const Page = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Feature />

            {/* Feedback / CTA Section */}
            <div className='mt-16 flex flex-col gap-16 justify-center items-center pb-20'>
                <div className='text-3xl text-[#2F206A] font-black md:text-[48px]'>
                    What our users say
                </div>
                <div className='text-3xl font-extrabold pl-4 text-[#ED2F74] md:text-[64px]'>
                    Built for <span className='text-[#2F206A]'>professionals, students, <div>and teams</div></span>
                </div>
                <div className='text-lg font-bold md:text-[20px]'>
                    Watch our <span className='text-cyan-600 underline'>demo video</span> to see how easy it is to schedule your first email
                </div>
                <Link href="/Dashboard">
                    <div className='text-lg bg-[rgb(48,153,26)] text-white rounded-md px-6 py-3 hover:bg-[#3CBF20] transition-colors duration-300'>
                        Schedule Your First Email
                    </div>
                </Link>
            </div>

            <Footer />
        </>
    )
}

export default Page
