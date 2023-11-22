import { sign, verify } from "jsonwebtoken";
import { SECRET } from "./constants";
import IUser from "../api/interfaces/user";

const generateToken = (user: IUser) => {
    const token = sign(user, SECRET, {
        // expiresIn: 1h
        expiresIn: 60 * 60 * 24
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