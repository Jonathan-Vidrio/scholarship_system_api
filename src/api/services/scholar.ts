import Scholar from "../interfaces/scholar";
import { PrismaClient } from "@prisma/client";
import {getTutorByWorkerId} from "./tutor";

const prisma = new PrismaClient();

const getScholars = async () => {
    const scholars = await prisma.scholar.findMany({
        where: {
            statusId: 1
        }
    });
    return scholars;
}

const getDisabledScholars = async () => {
    const scholars = await prisma.scholar.findMany({
        where: {
            statusId: 2
        }
    });
    return scholars;
}

const getScholarByFilter = async (filter: string) => {
    const scholars = await prisma.scholar.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: filter
                    }
                },
                {
                    firstLastName: {
                        contains: filter
                    }
                },
                {
                    secondLastName: {
                        contains: filter
                    }
                }
            ],
            statusId: 1
        }
    });
    return scholars;
}

const getScholarsByTutorId = async (tutorId: number) => {
    const scholar = await prisma.scholar.findMany({
        where: {
            tutorId: tutorId
        }
    });
    return scholar;
}

const getScholarByTutorWorkerIdAndCurp = async (workerId: string, curp: string) => {
    const tutor = await getTutorByWorkerId(workerId);
    console.log(tutor);
    if (tutor) {
        const scholar = await prisma.scholar.findMany({
            where: {
                tutorId: tutor.id,
                curp: curp
            }
        });

        if (scholar.length > 0) {
            return scholar;
        }
        throw new Error("Scholar not found");
    }
    throw new Error("Tutor not found");
}

const getScholar = async (id: number) => {
    const scholar = await prisma.scholar.findUnique({
        where: {
            id: id
        }
    });
    return scholar;
}

const getScholarByUserId = async (userId: number) => {
    const scholar = await prisma.scholar.findMany({
        where: {
            userId: userId
        }
    });
    return scholar;
}

const getScholarByCurp = async (curp: string) => {
    const scholar = await prisma.scholar.findMany({
        where: {
            curp: curp
        }
    });
    return scholar;
}

const createScholar = async (scholar: Scholar) => {
    const newScholar = await prisma.scholar.create({
        data: {
            id: scholar.id || undefined,
            userId: scholar.userId || undefined,
            tutorId: scholar.tutorId,
            name: scholar.name || undefined,
            firstLastName: scholar.firstLastName || undefined,
            secondLastName: scholar.secondLastName || undefined,
            curp: scholar.curp,
            birthdate: scholar.birthDate || undefined,
            educationLevelId: scholar.educationLevelId || undefined,
            scholarshipId: scholar.scholarshipId || undefined,
            statusId: scholar.statusId || undefined,
            createdAt: scholar.createdAt || undefined,
            updatedAt: scholar.updatedAt || undefined
        }
    });
    return newScholar;
}

const updateScholar = async (id: number, scholar: Scholar) => {
    const updatedScholar = await prisma.scholar.update({
        where: {
            id: id
        },
        data: scholar
    });
    return updatedScholar;
}

const enableScholar = async (id: number) => {
    const enabledScholar = await prisma.scholar.update({
        where: {
            id: id
        },
        data: {
            statusId: 1
        }
    });
    return enabledScholar;
}

const disableScholar = async (id: number) => {
    const disabledScholar = await prisma.scholar.update({
        where: {
            id: id
        },
        data: {
            statusId: 2
        }
    });
    return disabledScholar;
}

const removeScholar = async (id: number) => {
    const deletedScholar = await prisma.scholar.delete({
        where: {
            id: id
        }
    });
    return deletedScholar;
}

export {
    getScholars,
    getDisabledScholars,
    getScholarByFilter,
    getScholarsByTutorId,
    getScholarByTutorWorkerIdAndCurp,
    getScholar,
    getScholarByUserId,
    getScholarByCurp,
    createScholar,
    updateScholar,
    enableScholar,
    disableScholar,
    removeScholar
}