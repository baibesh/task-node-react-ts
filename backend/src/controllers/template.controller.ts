import {Body, Get, Post, Route, Tags} from "tsoa";
import {createTemplate, getTemplates, ITemplatePayload} from "../repositories/template";
import {Template} from "../models";

@Route("template")
@Tags("Шаблоны")
export default class TemplateController {
    @Post('')
    public async createTemplate(@Body() body: ITemplatePayload): Promise<Template> {
        return createTemplate(body);
    }

    @Get('')
    public async getTemplates(): Promise<Array<Template>> {
        return getTemplates();
    }

}
