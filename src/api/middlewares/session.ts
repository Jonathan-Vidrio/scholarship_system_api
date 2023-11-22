import { Request, Response, NextFunction } from 'express';
import { verifyToken } from "../../utils/jwtHandler";
import IUser from "../interfaces/user";
import {getRoles} from "../services/role";

const isSession = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;
        const token = authorization?.split(" ")[1];
        const decoded = verifyToken(token!);
        const user: IUser = decoded as IUser;
        console.log(user);
        next();
    } catch (error) {
        next(error);
    }
}

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;
        const token = authorization?.split(" ")[1];
        const decoded  = verifyToken(token!);
        const user: IUser = decoded as IUser;
        const roles = await getRoles();
        for (const role of roles) {
            if (role.name === "admin" || role.name === "superAdmin") {
                if (role.id === user.roleId) {
                    next();
                    break;
                } else {
                    throw new Error("unauthorized");
                }
            }
        }
    } catch (error) {
        next(error);
    }
}

export {
    isSession,
    isAdmin
}