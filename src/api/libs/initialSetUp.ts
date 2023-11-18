import IRole from "../interfaces/role";
import IEducationLevel from "../interfaces/educationLevel";
import { createRole } from "../services/role";
import { createEducationLevel } from "../services/educationLevel";

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

const initialSetUp = async () => {
    try {
        for (let i = 0; i < roles.length; i++) {
            await createRole(roles[i]);
        }

        for (let i = 0; i < educationLevels.length; i++) {
            await createEducationLevel(educationLevels[i]);
        }
    } catch (error) {
        console.log(error);
    }
}

export default initialSetUp;