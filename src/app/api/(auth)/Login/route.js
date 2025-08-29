
import prisma from "../../../../../lib/prisma.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server.js";
import { cookies } from "next/headers";

export async function POST(request) {

    try {

        const getUser = await request.json();

        const Email = getUser.Email
        const password = getUser.password

        const authUser = await prisma.user.findUnique({ where: { Email } });

        if (!authUser) {
            return NextResponse.json({ Message: "User not Found" }, { status: 401 })
        }

        const ispasswordValid = await bcrypt.compare(password, authUser.password)

        if (!ispasswordValid) {

            return NextResponse.json({ Message: "Invalid Password" }, { status: 401 })

        }

        const token = jwt.sign(
            { userId: authUser.Id, email: authUser.Email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        cookies().set("token", token, {
            httpOnly: true,  // cannot be accessed via JS
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7 * 7, // ✅ 7 weeks
            path: "/",
        });


        return NextResponse.json({ Message: "Login Successfully" }, { status: 200 })


    } catch (error) {
        console.error(error)
        return NextResponse.json({ Message: "Interval Server Error" }, { status: 500 })
    }
}