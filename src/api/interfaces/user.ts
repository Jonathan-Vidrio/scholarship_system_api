interface User {
    id?: number;
    email: string;
    password: string;
    roleId?: number;
    statusId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default User;