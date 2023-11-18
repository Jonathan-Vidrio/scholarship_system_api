import IEducationLevel from "../interfaces/educationLevel";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createEducationLevel = async (educationLevel: IEducationLevel) => {
    const newEducationLevel = await prisma.educationLevel.createMany({
        data: {
            id: educationLevel.id || undefined,
            name: educationLevel.name,
            description: educationLevel.description || undefined,
            status: educationLevel.status || undefined,
            createdAt: educationLevel.createdAt || undefined,
            updatedAt: educationLevel.updatedAt || undefined
        },
    });
}

export {
    createEducationLevel
}