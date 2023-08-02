const miembros = (sequelize, DataTypes) => {
    return sequelize.define('miembros', {
        idMiembros:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombreMiembro: {
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