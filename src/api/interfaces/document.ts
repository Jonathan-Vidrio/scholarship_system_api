interface IDocument {
    id?: number;
    scholarId: number;
    typeId: number;
    saved?: Date;
    url: string;
    statusId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default IDocument;