import {Request, Response} from 'express'
import { CreateUserServices } from '../services/CreateUserServices';

class CreateUserController {

    async get (request: Request, response: Response) {
        const createUserService = new CreateUserServices();
        const users = await createUserService.all()
        return response.json({
            data: users
        })
    }

    async handle(request: Request, response: Response) {
        const { name, email, admin, password } = request.body;

        const createUserService = new CreateUserServices();

        const user = await createUserService.execute({ name, email, admin, password })

        return response.json(user)
    }
}

export { CreateUserController }