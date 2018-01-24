import { RestServer } from './models/server.rest';
import * as express from "express";

const port :number = 3000 || parseInt(process.env.PORT);

const server = RestServer.start(express(), port);
