"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Using Qmail', href: '/about' },
        { name: 'About us', href: '/about' },
        { name: 'Our blog', href: '/services' },
        { name: 'Get Qmail for free', href: '/portfolio', isButton: true },
        { name: 'Help', href: '/contact' },
        { name: 'Sign in', href: '/contact' },
    ];

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-md ">
            <div className="max-w-7xl mx-auto px-4 pt-4 pb-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-around h-16 sm:flex justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <span className="text-[#2F206A] font-bold text-xl cursor-pointer">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className="h-20 w-auto"
                                />
                            </span>
                        </Link>
                    </div>


                    {/* Desktop Menu  */}
                    <div className="hidden md:block">
                        <div className=" flex gap-5 items-center ">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href}>
                                    <span className={`${link.isButton ? 'text-white bg-[rgb(48,153,26)]  px-6 py-4  text-[18px] font-sm hover:bg-[#3CBF20] hover: rounded-md text-sm font-medium cursor-pointer' : 'text-[oklch(14.7% 0.004 49.25)]   text-[18px] font-sm hover:bg-purple-50 hover:text-[#2F206A] px-3 py-2 rounded-md text-sm font-medium cursor-pointer'}`}>
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#2F206A] hover:text-[#2F206A] hover:bg-purple-100 focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* Close icon */}
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (expanded) */}
            <div className={`${isOpen ? 'block fixed inset-0 mt-22 bg-white overflow-hidden' : 'hidden'} md:hidden`}>
                <div className=" px-2 ml-3  pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href}>
                            <span className={`${link.isButton ? 'text-white bg-[rgb(48,153,26)]  text-[oklch(14.7% 0.004 49.25)] hover:bg-[#3CBF20] hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer' : 'text-[oklch(14.7% 0.004 49.25)] hover:bg-purple-50 hover:text-[#2F206A] block px-3 py-2 rounded-md text-base font-medium cursor-pointer'}`}>
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;