"use client";

import React, { useEffect, useState } from "react";

export default function Time({ children }) {
    const [greeting, setGreeting] = useState("");
    const [timeString, setTimeString] = useState("");
    const [dayName, setDayName] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hour = now.getHours();
            const dayOptions = { weekday: "long" };
            const timeOptions = {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            };

            // Greeting
            if (hour >= 5 && hour < 12) {
                setGreeting("Good Morning");
            } else if (hour >= 12 && hour < 17) {
                setGreeting("Good Afternoon");
            } else if (hour >= 17 && hour < 21) {
                setGreeting("Good Evening");
            } else {
                setGreeting("Good Night");
            }

            // Day name
            setDayName(now.toLocaleDateString("en-US", dayOptions));

            // Time with seconds
            setTimeString(now.toLocaleTimeString("en-US", timeOptions));
        };

        updateTime();

        // Update every second
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white shadow-md rounded-2xl p-6  space-y-4">
            {/* Greeting & Time */}
            <div className="flex flex-col  ">
                <span className="block text-2xl font-bold text-[#2F206A] ml-4  ">
                    {greeting}
                </span>
                <span className="block text-lg text-gray-700 mt-2 ml-4 ">{dayName}</span>
                <span className="block text-lg text-gray-500 ml-4 ">{timeString}</span>
            </div>

            {/* Children will be rendered here */}
            {children && (
                <div className="pt-4 border-t border-gray-200">
                    {children}
                </div>
            )}
        </div>
    );
}
