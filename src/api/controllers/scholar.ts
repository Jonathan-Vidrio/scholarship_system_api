import { Request, Response, NextFunction } from "express";
import * as scholarService from "../services/scholar";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const scholars = await scholarService.getScholars();
        res.status(200).json({ data: scholars });
    } catch (error) {
        next(error);
    }
}

const getDisabled = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const scholars = await scholarService.getDisabledScholars();
        res.status(200).json({ data: scholars });
    } catch (error) {
        next(error);
    }
}

const getByFilter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { filter } = req.params;
        const scholars = await scholarService.getScholarByFilter(filter);
        res.status(200).json({ data: scholars });
    } catch (error) {
        next(error);
    }
}

const getByTutorId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { tutorId } = req.params;
        const scholar = await scholarService.getScholarsByTutorId(parseInt(tutorId));
        res.status(200).json({ data: scholar });
    } catch (error) {
        next(error);
    }
}

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const scholar = await scholarService.getScholar(parseInt(id));
        res.status(200).json({ data: scholar });
    } catch (error) {
        next(error);
    }
}

const getByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.params;
        const scholar = await scholarService.getScholarByUserId(parseInt(userId));
        res.status(200).json({ data: scholar });
    } catch (error) {
        next(error);
    }
}

const getByCurp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { curp } = req.params;
        const scholar = await scholarService.getScholarByCurp(curp);
        res.status(200).json({ data: scholar });
    } catch (error) {
        next(error);
    }
}

const post = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req;
        const scholar = await scholarService.createScholar(body);
        res.status(200).json({ data: scholar });
    } catch (error) {
        next(error);
    }
}

const put = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const scholar = await scholarService.updateScholar(Number(id), body);
        res.status(200).json({ data: scholar });
    } catch (error) {
        next(error);
    }
}

const enable = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const scholar = await scholarService.enableScholar(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const disable = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const scholar = await scholarService.disableScholar(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await scholarService.removeScholar(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

export {
    getAll,
    getDisabled,
    getByFilter,
    getByTutorId,
    getById,
    getByUserId,
    getByCurp,
    post,
    put,
    enable,
    disable,
    remove
}