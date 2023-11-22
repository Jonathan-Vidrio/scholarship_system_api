import IRole from "../interfaces/role";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getRoles = async () => {
    const roles = await prisma.role.findMany({
        where: {
            statusId: 1
        }
    });
    return roles;
}

const createRole = async (role: IRole) => {
    const newRole = await prisma.role.create({
        data: {
            id: role.id || undefined,
            name: role.name,
            description: role.description || undefined,
            statusId: role.statusId || undefined,
            createdAt: role.createdAt || undefined,
            updatedAt: role.updatedAt || undefined
        }
    });
    return newRole;
}

export {
    getRoles,
    createRole
}