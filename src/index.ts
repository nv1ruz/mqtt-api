import dotenv from 'dotenv';
dotenv.config();
import { Server } from "./app";


const server = new Server();
server.start();