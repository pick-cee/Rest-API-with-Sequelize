const config = require('../config/dbcCnfig');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    }
})

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.students = require('./student')(sequelize, Sequelize);

module.exports = db;