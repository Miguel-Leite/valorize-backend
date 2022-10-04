import { IComplimentRequest } from "../@types/IComplimentRequest";
import { AppDataSource } from "../database/data-source";
import { Compliment } from "../entities/Compliment.entity";
import { User } from "../entities/User.entity";


class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
        const complimentsRepositories = AppDataSource.getRepository(Compliment);
        const usersRepository = AppDataSource.getRepository(User);

        const userReceiverExists = await usersRepository.findOneBy({id:user_receiver})

        if (user_sender === user_receiver) {
            throw new Error("Incorrect User Receiver!");    
        }

        if (!userReceiverExists) {
            throw new Error("User Receiver does not exists!");            
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        await complimentsRepositories.save(compliment)

        return compliment;
    }
};

export { CreateComplimentService }