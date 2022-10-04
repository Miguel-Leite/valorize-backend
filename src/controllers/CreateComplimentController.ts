import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";



class CreateComplimentController {

    async handle (request: Request, response: Response) {
        const createComplimentService = new CreateComplimentService();
        const { tag_id, user_receiver, message } = request.body;
        const { user_id } = request;

        const compliment = await createComplimentService.execute({tag_id, user_sender: user_id, user_receiver, message})
        
        return response.json(compliment)
    }

}

export { CreateComplimentController }