import {AppDataSource} from './database/connection';
import 'reflect-metadata';
import './database';
import express, { response } from 'express';

const app = express();

AppDataSource.initialize().then(()=> {
    console.log("Banco de dados conectado")
})

app.listen(3000,()=> console.log("Server is run"));