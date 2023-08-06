const { DataTypes} = require("sequelize");
const roles = (sequelize) => {
    return sequelize.define('roles', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre: {
           type: DataTypes.STRING(99),
        },
            
        crearRol:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarRol:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
        },{
            timestamps: false,
        });
}

module.exports = roles;