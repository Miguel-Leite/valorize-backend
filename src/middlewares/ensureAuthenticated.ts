import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import { IPayload } from "../@types/IPayload";

export function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {
    
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [,token] = authToken.split(' ');

    try {
        const { sub } = verify(token, '5b6e32db33c13e3d773c7718aed2f2d9') as IPayload;

        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end()
    }
    
}