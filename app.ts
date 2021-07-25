import dotenv  from 'dotenv';
import Server from './src/models/serve';
import express from 'express';

const app = express();
app.use(express.json());

//configura a porta
dotenv.config();

const server = new Server();
server.listen();


