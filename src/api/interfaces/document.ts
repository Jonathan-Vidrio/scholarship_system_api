interface IDocument {
    id?: number;
    scholarId: number;
    type: number;
    saved?: Date;
    url: string;
    status?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default IDocument;