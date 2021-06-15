import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Contact, Template} from "./index";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({nullable: false})
    contactId!: number;
    @ManyToOne(_type => Contact, (contact: Contact) => contact.message)
    contact!: Contact;

    @Column({nullable: false})
    templateId!: number;
    @ManyToOne(_type => Template, (template: Template) => template.message)
    template!: Template;

    @Column({
        type: "date"
    })
    sendDate!: string;

    @Column({
        type: "time"
    })
    sendTime!: string;

    @Column({
        type: "text"
    })
    text!: string;

    @CreateDateColumn({
        type: "timestamp",
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt!: string;

    @Column()
    status!: string;
}
