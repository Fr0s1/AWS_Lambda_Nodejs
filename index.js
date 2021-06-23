const db = require("./app/models");
db.sequelize.sync();

const countryCapital = db.countryCapital

exports.handler = async (event, context) => {
    
    let httpMethod = event.context.http_method
    switch (httpMethod) {
        case 'GET':
            if (event.params.querystring.name) {
                return await getCapitalByCountryName(event.params.querystring.name)
            } else {
                return await getAllCapital()
            }

        case 'POST':
            return await insertNew(event.body_json)

        case 'DELETE':
            return await deleteRecordByCountryName(event.body_json.name)
    }
    // return event

}

async function insertNew(event) {
    let result = await countryCapital.findAll({
        where: {
            name: event.name
        }
    })

    if (result.length == 0) {
        await countryCapital.create(event)
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
            message: `Record with country name ${name} doesn't exist.`
        }
    }
}