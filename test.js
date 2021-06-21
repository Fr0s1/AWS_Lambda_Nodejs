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


var express = require('express')

var app = express()

app.get('/', (req, res) => {
    res.send('Home page')
})
app.get('/contact', (req, res) => {
    res.send('Hello')
})

app.listen(3000, () => {
    console.log('Listen on port 3000')
})