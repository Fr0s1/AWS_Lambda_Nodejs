const DB_CONFIG = require('../DB_CONFIG')
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(DB_CONFIG.DATABASE, DB_CONFIG.USERNAME, DB_CONFIG.PASSWORD, {
    host: DB_CONFIG.HOST,
    dialect: 'mysql',
    port: DB_CONFIG.PORT,
    maxConcurrentQueries: 100,
    dialectOptions: {
        ssl: 'Amazon RDS'
    },
    pool: { maxConnections: 5, maxIdleTime: 30 },
    language: 'en',
    timezone: '+07:00',
    query: {
        raw: true
    }
})

countryCapital = require("./country_capital")(sequelize, DataTypes)

const db = {
    countryCapital
};

db.Sequelize = Sequelize
db.sequelize = sequelize;
module.exports = db;