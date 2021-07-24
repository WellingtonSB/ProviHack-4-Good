import dotenv  from 'dotenv';
import Server from './src/models/serve';

//configuarar dot.env
dotenv.config();

const server = new Server();

server.listen();

