import { AppDataSource } from "../database/data-source"
import { Compliment } from "../entities/Compliment.entity"

class ListUserSendComplimentsService {

    async execute(user_id: string) {
        const complimentsRepositories = AppDataSource.getRepository(Compliment)

        const compliments = await complimentsRepositories.find({
            where: { user_sender: user_id }
        });

        return compliments;
    }
}

export { ListUserSendComplimentsService }