import { Request, Response, NextFunction } from "express";
import * as educationLevelService from "../services/educationLevel";

const getEducationLevels = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const educationLevels = await educationLevelService.getEducationLevels();
        res.status(200).json(educationLevels);
    } catch (error) {
        next(error);
    }
}

const getEducationLevel = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const educationLevel = await educationLevelService.getEducationLevel(Number(id));
        res.status(200).json(educationLevel);
    } catch (error) {
        next(error);
    }
}

const postEducationLevel = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req;
        const educationLevel = await educationLevelService.createEducationLevel(body);
        res.status(201).json(educationLevel);
    } catch (error) {
        next(error);
    }
}

const putEducationLevel = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const educationLevel = await educationLevelService.updateEducationLevel(Number(id), body);
        res.status(200).json(educationLevel);
    } catch (error) {
        next(error);
    }
}

const enableEducationLevel = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await educationLevelService.enableEducationLevel(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const disableEducationLevel = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await educationLevelService.disableEducationLevel(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const deleteEducationLevel = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await educationLevelService.deleteEducationLevel(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

export {
    getEducationLevels,
    getEducationLevel,
    postEducationLevel,
    putEducationLevel,
    enableEducationLevel,
    disableEducationLevel,
    deleteEducationLevel
}