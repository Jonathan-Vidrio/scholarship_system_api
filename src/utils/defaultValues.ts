import StatusType from "../api/interfaces/statusType";
import User from "../api/interfaces/user";
import Role from "../api/interfaces/role";
import EducationLevel from "../api/interfaces/educationLevel";

const statusTypes : StatusType[] = [
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

const roles: Role[] = [
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

const users: User[] = [
    {
        email: "superadmin@gmail.com",
        password: "123456",
        roleId: 1,
        statusId: 1
    }
];

const educationLevels: EducationLevel[] = [
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