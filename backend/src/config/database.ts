import {ConnectionOptions} from 'typeorm';
import {Contact, CronSettings, Message, Template, TemplateParam} from "../models";

const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "admin",
    password: process.env.POSTGRES_PASSWORD || "qwerty",
    database: process.env.POSTGRES_DB || "backend",
    entities: [Contact, Template, TemplateParam, Message, CronSettings],
    synchronize: true
};

export default config;
