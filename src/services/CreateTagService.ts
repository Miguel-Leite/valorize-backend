import { AppDataSource } from "../database/data-source";
import { Tag } from "../entities/Tag.entity";




export class CreateTagServices {

    async execute (name: string) {
        const tagasRepositories = AppDataSource.getRepository(Tag);

        if (!name) {
            throw new Error("Incorrect name!");
        }

        const tagAlreadyExists = await tagasRepositories.findOneBy({name:name})

        if (tagAlreadyExists) {
            throw new Error("Tag already exists!");
        }

        const tag = tagasRepositories.create({name: name});

        await tagasRepositories.save(tag)

        return tag;
    }
}