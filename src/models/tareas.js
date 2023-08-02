const tareas = (sequelize, DataTypes) => {
    return sequelize.define('tareas', {
        idTareas:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombreTarea:{
         type: DataTypes.STRING,
        },

        descripcionTarea:{
         type:DataTypes.STRING(1500),
        },
        
        estadoTarea: {
        type:DataTypes.STRING(50),
        },
        
        crearTarea:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarTarea:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
        },{
            timestamps: false,
        });
};

module.exports = tareas;