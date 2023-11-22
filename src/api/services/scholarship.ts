import IScholarship from "../interfaces/scholarship";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getScholarships = async () => {
    const scholarships = await prisma.scholarship.findMany({
        where: {
            statusId: 1
        }
    });
    return scholarships;
}

const getDisabledScholarships = async () => {
    const scholarships = await prisma.scholarship.findMany({
        where: {
            statusId: 0
        }
    });
    return scholarships;
}

const getScholarshipsByFilter = async (filter: string) => {
    const scholarships = await prisma.scholarship.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: filter
                    }
                },
                {
                    description: {
                        contains: filter
                    }
                }
            ],
            statusId: 1
        }
    });
    return scholarships;
}

const getScholarship = async (id: number) => {
    const scholarship = await prisma.scholarship.findUnique({
        where: {
            id: id
        }
    });
    return scholarship;
}

const createScholarship = async (scholarship: IScholarship) => {
    const newScholarship = await prisma.scholarship.create({
        data: {
            id: scholarship.id || undefined,
            name: scholarship.name,
            description: scholarship.description || undefined,
            amount: scholarship.amount,
            statusId: scholarship.statusId || undefined,
            createdAt: scholarship.createdAt || undefined,
            updatedAt: scholarship.updatedAt || undefined
        }
    });
    return newScholarship;
}

const updateScholarship = async (id: number, scholarship: IScholarship) => {
    const updatedScholarship = await prisma.scholarship.update({
        where: {
            id: id
        },
        data: scholarship
    });
    return updatedScholarship;
}

const enableScholarship = async (id: number) => {
    const enabledScholarship = await prisma.scholarship.update({
        where: {
            id: id
        },
        data: {
            statusId: 1
        }
    });
    return enabledScholarship;
}

const disableScholarship = async (id: number) => {
    const disabledScholarship = await prisma.scholarship.update({
        where: {
            id: id
        },
        data: {
            statusId: 2
        }
    });
    return disabledScholarship;
}

const deleteScholarship = async (id: number) => {
    const deletedScholarship = await prisma.scholarship.delete({
        where: {
            id: id
        }
    });
    return deletedScholarship;
}

export {
    getScholarships,
    getDisabledScholarships,
    getScholarshipsByFilter,
    getScholarship,
    createScholarship,
    updateScholarship,
    enableScholarship,
    disableScholarship,
    deleteScholarship
}