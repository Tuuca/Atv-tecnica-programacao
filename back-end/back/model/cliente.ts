import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";

(async ()=>{
    await db.sync({force:true});
  })

export class Cliente extends Model {}
Cliente.init(
  {
    cpf: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    genero: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    dataemissao: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    timestamps: false,
    sequelize: db,
    modelName: "cliente",
    tableName: "cliente",
  }
);