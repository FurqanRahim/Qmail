'use client'

import Image from "next/image"
import Link from "next/link"
import Navbar from "../components/Navbar.jsx"

function Footer() {
    const condition = [
        { name: 'Terms of service', link: '' },
        { name: 'Privacy policy', link: '' },
        { name: 'Contact us', link: '' },
        { name: 'Report an issue', link: '' },
    ]

    const media = [
        { svg: '/file.svg', alt: 'Instagram', width: 20, height: 40 },
        { svg: '/globe.svg', alt: 'Tiktok', width: 20, height: 40 },
        { svg: '/window.svg', alt: 'Thread', width: 20, height: 40 },
    ]

    return (
        <>


            {/* Main footer content */}
            <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 pt-10 gap-4">
                {/* Store Icon */}
                <Image
                    src="/Chrome-store.svg"
                    alt="Chrome Store"
                    width={100}
                    height={100}
                    className="h-10 w-auto cursor-pointer"
                />

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
                    {condition.map((link) => (
                        <Link key={link.name} href={link.link}>
                            <span className="hover:border-b border-black">{link.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="border-b border-black my-6 mx-4 md:mx-16"></div>

            {/* Bottom section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 pb-6 gap-4">
                <div className="text-sm sm:text-base text-center md:text-left">
                    © Copyright Qmail Ltd 2025 All rights reserved.
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-6 justify-center">
                    {media.map((m, idx) => (
                        <span key={idx}>
                            <Image
                                src={m.svg}
                                alt={m.alt}
                                width={m.width}
                                height={m.height}
                                className="cursor-pointer"
                            />
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Footer
