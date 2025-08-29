import prisma from "../../../../../lib/prisma.js";
import { NextResponse } from "next/server.js";
import jwt from "jsonwebtoken";

// ✅ GET all messages for logged-in user
export async function GET(request) {
    try {
        // 1. Get token from cookies
        const token = request.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        // 2. Verify token
        const { userId } = jwt.verify(token, process.env.JWT_SECRET);

        // 3. Fetch messages belonging to userId
        const messages = await prisma.message.findMany({
            where: { userID: userId },
            orderBy: { FutureDate: "desc" }, // newest first
        });

        // 4. Return messages
        return NextResponse.json({ messages }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
