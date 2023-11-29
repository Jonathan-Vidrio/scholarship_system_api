import { Request, Response, NextFunction } from "express";
import * as tutorService from "../services/tutor";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tutors = await tutorService.getTutors();
        res.status(200).json(tutors);
    } catch (error) {
        next(error);
    }
}

const getByFilter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { filter } = req.params;
        const tutors = await tutorService.getTutorByFilter(filter);
        res.status(200).json(tutors);
    } catch (error) {
        next(error);
    }

}

const getDisabled = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tutors = await tutorService.getDisabledTutors();
        res.status(200).json(tutors);
    } catch (error) {
        next(error);
    }
}

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const tutor = await tutorService.getTutorById(Number(id));
        res.status(200).json(tutor);
    } catch (error) {
        next(error);
    }
}

const getByWorkerId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { workerId } = req.params;
        const tutor = await tutorService.getTutorByWorkerId(workerId);
        res.status(200).json(tutor);
    } catch (error) {
        next(error);
    }
}

const getByCurp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { curp } = req.params;
        const tutor = await tutorService.getTutorByCurp(curp);
        res.status(200).json(tutor);
    } catch (error) {
        next(error);
    }
}

const post = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req;
        const tutor = await tutorService.createTutor(body);
        res.status(201).json(tutor);
    } catch (error) {
        next(error);
    }
}

const put = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const tutor = await tutorService.updateTutor(Number(id), body);
        res.status(200).json(tutor);
    } catch (error) {
        next(error);
    }
}

const enable = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await tutorService.enableTutor(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const disable = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await tutorService.disableTutor(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await tutorService.deleteTutor(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

export {
    getAll,
    getByFilter,
    getDisabled,
    getById,
    getByWorkerId,
    getByCurp,
    post,
    put,
    enable,
    disable,
    remove
}