import IRole from "../interfaces/role";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createRole = async (role: IRole) => {
    const newRole = await prisma.role.create({
        data: {
            id: role.id || undefined,
            name: role.name,
            description: role.description || undefined,
            status: role.status || undefined,
            createdAt: role.createdAt || undefined,
            updatedAt: role.updatedAt || undefined
        }
    });
    return newRole;
}

export {
    createRole
}