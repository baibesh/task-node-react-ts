import {Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TemplateParam} from "./templateParam";
import {Message} from "./message";

@Entity()
export class Template {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true,
        nullable: false
    })
    name!: string;

    @Column({
        unique: true,
        nullable: false
    })
    path!: string;

    @OneToMany(_type => TemplateParam, (params: TemplateParam) => params.template)
    params!: TemplateParam[];

    @OneToMany(_type => Message, (message: Message) => message.contact)
    message!: Message;
}
