import prisma from "../../../lib/prisma.js";


export default async function Logout(request, response) {
    try {

        const token = request.cookies().get("token")?.value;


        console.log("Token before logout:", token);


        request.cookies().set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            expires: new Date(0),
            path: "/",
        });

        return response.status(200).json({ message: "Logged out successfully" });

    } catch (error) {
        console.error(error)
        return response.status(500).send("Internal Server Error")
    }
}