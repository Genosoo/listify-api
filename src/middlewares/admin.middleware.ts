import { Request, Response, NextFunction } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    // Assuming user role is attached to res.locals by the protect middleware
    const user = res.locals.user;

    if (user.role !== 'Admin') {
        return res.status(403).send({ message: 'Access denied' });
    }

    next();
};
