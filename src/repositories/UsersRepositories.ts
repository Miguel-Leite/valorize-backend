import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User.entity';

@EntityRepository(User)
class UsersRepositories extends Repository<User>{}

export { UsersRepositories };