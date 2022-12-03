import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";

(async ()=>{
    await db.sync({force:true});
  })

export class Produto extends Model {}
Produto.init(
  {
    nome: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },

    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

  },
  {
    timestamps: false,
    sequelize: db,
    modelName: "produto",
    tableName: "produto",
  }
);