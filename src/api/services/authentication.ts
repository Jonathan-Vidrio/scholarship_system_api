import User from "../interfaces/user";
import {createUser, getUserByEmail} from "./user"
import { verify } from "../../utils/bcryptHandler";
import { generateToken, verifyToken } from "../../utils/jwtHandler";

const login = async (user: User) => {
    const { email, password } = user;
    const userFound = await getUserByEmail(email);
    if (userFound) {
        const passwordMatch = await verify(password, userFound.password);
        if (passwordMatch) {
            const token = generateToken(userFound);
            const data = {
                role: userFound.roleId,
                token: token
            }
            return data;
        } else {
            throw new Error("Password does not match");
        }
    } else {
        throw new Error("User not found");
    }
}

const register = async (user: User) => {
    const userCreated = await createUser(user);
    const token = generateToken(userCreated);
    const data = {
        role: userCreated.roleId,
        token: token
    }
    return data;
}

export {
    login,
    register
}