interface IScholarship {
    id?: number;
    name: string;
    description?: string;
    amount: number;
    status?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default IScholarship;