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
        quantidadeLugares : {
            type: DataTypes.INTEGER
        },
        fotos: {
            type: DataTypes.TEXT,
            get() {
             return JSON.parse(this.getDataValue('fotos'))
            },
             set(value) {
            this.setDataValue('fotos', JSON.stringify(value))
            }
            
        }

    
    })

    return Bus

}