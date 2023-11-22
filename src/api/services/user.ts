import User from "../interfaces/user";
import { PrismaClient } from "@prisma/client";
import { encrypt } from "../../utils/bcryptHandler";

const prisma = new PrismaClient();

const getUsers = async () => {
    const users = await prisma.user.findMany({
        where: {
            statusId: 1
        }
    });
    return users;
}

const getUsersByRole = async (roleId: number) => {
    const users = await prisma.user.findMany({
        where: {
            roleId: roleId
        }
    });
    return users;
}

const getUsersByFilter = async (filter: string) => {
    const users = await prisma.user.findMany({
        where: {
            OR: [
                {
                    email: {
                        contains: filter
                    }
                }
            ],
            statusId: 1
        }
    });
    return users;
}

const getDisabledUsers = async () => {
    const users = await prisma.user.findMany({
        where: {
            statusId: 0
        }
    });
    return users;
}

const getUserById = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    });
    return user;
}

const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    return user;
}

const createUser = async (user: User) => {
    const newUser = await prisma.user.create({
        data: {
            id: user.id || undefined,
            email: user.email,
            password: await encrypt(user.password),
            roleId: user.roleId || undefined,
            statusId: user.statusId || undefined,
            createdAt: user.createdAt || undefined,
            updatedAt: user.updatedAt || undefined
        }
    });
    return newUser;
}

const updateUser = async (user: User) => {
    const updatedUser = await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            email: user.email,
            password: await encrypt(user.password),
            roleId: user.roleId || undefined,
        }
    });
    return updatedUser;
}

const enableUser = async (id: number) => {
    const enabledUser = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            statusId: 1
        }
    });
    return enabledUser;
}

const disableUser = async (id: number) => {
    const disabledUser = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            statusId: 0
        }
    });
    return disabledUser;
}

const deleteUser = async (id: number) => {
    const deletedUser = await prisma.user.delete({
        where: {
            id: id
        }
    });
    return deletedUser;
}

export {
    getUsers,
    getUsersByRole,
    getUsersByFilter,
    getDisabledUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    enableUser,
    disableUser,
    deleteUser
}