import {Contact, Message, Template} from "../models";
import {EntityRepository, AbstractRepository, getRepository} from "typeorm";

export enum IMessageStatus {
    NEW,
    DONE
}

export interface IMessageOptions {
    status?: string;
    createdAt?: string;
}

export interface IMessagePayload {
    contactId: number;
    templateId: number;
    text: string;
    sendDate: string;
    sendTime: string;
    status: string;
}

export const createMessage = async (payload: IMessagePayload): Promise<Message> => {
    const messageRepository = getRepository(Message);
    const message = new Message();
    return messageRepository.save({
        ...message,
        ...payload
    })
}

export const getMessages = async (): Promise<Array<Message>> => {
    const messageRepository = getRepository(Message);
    return messageRepository.find({
        relations: ['template', 'contact']
    });
}

export const sendMessage = async () => {
    const messageRepository = getRepository(Message);
    console.log(new Date().getDay())
}
