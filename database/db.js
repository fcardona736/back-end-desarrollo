import { Sequelize } from 'sequelize';

const db = new Sequelize('desarrolloExamenII', 'root', 'root', {
    host:'localhost',
    dialect: 'mysql'
})

export default db;