import {Body, Get, Post, Query, Route, Tags} from "tsoa";
import {Message} from "../models";
import {createMessage, getMessages, IMessageOptions, IMessagePayload, sendMessage} from "../repositories/message";

@Route('message')
@Tags('Сообщение')
export default class MessageController {
    @Get('')
    public async getMessages(
    ): Promise<Array<Message>> {
        return getMessages();
    }

    @Post('')
    public async createMessage(@Body() body: IMessagePayload): Promise<Message> {
        return createMessage(body);
    }

    public async sendMessage() {
        return sendMessage();
    }
}
