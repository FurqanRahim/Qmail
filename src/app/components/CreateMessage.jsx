"use client";

import React, { useState } from "react";

export default function CreateMessage() {
    // Four separate states
    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [futureDate, setFutureDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", { to, subject, message, futureDate });
        alert(`Message scheduled for ${futureDate || "Now"}`);
    };

    const handleReset = () => {
        setTo("");
        setSubject("");
        setMessage("");
        setFutureDate("");
    };

    return (
        <div className="flex justify-center items-center min-h-screen  p-4 md:-mt-24 md:-ml-150">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl   p-6 space-y-4"
            >
                {/* Header */}
                <h2 className="text-2xl font-bold text-[#2F206A] pt-4">Compose Email</h2>

                {/* To */}
                <div>
                    <label className="block text-md font-medium text-gray-600 pl-2 pb-2">To</label>
                    <input
                        type="email"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        placeholder="recipient@example.com"
                        required
                        className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#2F206A]"
                    />
                </div>

                {/* Subject */}
                <div>
                    <label className="block text-md font-medium text-gray-600 pl-2 pb-2">Subject</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter subject"
                        className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#2F206A]"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-md font-medium text-gray-600 pl-2 pb-2">Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your message..."
                        rows="6"
                        className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#2F206A]"
                    ></textarea>
                </div>

                {/* Future Date */}
                <div>
                    <label className="block text-md font-medium text-gray-600 pl-2 pb-2">
                        Future Date (Optional)
                    </label>
                    <input
                        type="datetime-local"
                        value={futureDate}
                        onChange={(e) => setFutureDate(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#2F206A]"
                    />
                    <p className="text-xs text-gray-500 mt-1 pl-2 pt-2">
                        If selected, your message will be scheduled.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-3">

                    <button
                        type="submit"
                        className="bg-[rgb(48,153,26)] ml-1 text-white px-5 py-2 rounded-xl shadow hover:bg-[#3CBF20] transition"
                    >
                        Send
                    </button>

                </div>
            </form>
        </div>
    );
}
