import 'reflect-metadata'
import { createConnection} from 'typeorm';
import express, {Application} from 'express';
import morgan from "morgan";
import swaggerUi from 'swagger-ui-express';
import cron from 'node-cron';
import cors from 'cors';

import routers from './routes';
import dbConfig from './config/database';
import MessageController from './controllers/message.controller';


const PORT = process.env.PORT || 7000;

cron.schedule('* * * * *', () => {
    const message = new MessageController();
    message.sendMessage().then();
})

const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'))

app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: '/swagger.json',
        }
    })
)

app.use(cors())

app.use(routers);

createConnection(dbConfig)
    .then((_connection: any) => {
        app.listen(PORT, () => {
            console.log('Server is running on port ', PORT)
        })
    })
    .catch((err: any) => {
        console.log('Unable to connect to db', err);
        process.exit(1);
    })

