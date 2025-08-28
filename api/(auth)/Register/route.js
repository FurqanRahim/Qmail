import prisma from "../../../lib/prisma.js";
import bcrypt from "bcrypt";

export default async function Register(request, response) {
    try {

        const { Username, Email, password } = request.body;

        const hashpassword = bcrypt.hash(password, 10)

        const Newuser = await prisma.User.create({
            data: { Username, Email, hashpassword }
        })

        return res.status(200).json({ "Message": `${Username} Account has Created Successfully` });

    } catch (error) {
        console.error(error)
        return res.status(500).json({ "Message": "Internal Server Error" })

    }
}