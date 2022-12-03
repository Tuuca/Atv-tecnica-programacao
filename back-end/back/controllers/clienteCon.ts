import { Cliente } from "../model/cliente";
import { Request, Response } from "express";

export class ClienteCon {

    async create(req: Request, res: Response) {
        try {
            const cliente = await Cliente.create({...req.body});
        } catch (error) {
            res.status(500).json({error: error.message});
        }

        return res.json(Cliente);
    }

}

export default new ClienteCon();