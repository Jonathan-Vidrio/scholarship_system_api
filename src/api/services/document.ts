import IDocument from "../interfaces/document";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getDocuments = async () => {
    const documents = await prisma.document.findMany({
        where: {
            status: 1
        }
    });
    return documents;
}

const getDisabledDocuments = async () => {
    const documents = await prisma.document.findMany({
        where: {
            status: 0
        }
    });
    return documents;
}

const getDocumentsByScholarId = async (scholarId: number) => {
    const documents = await prisma.document.findMany({
        where: {
            scholarId: scholarId
        }
    });
    return documents;
}

const getDocumentsByType = async (type: number) => {
    const documents = await prisma.document.findMany({
        where: {
            type: type
        }
    });
    return documents;
}

const getDocumentsBySaved = async (saved: Date) => {
    const documents = await prisma.document.findMany({
        where: {
            saved: saved
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

const createDocument = async (document: IDocument) => {
    const newDocument = await prisma.document.create({
        data: {
            id: document.id || undefined,
            scholarId: document.scholarId,
            type: document.type,
            saved: document.saved || undefined,
            url: document.url,
            status: document.status || undefined,
            createdAt: document.createdAt || undefined,
            updatedAt: document.updatedAt || undefined
        }
    });
    return newDocument;
}

const updateDocument = async (document: IDocument) => {
    const updatedDocument = await prisma.document.update({
        where: {
            id: document.id
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
            status: 1
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
            status: 0
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

export {
    getDocuments,
    getDisabledDocuments,
    getDocumentsByScholarId,
    getDocumentsByType,
    getDocumentsBySaved,
    getDocumentById,
    createDocument,
    updateDocument,
    enableDocument,
    disableDocument,
    deleteDocument
}