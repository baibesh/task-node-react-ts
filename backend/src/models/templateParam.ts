import {Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Template} from "./template";

@Entity()
export class TemplateParam {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({nullable: false})
    templateId!: number;
    @ManyToOne(_type => Template, (template: Template) => template.params)
    template!: Template;

    @Column()
    nameParam!: string;

    @Column()
    typeParam!: string;
}
