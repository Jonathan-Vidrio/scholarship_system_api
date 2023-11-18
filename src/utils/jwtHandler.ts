import { sign, verify } from "jsonwebtoken";
import { SECRET } from "./constants";
import IUser from "../api/interfaces/user";

const generateToken = (user: IUser) => {
    const token = sign(user, SECRET, {
        expiresIn: 86400
    });
    return token;
}

const verifyToken = (token: string) => {
    const decoded = verify(token, SECRET);
    return decoded;
}

export {
    generateToken,
    verifyToken
}