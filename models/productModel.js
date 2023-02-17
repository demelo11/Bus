module.exports = (sequelize, DataTypes) => {

    const Bus = sequelize.define("bus", {

        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
       
        chassi: {
            type: DataTypes.TEXT
        },
         carroceria: {
            type: DataTypes.STRING
        },
         anoMod: {
            type: DataTypes.INTEGER
        },
        anoFab: {
            type: DataTypes.INTEGER
        },

        cor : {
            type: DataTypes.STRING
        },
        quantidadeLugares: {
            type: DataTypes.INTEGER
        },
        fotos: {
            type: DataTypes.STRING
        }

    
    })

    return Bus

}