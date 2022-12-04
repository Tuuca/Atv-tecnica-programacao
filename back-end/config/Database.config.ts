import { Sequelize } from "sequelize";

const db = new Sequelize('atvv', 'root', 'fatec',{
    host: 'localhost',
    dialect:'mysql'
});

export default db;