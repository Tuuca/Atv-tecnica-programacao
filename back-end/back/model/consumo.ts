import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";
import { Cliente } from "./cliente";
import { Produto } from "./produto";

(async ()=>{
    await db.sync({force:true});
  })

export class Consumo extends Model {}
Consumo.init(
  {
    cpf: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },

    nome: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

  },
  {
    timestamps: false,
    sequelize: db,
    modelName: "consumo",
    tableName: "consumo",
  }
);

Cliente.hasMany(Consumo,{foreignKey: 'cpf'});
Produto.hasMany(Consumo,{foreignKey: 'nome'});