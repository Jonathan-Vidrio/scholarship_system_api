import IUser from "../interfaces/user";
import { getUserByEmail } from "./user"
import { verify } from "../../utils/bcryptHandler";
import { generateToken, verifyToken } from "../../utils/jwtHandler";

const login = async (user: IUser) => {
    const userFound = await getUserByEmail(user.email);
    if (userFound) {
        const passwordMatch = await verify(user.password, userFound.password);
        if (passwordMatch) {
            const token = generateToken(userFound);
            return token;
        }
    }
}

export {
    login
}