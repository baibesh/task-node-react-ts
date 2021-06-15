import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class CronSettings {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    value!: string;

}
