const DB_CONFIG = require('./DB_CONFIG')
const { Sequelize } = require('sequelize');

console.log(DB_CONFIG)

const sequelize = new Sequelize(DB_CONFIG.DATABASE, DB_CONFIG.USERNAME, DB_CONFIG.PASSWORD, {
    host: DB_CONFIG.HOST,
    dialect: 'mysql',
    port: DB_CONFIG.PORT,
    maxConcurrentQueries: 100,
    dialectOptions: {
        ssl:'Amazon RDS'
    },
    pool: { maxConnections: 5, maxIdleTime: 30},
    language: 'en'
})

async function test() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

test()
