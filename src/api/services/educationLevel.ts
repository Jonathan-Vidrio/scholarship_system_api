import EducationLevel from "../interfaces/educationLevel";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getEducationLevels = async () => {
    const educationLevels = await prisma.educationLevel.findMany({
        where: {
            statusId: 1
        }
    });
    return educationLevels;
}

const getEducationLevel = async (id: number) => {
    const educationLevel = await prisma.educationLevel.findUnique({
        where: {
            id: id
        }
    });
    return educationLevel;
}

const createEducationLevel = async (educationLevel: EducationLevel) => {
    const newEducationLevel = await prisma.educationLevel.createMany({
        data: {
            id: educationLevel.id || undefined,
            name: educationLevel.name,
            description: educationLevel.description || undefined,
            statusId: educationLevel.statusId || undefined,
            createdAt: educationLevel.createdAt || undefined,
            updatedAt: educationLevel.updatedAt || undefined
        },
    });
    return newEducationLevel;
}

const updateEducationLevel = async (id: number, educationLevel: EducationLevel) => {
    const updatedEducationLevel = await prisma.educationLevel.update({
        where: {
            id: id
        },
        data: educationLevel
    });
    return updatedEducationLevel;
}

const disableEducationLevel = async (id: number) => {
    const disabledEducationLevel = await prisma.educationLevel.update({
        where: {
            id: id
        },
        data: {
            statusId: 0
        }
    });
    return disabledEducationLevel;
}

const enableEducationLevel = async (id: number) => {
    const enabledEducationLevel = await prisma.educationLevel.update({
        where: {
            id: id
        },
        data: {
            statusId: 1
        }
    });
    return enabledEducationLevel;
}

const deleteEducationLevel = async (id: number) => {
    const deletedEducationLevel = await prisma.educationLevel.delete({
        where: {
            id: id
        }
    });
    return deletedEducationLevel;
}

export {
    getEducationLevels,
    getEducationLevel,
    createEducationLevel,
    updateEducationLevel,
    disableEducationLevel,
    enableEducationLevel,
    deleteEducationLevel
}