import { Request, Response, NextFunction } from "express";
import * as scholarshipService from "../services/scholarship";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const scholarships = await scholarshipService.getScholarships();
        res.status(200).json({ data: scholarships });
    } catch (error) {
        next(error);
    }
}

const getDisabled = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const scholarships = await scholarshipService.getDisabledScholarships();
        res.status(200).json({ data: scholarships });
    } catch (error) {
        next(error);
    }
}

const getByFilter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { filter } = req.params;
        const scholarships = await scholarshipService.getScholarshipsByFilter(filter);
        res.status(200).json({ data: scholarships });
    } catch (error) {
        next(error);
    }
}

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const scholarship = await scholarshipService.getScholarship(Number(id));
        res.status(200).json({ data: scholarship });
    } catch (error) {
        next(error);
    }
}

const post = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req;
        const scholarship = await scholarshipService.createScholarship(body);
        res.status(201).json({ data: scholarship });
    } catch (error) {
        next(error);
    }
}

const put = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const scholarship = await scholarshipService.updateScholarship(Number(id), body);
        res.status(200).json({ data: scholarship });
    } catch (error) {
        next(error);
    }
}

const enable = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const scholarship = await scholarshipService.enableScholarship(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const disable = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const scholarship = await scholarshipService.disableScholarship(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await scholarshipService.deleteScholarship(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

export {
    getAll,
    getDisabled,
    getByFilter,
    getById,
    post,
    put,
    enable,
    disable,
    remove
}