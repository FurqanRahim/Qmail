"use client";

import React, { useState } from "react";

export default function CreateMessage() {
    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [futureDate, setFutureDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (futureDate && new Date(futureDate) < new Date()) {
            alert("Please select a future date and time.");
            return;
        }

        console.log("Form Submitted:", { to, subject, message, futureDate });
        alert(`Message scheduled for ${futureDate || "Now"}`);
        handleReset();
    };

    const handleReset = () => {
        setTo("");
        setSubject("");
        setMessage("");
        setFutureDate("");
    };

    return (
        <div className="flex justify-center min-h-screen   md:-ml-10 lg:px-10 py-6 ">
            {/* Compose Box */}
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg  p-5 sm:p-7 space-y-5"
            >
                {/* Header */}
                <h2 className="text-xl sm:text-4xl md:text-3xl font-bold text-[#2F206A]  mb-4 ">
                    Compose Email
                </h2>

                {/* To */}
                <div className="flex flex-col gap-6">
                    <div >
                        <label htmlFor="to" className="block text-sm font-medium text-gray-600 pl-2 pb-2">
                            To
                        </label>
                        <input
                            id="to"
                            type="email"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            placeholder="recipient@example.com"
                            required
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#2F206A] text-sm sm:text-base"
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-600 pl-1 pb-2">
                            Subject
                        </label>
                        <input
                            id="subject"
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Enter subject"
                            required
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#2F206A] text-sm sm:text-base"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-600 pl-1 pb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write your message..."
                            rows="5"
                            required
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#2F206A] text-sm sm:text-base"
                        ></textarea>
                    </div>

                    {/* Future Date */}
                    <div>
                        <label htmlFor="futureDate" className="block text-sm font-medium text-gray-600 pl-1 pb-1">
                            Future Date
                        </label>
                        <input
                            id="futureDate"
                            type="datetime-local"
                            value={futureDate}
                            onChange={(e) => setFutureDate(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#2F206A] text-sm sm:text-base"
                        />
                        <p className="text-xs text-gray-500 mt-1 pl-1">
                            Your message will be scheduled at the selected date.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-3">
                        <button
                            type="submit"
                            className="bg-[rgb(48,153,26)] text-white px-6 py-2 rounded-xl shadow hover:bg-[#3CBF20] transition text-sm sm:text-base"
                        >
                            Send
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="bg-gray-500 text-white px-6 py-2 rounded-xl shadow hover:bg-gray-600 transition text-sm sm:text-base"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
