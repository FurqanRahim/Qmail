import prisma from "../../../../../lib/prisma.js";
import { cookies } from "next/headers.js";
import { NextResponse } from "next/server.js";


export async function GET(request) {
    try {

        const token = cookies().get("token")?.value;


        console.log("Token before logout:", token);


        cookies().set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            expires: new Date(0),
            path: "/",
        });

        return NextResponse.json({ message: "Logged out successfully" }, { status: 200 });

    } catch (error) {
        console.error(error)
        return NextResponse.json({ Message: "Internal Server Error" }, { status: 500 })
    }
}