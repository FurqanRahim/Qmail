import prisma from "../../../lib/prisma.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

export default async function Login(request, response) {

    try {

        const { Email, password } = req.body;

        const authUser = await prisma.User.findUnique({ Where: { Email } });

        if (!authUser) {
            return response.status(401).send("User not Found")
        }

        const ispasswordValid = bcrypt.compare(password, authUser.password)

        if (!ispasswordValid) {

            return response.status(401).send("Invalid Password")

        }

        const token = jwt.sign(
            { userId: authUser.Id, email: authUser.Email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        response.cookies().set("token", token, {
            httpOnly: true,  // cannot be accessed via JS
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7 * 7, // ✅ 7 weeks
            path: "/",
        });


        return response.status(200).send("Login Successfully")


    } catch (error) {
        console.error(error)
        return response.status(200).send("Interval Server Error")
    }
}