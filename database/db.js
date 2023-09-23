import { Sequelize } from 'sequelize';

const db = new Sequelize('desarrolloexamenii', 'admin', 'admin123', {
    host:'bd-desarrollo.cz6otdrcd3tu.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
})

export default db;