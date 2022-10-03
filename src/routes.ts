import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUsersControllers';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router()

const createUsersController = new CreateUserController(); 
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/users', createUsersController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', createComplimentController.handle);

export { router }