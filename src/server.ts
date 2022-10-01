import {AppDataSource} from './database/data-source';
import 'reflect-metadata';
import express, { response } from 'express';
import { router } from './routes';

const app = express();

app.use(express.json())
app.use(router);

AppDataSource.initialize().then(()=> {
    console.log("Database connected!")
})

app.listen(3000,()=> console.log("Server is run"));