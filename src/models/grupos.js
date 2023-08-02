const grupos = (sequelize, DataTypes) => {
    return sequelize.define('grupos', {
        idGrupos:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombreGrupo: {
            type: DataTypes.STRING(99),
        },

        descripcionGrupo: {
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