import Document from "../interfaces/document";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getDocuments = async () => {
    const documents = await prisma.document.findMany({
        where: {
            statusId: 1
        }
    });
    return documents;
}

const getDisabledDocuments = async () => {
    const documents = await prisma.document.findMany({
        where: {
            statusId: 0
        }
    });
    return documents;
}

const getByFilter = async (filter: string) => {
    const documents = await prisma.document.findMany({
        where: {
            OR: [
                {
                    scholarId: Number(filter)
                },
                {
                    typeId: Number(filter)
                },
                {
                    statusId: Number(filter)
                }
            ]
        }
    });
    return documents;
}

const getDocumentById = async (id: number) => {
    const document = await prisma.document.findUnique({
        where: {
            id: id
        }
    });
    return document;
}

const createDocument = async (document: Document) => {
    const newDocument = await prisma.document.create({
        data: {
            id: document.id || undefined,
            scholarId: document.scholarId,
            typeId: document.typeId,
            saved: document.saved || undefined,
            url: document.url,
            statusId: document.statusId || undefined,
            createdAt: document.createdAt || undefined,
            updatedAt: document.updatedAt || undefined
        }
    });
    return newDocument;
}

const updateDocument = async (id: number, document: Document) => {
    const updatedDocument = await prisma.document.update({
        where: {
            id: id
        },
        data: document
    });
    return updatedDocument;
}

const enableDocument = async (id: number) => {
    const enabledDocument = await prisma.document.update({
        where: {
            id: id
        },
        data: {
            statusId: 1
        }
    });
    return enabledDocument;
}

const disableDocument = async (id: number) => {
    const disabledDocument = await prisma.document.update({
        where: {
            id: id
        },
        data: {
            statusId: 0
        }
    });
    return disabledDocument;
}

const deleteDocument = async (id: number) => {
    const deletedDocument = await prisma.document.delete({
        where: {
            id: id
        }
    });
    return deletedDocument;
}