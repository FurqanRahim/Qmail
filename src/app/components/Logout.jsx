"use client";

import React from "react";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
    const handleLogout = () => {
        // Here you can add your logout logic
        // e.g., clear localStorage, cookies, redirect to login page
        console.log("User logged out!");
        alert("You have been logged out!");
    };

    return (
        <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-xl shadow hover:bg-red-600 transition-all"
        >
            <LogOut size={18} />
            Logout
        </button>
    );
}
