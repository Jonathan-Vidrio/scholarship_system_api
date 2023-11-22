interface IScholarship {
    id?: number;
    name: string;
    description?: string;
    amount: number;
    statusId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default IScholarship;