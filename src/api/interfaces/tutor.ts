interface Tutor {
    id?: number;
    workerId: string;
    name: string;
    firstLastName: string;
    secondLastName?: string;
    curp: string;
    statusId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default Tutor;