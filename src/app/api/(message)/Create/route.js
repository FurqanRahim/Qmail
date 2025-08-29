import prisma from "../../../../../lib/prisma.js";
import { NextResponse } from "next/server.js";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import messageQueue from "../../../../../Worker/messageWorker.js";

export async function POST(request) {
    try {
        // 1. Get JWT from cookies
        const token = cookies().get("token")?.value;
        if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        let userId;
        try {
            ({ userId } = jwt.verify(token, process.env.JWT_SECRET));
        } catch {
            return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
        }

        // 2. Parse body
        const { To, Subject, Writemessage, FutureDate } = await request.json();

        // 3. Save message in DB
        const newMessage = await prisma.message.create({
            data: {
                To,
                Subject,
                Writemessage,
                FutureDate: new Date(FutureDate),
                userID: userId,
            },
        });

        // 4. Add job to queue with safe delay
        const delay = Math.max(new Date(FutureDate).getTime() - Date.now(), 0);
        await messageQueue.add("send-email", { messageId: newMessage.id }, { delay });

        return NextResponse.json(
            { message: "Message scheduled", data: newMessage },
            { status: 201 }
        );
    } catch (error) {
        console.error("Message scheduling error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
