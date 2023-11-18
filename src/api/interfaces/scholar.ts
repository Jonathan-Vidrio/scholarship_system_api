interface IScholar {
    id?: number;
    userId: number;
    tutorId: number;
    name: string;
    firstLastName: string;
    secondLastName?: string;
    curp: string;
    birthDate: Date;
    educationLevelId: number;
    scholarshipId: number;
    status?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default IScholar;