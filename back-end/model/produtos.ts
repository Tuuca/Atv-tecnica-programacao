import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";

(async ()=>{
  await db.sync({force:true});
})

export class Produtos extends Model {}
Produtos.init(
  {
    nome: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: true,
      onDelete: "CASCADE",
    },
    
    valor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  },
  {
    timestamps: false,
    sequelize: db,
    modelName: "Produtos",
    tableName: "produtos",
  }
);