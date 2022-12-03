import { Produtos } from "../model/produtos";
import { Request, Response } from "express";

export class ProdutosControllers {

  async create(req: Request, res: Response) {
    try {
      const produtos = await Produtos.create({ ...req.body });
      console.log(req.body);

      return res.json(req.body);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Produtos" });
    }
  }

  async getByNome(req: Request, res: Response) {
    try {
      const produtos = await Produtos.findByPk(req.params.nome);

      return res.json(produtos);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get Produtos" });
    }
  }

  async delete(req: Request, res: Response) {
    const { nome } = req.params;
    try {
      const produto = await Produtos.destroy({ where: { nome } });

      return res.json(produto);
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete produto" });
    }
  }

  async update(req: Request, res: Response) {

    try {
      const produtos = await Produtos.findByPk(req.body.nome);

      if (!produtos) {
        return res.status(404).json({ error: "Produtos not found" });
      }

      await produtos.update({ valor: req.body.valor });

      return res.json(produtos);
    } catch (e) {
      return res.status(500).json({ error: "Cannot update Produtos" });
    }

  }
}

export default new ProdutosControllers();