import { AppDataSource } from "../database/data-source";
import { Tag } from "../entities/Tag.entity";



class ListTagsService {

    async execute() {
        const tagsRepositories = AppDataSource.getRepository(Tag);

        const tags = await tagsRepositories.find();
        // let tags = await tagsRepositories.find();
        // tags = tags.map(tag => ({...tag, nameCustom: `#${tag.name}`}))
        return tags;
    }

}

export { ListTagsService };