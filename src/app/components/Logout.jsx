"use client";

import React, { useState } from "react";
import { LogOut } from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            setLoading(true);
            const res = await axios.get("/api/Logout");

            if (res.status === 200) {
                toast.success("Logged out successfully ✅");
                setTimeout(() => {
                    router.push("/login"); // redirect to login page
                }, 1500);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <button
                onClick={handleLogout}
                disabled={loading}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl 
                   bg-red-500 text-white font-semibold shadow 
                   hover:bg-red-600 transition-all 
                   w-full sm:w-auto disabled:opacity-50"
            >
                <LogOut size={18} />
                {loading ? "Logging out..." : "Logout"}
            </button>
        </>
    );
};

export default LogoutButton;
