import { Request, Response, NextFunction } from 'express';

export function errorMiddleware (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(err);

    res.status(500).json({
        status: 'error',
        message: 'Quelque chose s\'est mal passé',
    });
}