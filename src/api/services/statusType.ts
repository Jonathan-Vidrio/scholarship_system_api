import StatusType from "../interfaces/statusType";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getStatusTypes = async () => {
    const statusTypes = await prisma.statusType.findMany();
    return statusTypes;
};

const createStatusType = async (statusType: StatusType) => {
    const newStatusType = await prisma.statusType.create({
        data: statusType,
    });
    return newStatusType;
}

export {
    getStatusTypes,
    createStatusType
}