interface IUser {
    id?: number;
    email: string;
    password: string;
    roleId?: number;
    statusId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default IUser;