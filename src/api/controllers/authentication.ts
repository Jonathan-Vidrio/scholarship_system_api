import { Request, Response, NextFunction } from "express";
import {login, register} from "../services/authentication";
import { getScholarByTutorWorkerIdAndCurp } from "../services/scholar";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body;
        const data = await register(user);
        res.status(201).json({ data: data });
    } catch (error) {
        next(error);
    }
}

const signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body;
        const data = await login(user);
        res.status(200).json({ data: data });
    } catch (error) {
        next(error);
    }
}

const verifyScholar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { workerId, curp } = req.body;
        const scholar = await getScholarByTutorWorkerIdAndCurp(workerId, curp);
        res.status(200).json({ data: scholar });
    } catch (error) {
        next(error);
    }
}

export {
    signUp,
    signIn,
    verifyScholar
}