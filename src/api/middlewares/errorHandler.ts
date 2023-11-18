import { Request, Response, NextFunction } from 'express';
import {PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    let statusCode = 500;
    let message = "Internal Server Error";

    const argumentMatch = err.message.match(/Argument `(\w+)`/);
    const argument = argumentMatch ? argumentMatch[1] : 'unknown';

    if (err instanceof PrismaClientKnownRequestError) {
        switch (err.code) {
            case "P2001":
                statusCode = 404;
                message = "Record not found.";
                break;
            case "P2002":
                statusCode = 409;
                const fields = Array.isArray(err.meta?.target) ? err.meta?.target.join(', ') : 'unknown';
                message = `Unique constraint failed on the fields: ${fields}`;
                break;
            case "P2006":
                statusCode = 400;
                message = "Invalid data input: " + err.message;
                break;
            case "P2025":
                statusCode = 404;
                message = "An operation failed because a required record was not found.";
                break;
            default:
                message = "Prisma error: " + err.message;
                break;
        }
    } else if (err instanceof PrismaClientValidationError) {
        statusCode = 400;
        message = `Invalid value for argument: ${argument}`;
    }

    res.status(statusCode).json({ message });
};

export default errorHandler;