import { IUserRequest } from "../@types/IUserRequest";
import { AppDataSource } from "../database/data-source";
import { User } from "../entities/User";

class CreateUserServices {

    async execute({ name, email, admin } : IUserRequest) {
        const usersRepository = AppDataSource.getRepository(User);
        if (!email) {
            throw new Error("E-mail incorrect");
        }

        const userAlreadyExists = await usersRepository.findOneBy({email:email});
        
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        })

        await usersRepository.save(user)

        return user;
    }

}

export { CreateUserServices };