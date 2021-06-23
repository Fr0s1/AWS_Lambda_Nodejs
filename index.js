const db = require("./app/models");
db.sequelize.sync();

const countryCapital = db.countryCapital

exports.handler = async (event, context) => {

    let httpMethod = event.httpMethod

    let responseBody = {}

    let body = JSON.parse(event.body)
    
    switch (httpMethod) {
        case 'GET':
            if (event.queryStringParameters && event.queryStringParameters.name) {
                responseBody = await getCapitalByCountryName(event.queryStringParameters.name)
            } else {
                responseBody = await getAllCapital()
            }
            break;
        case 'POST':
            responseBody = await insertNew(body)
            break;
        case 'DELETE':
            responseBody = await deleteRecordByCountryName(body.name)
            break;
    }

    let response = { "statusCode": 200, "body": JSON.stringify(responseBody) }
    
    return response

}

async function insertNew(record) {
    let result = await countryCapital.findAll({
        where: {
            name: record.name
        }
    })

    if (result.length == 0) {
        await countryCapital.create(record)
        return {
            message: 'Success'
        }
    }
    return {
        message: 'Already exists'
    }
}

async function getAllCapital() {
    let result = await countryCapital.findAll()

    return result
}

async function getCapitalByCountryName(name) {
    let result = await countryCapital.findAll({
        where: {
            name: name
        }
    })

    if (result.length == 0) {
        return {
            message: `Record with country named ${name} doesn't exist.`
        }
    }

    return result
}

async function deleteRecordByCountryName(name) {
    let result = await countryCapital.destroy({
        where: {
            name: name
        }
    })

    if (result == 1) {
        return {
            message: `Deleted record with country name ${name}`
        }
    } else {
        return {
            message: `Record with country named ${name} doesn't exist.`
        }
    }
}