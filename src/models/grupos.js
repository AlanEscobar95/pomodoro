const { DataTypes} = require("sequelize");
const grupos = (sequelize) => {
    return sequelize.define('grupos', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre: {
            type: DataTypes.STRING(99),
        },

        descripcion: {
            type: DataTypes.STRING(1500),
        },

        crearGrupo:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarGrupo:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
        },{
            timestamps: false,
        });
};

module.exports = grupos;