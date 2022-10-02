import { Request, Response } from "express";
import { CreateTagServices } from "../services/CreateTagService";



class CreateTagController{
    

    async handle (request: Request, response: Response) {
        const createTagService = new CreateTagServices();
        const { name } = request.body;

        const tag = await createTagService.execute(name)

        return response.json(tag)
    }
}

export { CreateTagController }