import {TemplateParam} from "../models";
import {getRepository} from "typeorm";

export interface IParamsPayload {
    templateId: number;
    nameParam: string;
    typeParam: string;
}

export const createParams = async (payload: IParamsPayload): Promise<TemplateParam> => {
    const paramsRepository = getRepository(TemplateParam);
    const params = new TemplateParam();
    return paramsRepository.save({
        ...params,
        ...payload
    })
}

export const getParams = async (): Promise<Array<TemplateParam>> => {
    const paramsRepository = getRepository(TemplateParam);
    return paramsRepository.find();
}
