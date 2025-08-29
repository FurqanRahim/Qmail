'use client';

import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
    return (
        <div className="flex flex-col items-center px-4 py-8 mt-10 md:flex-row md:gap-2 md:justify-around md:items-center md:mt-12 md:px-8 lg:px-16">
            {/* Left Content */}
            <div className="flex flex-col gap-8 -ml-22 md:-mt-40 md:gap-10 max-w-2xl md:max-w-none">
                <div className="text-center md:text-left">
                    <div className="text-4xl font-black text-[#2F206A] sm:text-5xl  md:text-6xl md:ml-34 lg:text-7xl">
                        Lost your focus
                        <span className="block text-[#ED2F74] mt-2 -ml-36 md:mt-0 md:ml-1">again?</span>
                        <div className="text-black text-2xl font-normal  ml-12 pl-2 mt-4 md:-ml-1 md:text-3xl">
                            In a world of digital overload,
                        </div>
                        <div className="text-black text-2xl font-normal ml-12  md:-ml-1 md:text-3xl md:pl-1">
                            Qmail is the simplest way to
                        </div>
                        <div className="text-black text-2xl font-normal ml-12 pl-2 md:-ml-1 md:text-3xl">
                            keep track of what matters...
                        </div>

                    </div>
                </div>



                <div className="flex justify-center  md:justify-start">


                    <Link href="/Dashboard">
                        <button className="text-white bg-[rgb(48,153,26)] mt-4 -ml-20 p-4 rounded-md font-bold text-lg hover:bg-[#3CBF20] transition-colors duration-300 md:w-auto md:text-xl md:ml-34">
                            Get Qmail for free
                        </button>
                    </Link>

                </div>
            </div>

            {/* Right Image */}
            <div className="mt-10 w-full  max-w-md md:mt-0 md:h-[800px] md:max-w-xl">
                <div className="relative aspect-video w-full h-[600px] -mt-16 md:mt-18 md:-ml-40 md:h-[800px]   lg:h-[500px]">
                    <Image
                        src="/Homepage-Hero.png"
                        alt="Digital productivity illustration"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

        </div>
    )
}