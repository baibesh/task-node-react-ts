import {Body, Get, Path, Post, Route, Tags} from "tsoa";
import {Contact} from "../models";
import {createContact, getContact, getContacts, IContactPayload, generateContacts} from "../repositories/contact";

@Route("contact")
@Tags("Контакты")
export default class ContactController {
    @Get('')
    public async getContacts(): Promise<Array<Contact>> {
        return getContacts();
    }

    @Post('')
    public async createContact(@Body() body: IContactPayload): Promise<Contact> {
        return createContact(body);
    }

    @Get('/generate')
    public async generateContacts() {
        return generateContacts();
    }
}
