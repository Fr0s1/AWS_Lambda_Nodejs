const db = require("./app/models");
db.sequelize.sync();

const countryCapital = db.countryCapital

exports.handler = async (event, context) => {
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