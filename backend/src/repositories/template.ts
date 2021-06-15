import {Template, TemplateParam} from "../models";
import {getRepository} from "typeorm";
import fs from "fs";

export interface ITemplatePayload {
    name: string;
    content: string;
}

interface ITemplateCreate {
    name: string;
    path: string;
}

export const createTemplate = async (payload: ITemplatePayload): Promise<Template> => {
    const templateRepository = getRepository(Template);
    const template = new Template();

    const path = 'src/templates/' + payload.name + '.txt';
    fs.writeFile(path, payload.content, (err) => {
        if (err) throw err;
    })
    const templateCreate: ITemplateCreate = {
        name: payload.name,
        path: path
    }
    return templateRepository.save({
        ...template,
        ...templateCreate
    })
}

export const getTemplates = async (): Promise<Array<Template>> => {
    const templateRepository = getRepository(Template);
    return templateRepository.find({
        relations: ['params']
    });
}
