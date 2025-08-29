import { Worker } from "bullmq";
import prisma from "../lib/prisma.js";
import nodemailer from "nodemailer";
import redis from "../lib/redis.js";

const worker = new Worker(
    "message-queue",
    async (job) => {
        // 1. Fetch message with user
        const message = await prisma.message.findUnique({
            where: { id: job.data.messageId },
            include: { user: true },
        });

        if (!message) throw new Error("Message not found");

        // Use env-based SMTP creds (recommended)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 2. Send email
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: message.To,
            subject: message.Subject,
            text: message.Writemessage,
        });

        // 3. Update status
        await prisma.message.update({
            where: { id: message.id },
            data: { Status: "Sent" },
        });

        console.log(`✅ Email sent to ${message.To}`);
    },
    { connection: redis }
);

worker.on("completed", (job) => {
    console.log(`Job ${job.id} completed`);
});

worker.on("failed", async (job, err) => {
    console.error(`Job ${job?.id} failed:`, err);
    if (job?.data?.messageId) {
        await prisma.message.update({
            where: { id: job.data.messageId },
            data: { Status: "Failed", ErrorMessage: err.message },
        });
    }
});

export default worker;
