"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Page = () => {
    const [formData, setFormData] = useState({
        Username: "",
        Email: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post("/api/Register", {
                Username: formData.Username,
                Email: formData.Email,
                password: formData.password,
            });

            toast.success(res.data.Message || "Registered successfully!");

            setFormData({
                Username: "",
                Email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.Message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#F0F0F2] py-10 flex flex-col gap-10">
            <div className="text-[32px] text-[#2F206A] font-black text-center -ml-16 md:text-[64px] md:mt-12 md:-ml-4">
                Registration
            </div>
            <div className="text-[24px] font-bold pl-24 md:text-[30px] -ml-8 md:text-center md:-ml-36">
                Create your account
            </div>
            <div className="bg-white w-[380px] mx-auto shadow border-[#2F206A] rounded-md p-4 md:w-[500px] md:mt-8">
                <form
                    onSubmit={handleSubmit}
                    className="text-[16px] font-medium p-2 flex flex-col gap-6 md:p-4"
                >
                    {/* Username */}
                    <div className="flex flex-col gap-4">
                        <div className="text-[16px] pl-1 md:text-[18px]">Username</div>
                        <input
                            type="text"
                            name="Username"
                            value={formData.Username}
                            onChange={handleChange}
                            className="bg-[#F0F0F2] w-[340px] h-[45px] rounded-md p-4 border-[#2F206A] border hover:border-[#2F206A] md:w-[440px]"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-4">
                        <div className="text-[16px] pl-1 md:text-[18px]">Email address</div>
                        <input
                            type="email"
                            name="Email"
                            value={formData.Email}
                            onChange={handleChange}
                            className="bg-[#F0F0F2] w-[340px] h-[45px] rounded-md p-4 border-[#2F206A] border hover:border-[#2F206A] md:w-[440px]"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-4">
                        <div className="text-[16px] pl-1 md:text-[18px]">Password</div>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="bg-[#F0F0F2] w-[340px] h-[45px] rounded-md p-4 border-[#2F206A] border hover:border-[#2F206A] md:w-[440px]"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col gap-4">
                        <div className="text-[16px] pl-1 md:text-[18px]">
                            Confirm Password
                        </div>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="bg-[#F0F0F2] w-[340px] h-[45px] rounded-md p-4 border-[#2F206A] border hover:border-[#2F206A] md:w-[440px]"
                            required
                        />
                    </div>

                    {/* Already Account */}
                    <div className="pl-2 flex gap-1">
                        Already have an account?{" "}
                        <div className="text-[#2F206A] font-bold cursor-pointer border-black border-b-1">
                            <Link href="/login">Go to Sign in</Link>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-[340px] pt-4 border-[#2F206A] border-b md:w-[440px]"></div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="text-white bg-[rgb(48,153,26)] w-[90px] h-[45px] cursor-pointer text-center rounded-md hover:bg-[#3CBF20] md:mt-6 md:w-[120px]"
                    >
                        {loading ? "Loading..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
