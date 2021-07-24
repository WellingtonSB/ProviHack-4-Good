/* import dotenv  from 'dotenv';
import Server from './src/models/serve';

configuarar dot.env
dotenv.config();

const server = new Server();

server.listen();

config original
*/


import dotenv  from 'dotenv';
import Server from './src/models/serve';
import express from 'express';

const app = express();
app.use(express.json());

//configuarar dot.env
dotenv.config();

const server = new Server();
server.listen();


