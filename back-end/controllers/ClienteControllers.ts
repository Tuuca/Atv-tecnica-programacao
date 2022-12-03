import { Cliente } from "../model/cliente";
import { Request, Response } from "express";

export class ClienteControllers {

  async create(req: Request, res: Response) {
    try {
      const Clientes = await Cliente.create({ ...req.body });

      return res.json(Clientes);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Clientes" });
    }
  }

  async delete(req: Request, res: Response) {
    const { cpf } = req.params;
    try {
      const Clientes = await Cliente.destroy({ where: { cpf } });

      return res.json(Clientes);
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Clientes" });
    }

  }

  async update(req: Request, res: Response) {

    try {
      const cliente = await Cliente.findByPk(req.body.cpf);

      if (!cliente) {
        return res.status(404).json({ error: "cliente not found" });
      }

      await cliente.update({ nome: req.body.nome, genero: req.body.genero, dataemissao: req.body.dataemissao });

      return res.json(cliente);
    } catch (e) {
      return res.status(500).json({ error: "Cannot update cliente" });
    }

  }

  async getByCpf(req: Request, res: Response) {
    const { cpf } = req.params;
    try {
      const Clientes = await Cliente.findByPk(cpf);
      return res.json(Clientes);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get Clientes" });
    }
  }
}

export default new ClienteControllers();