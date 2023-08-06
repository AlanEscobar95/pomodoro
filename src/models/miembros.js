const { DataTypes} = require("sequelize");
const miembros = (sequelize) => {
    return sequelize.define('miembros', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre: {
            type: DataTypes.STRING(99),
        },

        crearMiembro:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarMiembro:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
        },{
            timestamps: false,
        });
};

module.exports = miembros;