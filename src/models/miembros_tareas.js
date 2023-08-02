const miembros_tareas = (sequelize, DataTypes) => {
    return sequelize.define('miembros_tareas', {
        idMiembrosTareas:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        crearMiembroTareas:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarMiembroTareas:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
        },{
            timestamps: false,
        });
};

module.exports = miembros_tareas;