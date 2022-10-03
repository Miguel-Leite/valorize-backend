import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {
    
    const token = request.headers.authorization;

    if (!token) {
        return response.status(401).end();
    }

    
    return next();
}