import { generateDefaultStatusTypes, generateDefaultRoles, generateDefaultUsers, generateDefaultEducationLevels } from "../../utils/generateDefaultValues";

const initialSetUp = async () => {
    try {
        await generateDefaultStatusTypes();
        await generateDefaultRoles();
        await generateDefaultUsers();
        await generateDefaultEducationLevels();
    } catch (error) {
        console.log(error);
    }
}

export default initialSetUp;