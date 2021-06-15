import {Body, Get, Post, Route, Tags} from "tsoa";
import {TemplateParam} from "../models";
import {createParams, getParams, IParamsPayload} from "../repositories/templateParam";

@Route('template-param')
@Tags('Параметры шаблона')
export default class TemplateParamController {
    @Get('')
    public async getTemplateParameters(): Promise<Array<TemplateParam>> {
        return getParams();
    }

    @Post('')
    public async createTemplateParameter(@Body() body: IParamsPayload): Promise<TemplateParam> {
        return createParams(body);
    }

}
