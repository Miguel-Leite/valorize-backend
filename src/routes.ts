import { Router } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUsersControllers';

const router = Router()

const createUsersController = new CreateUserController(); 
const createTagController = new CreateTagController()

router.post('/users',createUsersController.handle)
router.post('/tags',createTagController.handle)

export { router }