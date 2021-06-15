import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Message} from "./message";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true,
        nullable: false,
    })
    name!: string;

    @OneToMany(_type => Message, (message: Message) => message.template)
    message!: Message;
}
