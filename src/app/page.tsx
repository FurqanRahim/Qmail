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

            {/* Testimonials Section */}
            <div className='mt-20 flex flex-col gap-12 justify-center items-center pb-20 px-6'>
                <h2 className='text-3xl text-[#2F206A] font-black md:text-[48px] text-center'>
                    What our users say
                </h2>
                <p className='text-lg text-gray-600 max-w-2xl text-center'>
                    Trusted by professionals across industries, from startups to enterprise teams.
                </p>

                {/* Testimonial Cards */}
                <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Sarah Khan"
                            className="w-16 h-16 rounded-full border-2 border-[#2F206A] mb-4"
                        />
                        <p className="text-gray-700 italic leading-relaxed">
                            "This platform has streamlined how I manage client communication. Scheduled emails mean I never miss an update."
                        </p>
                        <h4 className="mt-4 font-bold text-[#2F206A] text-lg">Sarah Khan</h4>
                        <span className="text-sm text-gray-500">Marketing Specialist</span>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <img
                            src="https://randomuser.me/api/portraits/men/46.jpg"
                            alt="Ali Raza"
                            className="w-16 h-16 rounded-full border-2 border-[#2F206A] mb-4"
                        />
                        <p className="text-gray-700 italic leading-relaxed">
                            "As a researcher, I schedule project updates and reminders for my team. It keeps us focused and organized."
                        </p>
                        <h4 className="mt-4 font-bold text-[#2F206A] text-lg">Ali Raza</h4>
                        <span className="text-sm text-gray-500">Data Scientist</span>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <img
                            src="https://randomuser.me/api/portraits/women/68.jpg"
                            alt="Emily Johnson"
                            className="w-16 h-16 rounded-full border-2 border-[#2F206A] mb-4"
                        />
                        <p className="text-gray-700 italic leading-relaxed">
                            "Our company uses it to schedule announcements and client updates. It saves hours each week and improves productivity."
                        </p>
                        <h4 className="mt-4 font-bold text-[#2F206A] text-lg">Emily Johnson</h4>
                        <span className="text-sm text-gray-500">Project Manager</span>
                    </div>
                </div>

                <Link href="/Dashboard">
                    <div className='text-lg bg-[rgb(48,153,26)] text-white rounded-md px-6 py-3 hover:bg-[#3CBF20] transition-colors duration-300 mt-10'>
                        Get Started Free
                    </div>
                </Link>
            </div>

            <Footer />
        </>
    )
}

export default Page
