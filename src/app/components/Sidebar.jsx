"use client";

import React, { useState } from "react";
import Time from "../components/Time.jsx"
import Link from "next/link";
import {
    Menu,
    X,
    Home,
    MessageSquarePlus,
    Mail,
    MessageCircle,
    HelpCircle,
    LogOut,
} from "lucide-react";

export default function Sidebar({ children }) {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: "Home", icon: <Home size={20} />, href: "/Homepage/", isline: true },
        { name: "Create Message", icon: <MessageSquarePlus size={20} />, href: "/Dashboard" },
        { name: "View Message", icon: <Mail size={20} />, href: "/ViewMsg", isline: true },
        { name: "Feedback", icon: <MessageCircle size={20} />, href: "#", isline: true },
        { name: "Help", icon: <HelpCircle size={20} />, href: "/help" },
        { name: "Logout", icon: <LogOut size={20} />, href: "/Logout" },
    ];

    const SidebarContent = ({ isMobile = false }) => (
        <nav className="flex flex-col font-medium">
            {menuItems.map((item) => (
                <React.Fragment key={item.name}>
                    <Link
                        href={item.href}
                        className={`flex items-center gap-3 p-3 rounded-lg transition 
              ${isMobile
                                ? "hover:bg-white hover:text-[#2F206A]"
                                : "hover:bg-white hover:text-[#2F206A]"
                            }`}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>

                    {item.isline && (
                        <div
                            className={`${isMobile ? "border-white/30" : "border-white/30"
                                } border-b my-3`}
                        ></div>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );

    return (
        <div className="flex min-h-screen bg-[#F3F3F5]">
            {/* Sidebar - Desktop */}
            <aside className="hidden md:flex w-60 flex-col p-5 shadow-md bg-[#2F206A] text-white">
                <h1 className="text-[34px] font-bold mb-8 pl-4 pt-9">Qmail</h1>
                <SidebarContent />
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between bg-[#2F206A] text-white px-4 py-3 w-full fixed top-0 left-0 z-20 shadow">
                <h1 className="text-xl font-bold">Qmail</h1>
                <button onClick={() => setOpen(true)}>
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-30 bg-black/50 transition-opacity duration-300 
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setOpen(false)}
            >
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-[#2F206A] text-white p-5 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-2xl font-bold">Qmail</h1>
                        <button onClick={() => setOpen(false)}>
                            <X size={28} />
                        </button>
                    </div>
                    <SidebarContent isMobile />
                </div>
            </div>

            {/* Page Content */}
            <main className="flex-1 p-6 pt-14 mt-12 md:mt-0">
                <h2 className="text-4xl font-bold text-[#2F206A] pl-6">Dashboard</h2>
                <p className="mt-4 text-gray-700">
                    <div>
                        <Time children={children} />
                    </div>
                </p>
            </main>
        </div>
    );
}
