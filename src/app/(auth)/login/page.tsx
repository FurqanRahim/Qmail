"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Email and password are required!");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post("/api/Login", {
                Email: email,
                password,
            });

            if (res.status === 200) {
                toast.success("Login Successfully ✅");
                setEmail("");
                setPassword("");
            }
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.Message || "Login failed");
            } else {
                toast.error("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#F0F0F2] py-10 flex flex-col gap-10">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="text-[32px] text-[#2F206A] font-black text-center -ml-16 md:text-[64px] md:mt-12 md:-ml-12">
                Login
            </div>

            <div className="text-[20px] font-bold pl-24 md:text-[24px] -ml-4 md:text-center md:-ml-36">
                Sign in to your account
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white w-[380px] mx-auto shadow border-[#2F206A] rounded-md p-4 md:w-[500px] md:mt-8"
            >
                <div className="text-[16px] font-medium p-2 flex flex-col gap-6 md:p-4">
                    {/* Email */}
                    <div className="flex flex-col gap-4">
                        <label className="text-[16px] pl-1 md:text-[18px]">Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-[#F0F0F2] w-[340px] h-[45px] rounded-md p-4 border-[#2F206A] border-1 hover:border-[#2F206A] md:w-[440px]"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-4">
                        <label className="text-[16px] pl-1 md:text-[18px]">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-[#F0F0F2] w-[340px] h-[45px] rounded-md p-4 border-[#2F206A] border-1 hover:border-[#2F206A] md:w-[440px]"
                            required
                        />
                    </div>

                    {/* Register link */}
                    <div className="pl-2 flex gap-1">
                        New here?{" "}
                        <span className="text-[#2F206A] font-bold cursor-pointer border-black border-b-1">
                            <Link href="/register">Create an account</Link>
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="w-[340px] pt-4 border-[#2F206A] border-b-1 md:w-[440px]"></div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="text-white bg-[rgb(48,153,26)] w-[90px] h-[45px] cursor-pointer text-center rounded-md hover:bg-[#3CBF20] md:mt-6 md:w-[120px] disabled:opacity-50"
                    >
                        {loading ? "Loading..." : "Sign in"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
