import { Router } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUsersControllers';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router()

const createUsersController = new CreateUserController(); 
const createTagController = new CreateTagController()

router.post('/users',createUsersController.handle)
router.post('/tags', ensureAdmin, createTagController.handle)

export { router }