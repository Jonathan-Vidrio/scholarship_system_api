interface ITutor {
    id?: number;
    workerId: number;
    name: string;
    firsLastName: string;
    secondLastName?: string;
    curp: string;
    status?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default ITutor;