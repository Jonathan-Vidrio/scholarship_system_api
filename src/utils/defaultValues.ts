import IStatusType from "../api/interfaces/statusType";
import IUser from "../api/interfaces/user";
import IRole from "../api/interfaces/role";
import IEducationLevel from "../api/interfaces/educationLevel";

const statusTypes : IStatusType[] = [
    {
        id: 0,
        name: "disabled",
        description: "Disabled",
    },
    {
        name: "enabled",
        description: "Enabled",
    },
    {
        name: "pending",
        description: "Pending",
    },
];

const roles: IRole[] = [
    {
        name: "superAdmin",
        description: "Super Administrator"
    },
    {
        name: "admin",
        description: "Administrator",
    },
    {
        name: "user",
        description: "User",
    },
];

const users: IUser[] = [
    {
        email: "superadmin@gmail.com",
        password: "123456",
        roleId: 1,
        statusId: 1
    }
];

const educationLevels: IEducationLevel[] = [
    {
        name: "primary",
        description: "Primary",
    },
    {
        name: "secondary",
        description: "Secondary",
    },
    {
        name: "tertiary",
        description: "Tertiary",
    },
    {
        name: "university",
        description: "University",
    }
];

export {
    statusTypes,
    roles,
    users,
    educationLevels,
}