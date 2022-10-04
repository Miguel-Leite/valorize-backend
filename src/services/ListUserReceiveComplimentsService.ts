import { AppDataSource } from "../database/data-source"
import { Compliment } from "../entities/Compliment.entity"

class ListUserReceiveComplimentsService {

    async execute(user_id: string) {
        const complimentsRepositories = AppDataSource.getRepository(Compliment)

        const compliments = await complimentsRepositories.find({
            where: { user_receiver: user_id },
            relations: ['userSender', 'userReceiver','tag']
        });

        return compliments;
    }
}

export { ListUserReceiveComplimentsService }