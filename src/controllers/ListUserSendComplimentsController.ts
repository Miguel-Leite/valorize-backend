import { Request, Response } from "express";
import {  } from "../services/ListUserReceiveComplimentsService";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";


class ListUserSendComplimentsController {

    async handle(request: Request, response: Response) {
        const listUserSendComplimentsService = new ListUserSendComplimentsService();
        const { user_id } = request;

        const compliments = await listUserSendComplimentsService.execute(user_id);

        return response.json({
            data: compliments
        });
    }
}


export { ListUserSendComplimentsController };