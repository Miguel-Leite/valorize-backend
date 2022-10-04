import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { User } from "../entities/User.entity";


export async function ensureAdmin (request: Request, response: Response, next: NextFunction) {
    const { user_id } = request;
    const usersRepositories = AppDataSource.getRepository(User)

    const { admin } = await usersRepositories.findOneBy({id:user_id}) 

    if (admin) {
        return next();
    }

    return response.status(401).json({
        "error": "Unauthorized"
    });
}