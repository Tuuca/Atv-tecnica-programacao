import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";
import { Produtos } from "./produtos";
import { Cliente } from "./cliente";

(async ()=>{
  await db.sync({force:true});
})
export class Consumo extends Model {}
Consumo.init(
  {
    id_consumo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
      onDelete: "CASCADE",
    },
    
  },
  { 
    timestamps: false,
    sequelize: db,
    modelName: "Consumo",
    tableName: "Consumo",
  }
);

Cliente.hasMany(Consumo,{foreignKey: 'cpf'});
Produtos.hasMany(Consumo,{foreignKey: 'nome'});