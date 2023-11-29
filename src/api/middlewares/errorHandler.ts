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

    } else if (err instanceof Error) {
        switch (err.message) {
            case "Password does not match":
                statusCode = 401;
                message = err.message;
                break;
            case "User not found":
                statusCode = 404;
                message = err.message;
                break;
            case "Tutor not found":
                statusCode = 404;
                message = err.message;
                break;
            case "Scholar not found":
                statusCode = 404;
                message = err.message;
                break;
            case "User already exists":
                statusCode = 409;
                message = err.message;
                break;
            case "Tutor already exists":
                statusCode = 409;
                message = err.message;
                break;
            case "Scholar already exists":
                statusCode = 409;
                message = err.message;
                break;
            case "Worker not found":
                statusCode = 404;
                message = err.message;
                break;
            case "Worker already exists":
                statusCode = 409;
                message = err.message;
                break;
            case "User is not a tutor":
                statusCode = 401;
                message = err.message;
                break;
            case "User is not a scholar":
                statusCode = 401;
                message = err.message;
                break;
            case "User is not an admin":
                statusCode = 401;
                message = err.message;
                break;
            case "User is not a worker":
                statusCode = 401;
                message = err.message;
                break;
            case "Unauthorized":
                statusCode = 401;
                message = err.message;
                break;
            case "jwt must be provided":
                statusCode = 401;
                message = err.message;
                break;
            case "jwt expired":
                statusCode = 401;
                message = err.message;
                break;
            case "jwt malformed":
                statusCode = 401;
                message = err.message;
                break;
            case "jwt signature is required":
                statusCode = 401;
                message = err.message;
                break;
            case "jwt invalid":
                statusCode = 401;
                message = err.message;
                break;
            default:
                message = err.message;
                break;
        }
    }

    res.status(statusCode).json({ message });
};

export default errorHandler;