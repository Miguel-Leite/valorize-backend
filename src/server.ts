import 'reflect-metadata';
import './database';
import express, { response } from 'express';

const app = express();


app.listen(3000,()=> console.log("Server is run"));