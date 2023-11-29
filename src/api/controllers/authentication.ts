import { Request, Response, NextFunction } from "express";
import { login } from "../services/authentication";
import { createUser } from "../services/user";
import { getScholarByTutorWorkerIdAndCurp } from "../services/scholar";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body;
        const userCreated = await createUser(user);
        res.status(201).json({ user: userCreated });
    } catch (error) {
        next(error);
    }
}

const signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body;
        const token = await login(user);
        res.status(200).json({ token: token });
    } catch (error) {
        next(error);
    }
}

const verifyScholar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { workerId, curp } = req.body;
        const scholar = await getScholarByTutorWorkerIdAndCurp(workerId, curp);
        res.status(200).json({ scholar: scholar });
    } catch (error) {
        next(error);
    }
}

export {
    signUp,
    signIn,
    verifyScholar
}