interface Scholar {
    id?: number;
    userId?: number;
    tutorId: number;
    name?: string;
    firstLastName?: string;
    secondLastName?: string;
    curp: string;
    birthDate?: Date;
    educationLevelId?: number;
    scholarshipId?: number;
    statusId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default Scholar;