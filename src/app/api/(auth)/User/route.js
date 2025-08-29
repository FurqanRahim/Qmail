import prisma from "../../../lib/prisma.js";

export default async function getAllUser(request, response) {
    try {

        const allUser = await prisma.User.findMany();
        return response.status(200).send({ "allUser": allUser })



    } catch (error) {
        console.error(error)
        return response.status(500).send("Internal Server Error")
    }
}