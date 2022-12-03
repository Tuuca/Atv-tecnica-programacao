import { Sequelize } from "sequelize";

const db = new Sequelize('gerson', 'root', 'fatec',{
    host: 'localhost',
    dialect:'mysql'
});

export default db;