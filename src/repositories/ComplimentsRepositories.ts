import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliment.entity";


EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {};

export { ComplimentsRepositories };