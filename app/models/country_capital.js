module.exports = (sequelize, DataTypes) => {
    return sequelize.define('country_capital', {
        id: {
            type: DataTypes.INTEGER(32).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT
        },
        capital: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: 'country_capital',
        timestamps: true,
        createdAt: false,
        updatedAt: false
    })
}