import { Request, Response, NextFunction } from "express";
import * as userService from "../services/user";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json({ data: users });
    } catch (error) {
        next(error);
    }
}

const getByRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { roleId } = req.params;
        const users = await userService.getUsersByRole(Number(roleId));
        res.status(200).json({ data: users });
    } catch (error) {
        next(error);
    }
}

const getByFilter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { filter } = req.params;
        const users = await userService.getUsersByFilter(filter);
        res.status(200).json({ data: users });
    } catch (error) {
        next(error);
    }
}

const getDisabled = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.getDisabledUsers();
        res.status(200).json({ data: users });
    } catch (error) {
        next(error);
    }
}

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(Number(id));
        res.status(200).json({ data: user });
    } catch (error) {
        next(error);
    }
}

const getByEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.params;
        const user = await userService.getUserByEmail(email);
        res.status(200).json({ data: user });
    } catch (error) {
        next(error);
    }
}

const post = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req;
        const user = await userService.createUser(body);
        res.status(201).json({ data: user });
    } catch (error) {
        next(error);
    }
}

const put = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req;
        const user = await userService.updateUser(body);
        res.status(200).json({ data: user });
    } catch (error) {
        next(error);
    }
}

const enable = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await userService.enableUser(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const disable = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await userService.disableUser(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await userService.deleteUser(Number(id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

export {
    getAll,
    getByRole,
    getByFilter,
    getDisabled,
    getById,
    getByEmail,
    post,
    put,
    enable,
    disable,
    remove
}