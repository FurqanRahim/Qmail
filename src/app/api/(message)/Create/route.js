import prisma from "../../../../../lib/prisma.js";
import { NextResponse } from "next/server.js";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req) {
    try {
        const body = await req.json();
        const { To, Subject, Writemessage, FutureDate } = body;

        // --- FIXED COOKIES ---
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { Message: "Unauthorized - No token found" },
                { status: 401 }
            );
        }

        // --- VERIFY TOKEN ---
        let userId;
        try {
            userId = jwt.verify(token, process.env.JWT_SECRET).userId;
        } catch {
            return NextResponse.json(
                { Message: "Invalid or expired token" },
                { status: 403 }
            );
        }

        // --- FIX DATE PARSING ---
        let parsedDate = undefined;
        if (FutureDate) {
            const [day, month, year] = FutureDate.split("-");
            parsedDate = new Date(`${year}-${month}-${day}`);
            if (isNaN(parsedDate)) parsedDate = undefined;
        }

        // --- SAVE MESSAGE ---
        const newMessage = await prisma.message.create({
            data: {
                To,
                Subject,
                Writemessage,
                userID: userId,
                FutureDate: parsedDate, // optional, defaults to now() if undefined
            },
        });

        return NextResponse.json(
            { Message: "Message created successfully", data: newMessage },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { Message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
