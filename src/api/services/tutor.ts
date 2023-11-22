import Tutor from "../interfaces/tutor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTutors = async () => {
    const tutors = await prisma.tutor.findMany({
        where: {
            statusId: 1
        }
    });
    return tutors;
}

const getTutorByFilter = async (filter: string) => {
    const tutors = await prisma.tutor.findMany({
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
                },
                {
                    curp: {
                        contains: filter
                    }
                }
            ],
            statusId: 1
        }
    });
    return tutors;
}

const getDisabledTutors = async () => {
    const tutors = await prisma.tutor.findMany({
        where: {
            statusId: 0
        }
    });
    return tutors;
}

const getTutorById = async (id: number) => {
    const tutor = await prisma.tutor.findUnique({
        where: {
            id
        }
    });
    return tutor;
}

const getTutorByWorkerId = async (workerId: string) => {
    const tutor = await prisma.tutor.findUnique({
        where: {
            workerId
        }
    });
    return tutor;
}

const createTutor = async (tutor: Tutor) => {
    const newTutor = await prisma.tutor.create({
        data: {
            id: tutor.id || undefined,
            workerId: tutor.workerId,
            name: tutor.name,
            firstLastName: tutor.firstLastName,
            secondLastName: tutor.secondLastName || undefined,
            curp: tutor.curp,
            statusId: tutor.statusId || undefined,
            createdAt: tutor.createdAt || undefined,
            updatedAt: tutor.updatedAt || undefined
        }
    });
    return newTutor;
}

const updateTutor = async (id: number, tutor: Tutor) => {
    const updatedTutor = await prisma.tutor.update({
        where: {
            id
        },
        data: {
            workerId: tutor.workerId,
            name: tutor.name,
            firstLastName: tutor.firstLastName,
            secondLastName: tutor.secondLastName || undefined,
            curp: tutor.curp,
            statusId: tutor.statusId || undefined,
            createdAt: tutor.createdAt || undefined,
            updatedAt: tutor.updatedAt || undefined
        }
    });
    return updatedTutor;
}

const enableTutor = async (id: number) => {
    const enabledTutor = await prisma.tutor.update({
        where: {
            id
        },
        data: {
            statusId: 1
        }
    });
    return enabledTutor;
}

const disableTutor = async (id: number) => {
    const disabledTutor = await prisma.tutor.update({
        where: {
            id
        },
        data: {
            statusId: 0
        }
    });
    return disabledTutor;
}

const deleteTutor = async (id: number) => {
    const deletedTutor = await prisma.tutor.delete({
        where: {
            id
        }
    });
    return deletedTutor;
}

export {
    getTutors,
    getTutorByFilter,
    getDisabledTutors,
    getTutorById,
    getTutorByWorkerId,
    createTutor,
    updateTutor,
    enableTutor,
    disableTutor,
    deleteTutor
}