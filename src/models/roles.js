const roles = (sequelize, DataTypes) => {
    return sequelize.define('roles', {
        idRoles:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombreRol: {
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