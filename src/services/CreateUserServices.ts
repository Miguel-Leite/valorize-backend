import { IUserRequest } from "../@types/IUserRequest";
import { AppDataSource } from "../database/data-source";
import { User } from "../entities/User.entity";
import { hash } from 'bcryptjs'

class CreateUserServices {

    async all() {
        const usersRepository = AppDataSource.getRepository(User);

        const user = await usersRepository.find();

        return user;
    }

    async execute({ name, email, admin = false, password } : IUserRequest) {
        const usersRepository = AppDataSource.getRepository(User);
        if (!email) {
            throw new Error("E-mail incorrect");
        }

        const userAlreadyExists = await usersRepository.findOneBy({email:email});
        
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password,8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        })

        await usersRepository.save(user)

        return user;
    }

}

export { CreateUserServices };