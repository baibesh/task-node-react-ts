import {Contact} from "../models";
import {getRepository} from "typeorm";

export interface IContactPayload {
    name: string;
}

export const createContact = async (payload: IContactPayload): Promise<Contact> => {
    const contactRepository = getRepository(Contact);
    const contact = new Contact();
    return contactRepository.save({
        ...contact,
        ...payload
    });
}

export const getContacts = async (): Promise<Array<Contact>> => {
    const contactRepository = getRepository(Contact);
    return contactRepository.find({
        take: 100
    });
}

export const getContact = async (id: number): Promise<Contact | null> => {
    const contactRepository = getRepository(Contact);
    const contact = await contactRepository.findOne({ id: id });
    if (!contact) return null;
    return contact;
}

export const generateContacts = async () => {
    for (let i=1; i < 10100; i++) {
        const generateName = Math.random().toString(36).substring(3);
        console.log('Generate name = ' + generateName);
        await createContact({name: generateName})
    }
}
