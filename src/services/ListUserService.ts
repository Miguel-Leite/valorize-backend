import { AppDataSource } from "../database/data-source"
import { User } from "../entities/User.entity"
import { classToPlain } from 'class-transformer';

class ListUserService {
    async execute(){
        const usersRepositories = AppDataSource.getRepository(User)

        const users = await usersRepositories.find();

        return classToPlain(users);
    } 
}

export { ListUserService }