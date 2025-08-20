"use client";

import React, { useState } from "react";
import { Menu, X, Home, User, Settings } from "lucide-react"; // icons

export default function SidebarLayout() {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: "Home", icon: <Home size={20} />, href: "#" },
        { name: "Profile", icon: <User size={20} />, href: "#" },
        { name: "Settings", icon: <Settings size={20} />, href: "#" },
    ];

    return (
        <div className="flex min-h-screen">
            {/* Sidebar for desktop */}
            <aside className="hidden md:flex w-64 bg-[#2F206A] text-white flex-col p-5">
                <h1 className="text-2xl font-bold mb-8">Qmail</h1>
                <nav className="flex flex-col gap-4">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:text-[#2F206A] transition"
                        >
                            {item.icon}
                            {item.name}
                        </a>
                    ))}
                </nav>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between bg-[#2F206A] text-white px-4 py-3 w-full fixed top-0 left-0 z-20">
                <h1 className="text-xl font-bold">Qmail</h1>
                <button onClick={() => setOpen(true)}>
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Sidebar Drawer */}
            <div
                className={`fixed inset-0 z-30 bg-black/50 transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setOpen(false)}
            >
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-[#2F206A] text-white p-5 transform transition-transform ${open ? "translate-x-0" : "-translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-2xl font-bold">MyApp</h1>
                        <button onClick={() => setOpen(false)}>
                            <X size={28} />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-4">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:text-[#2F206A] transition"
                            >
                                {item.icon}
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Page Content */}
            <main className="flex-1 p-6 md:ml-64 mt-12 md:mt-0">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <p className="mt-4 text-gray-700">
                    This is your main content area. Resize screen to test sidebar.
                </p>
            </main>
        </div>
    );
}
