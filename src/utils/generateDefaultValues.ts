import { statusTypes, roles, users, educationLevels } from "./defaultValues";
import { getStatusTypes, createStatusType } from "../api/services/statusType";
import { getRoles, createRole } from "../api/services/role";
import { getUsers, createUser } from "../api/services/user";
import {  getEducationLevels, createEducationLevel } from "../api/services/educationLevel";

const generateDefaultStatusTypes = async () => {
    try {
        const statusTypesFound = await getStatusTypes();
        if (statusTypesFound.length > 0) return;
        for (let i = 0; i < statusTypes.length; i++) {
            const createdStatusType = await createStatusType(statusTypes[i]);
            console.log(createdStatusType);
        }
    } catch (error) {
        console.log(error);
    }
}

const generateDefaultRoles = async () => {
    try {
        const rolesFound = await getRoles();
        if (rolesFound.length > 0) return;
        for (let i = 0; i < roles.length; i++) {
            const createdRole = await createRole(roles[i]);
            console.log(createdRole);
        }
    } catch (error) {
        console.log(error);
    }
}

const generateDefaultUsers = async () => {
    try {
        const usersFound = await getUsers();
        if (usersFound.length > 0) return;
        for (let i = 0; i < users.length; i++) {
            const createdUser = await createUser(users[i]);
            console.log(createdUser);
        }
    } catch (error) {
        console.log(error);
    }
}

const generateDefaultEducationLevels = async () => {
    try {
        const educationLevelsFound = await getEducationLevels();
        if (educationLevelsFound.length > 0) return;
        for (let i = 0; i < educationLevels.length; i++) {
            const createdEducationLevel = await createEducationLevel(educationLevels[i]);
            console.log(createdEducationLevel);
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    generateDefaultStatusTypes,
    generateDefaultRoles,
    generateDefaultUsers,
    generateDefaultEducationLevels
}