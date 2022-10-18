const {sequelize} = require('../database/models')

const dbConnectionTest = async () => {
    try {
        await sequelize.authenticate()
        console.log('La conección a la base de datos fue exitosa');
    } catch (error) {
        console.log('No se pudo establecer la conección con la base de datos');
    }
}

module.exports = dbConnectionTest