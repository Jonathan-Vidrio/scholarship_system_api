interface IUser {
    id?: number;
    email: string;
    password: string;
    roleId?: number;
    status?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default IUser;