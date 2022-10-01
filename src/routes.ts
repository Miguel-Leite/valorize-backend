import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUsersControllers';

const router = Router()

const createUsersController = new CreateUserController(); 

router.post('/users',createUsersController.handle)

export { router }