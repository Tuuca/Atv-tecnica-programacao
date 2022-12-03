import { Consumo } from "../model/Consumo";
import { Request, Response } from "express";

export class ConsumoControllers {

  async create(req: Request, res: Response) {
    try {

  const consumo = await Consumo.create({ ...req.body});

      return res.json(consumo);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create consumo" });
    }
  }

  
  async delete(req: Request , res: Response){
    const {id} = req.params;
    try{  
      const consumo = await Consumo.destroy({where: {id_consumo : id}});

      return res.json('Consumo deletado com sucesso', );
    }catch(e){
      return res.status(500).json({error: "Cannot delete Consumo"});
    }

  }

async getById(req: Request, res: Response) {
  const {id} = req.params;
  console.log(id);
  
  try {
    const consumo = await Consumo.findByPk(id);
    return res.json(consumo);
  } catch (e) {
    return res.status(500).json({ error: "Cannot get consumo" });
  }
}

}

export default new ConsumoControllers();