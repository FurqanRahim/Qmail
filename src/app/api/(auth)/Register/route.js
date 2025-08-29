import prisma from "../../../../../lib/prisma.js";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server.js";

export async function POST(request) {
    try {



        const userData = await request.json();
        console.log("UserData =========>", userData)

        const Username = userData.Username
        const Email = userData.Email
        const password = userData.password

        console.log("Username =========>", userData.Username)
        console.log("Email ===========>", userData.Email)
        console.log("Password =======>", userData.password)

        const hashpassword = await bcrypt.hash(password, 10)

        console.log("Hashpassword ====>", hashpassword)

        const Newuser = await prisma.user.create({
            data: { Username, Email, emailpass: userData.password, password: hashpassword }
        })

        return NextResponse.json({ "Message": `${Username} Account has Created Successfully` }, { status: 200 })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ "Message": "Internal Server Error" }, { status: 500 })

    }
}