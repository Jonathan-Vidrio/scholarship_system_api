import IUser from "../interfaces/user";
import { getUserByEmail } from "./user"
import { verify } from "../../utils/bcryptHandler";
import { generateToken, verifyToken } from "../../utils/jwtHandler";

const login = async (user: IUser) => {
    const { email, password } = user;
    const userFound = await getUserByEmail(email);
    if (userFound) {
        const passwordMatch = await verify(password, userFound.password);
        if (passwordMatch) {
            const token = generateToken(userFound);
            return token;
        } else {
            throw new Error("Password does not match");
        }
    } else {
        throw new Error("User not found");
    }
}

export {
    login
}