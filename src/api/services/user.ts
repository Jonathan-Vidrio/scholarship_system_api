import IUser from "../interfaces/user";
import { PrismaClient } from "@prisma/client";
import { encrypt } from "../../utils/bcryptHandler";

const prisma = new PrismaClient();

const getUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const getDisabledUsers = async () => {
    const users = await prisma.user.findMany({
        where: {
            status: 0
        }
    });
    return users;
}

const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    return user;
}

const createUser = async (user: IUser) => {
    const newUser = await prisma.user.create({
        data: {
            id: user.id || undefined,
            email: user.email,
            password: await encrypt(user.password),
            roleId: user.roleId || undefined,
            status: user.status || undefined,
            createdAt: user.createdAt || undefined,
            updatedAt: user.updatedAt || undefined
        }
    });
    return newUser;
}

const updateUser = async (user: IUser) => {
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
            status: 1
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
            status: 0
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
    getDisabledUsers,
    getUserByEmail,
    createUser,
    updateUser,
    enableUser,
    disableUser,
    deleteUser
}