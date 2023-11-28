import { Request, Response, NextFunction } from "express";
import { login } from "../services/authentication";
import { createUser } from "../services/user";
import { getScholarByTutorIdAndCurp } from "../services/scholar";

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
        const tutorId = req.params.tutorId;
        const curp = req.params.curp;
        const scholar = await getScholarByTutorIdAndCurp(parseInt(tutorId), curp);
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