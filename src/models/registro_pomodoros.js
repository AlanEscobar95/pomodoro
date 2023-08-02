const registro_pomodoros = (sequelize, DataTypes) => {
    return sequelize.define('registro_pomodoros', {
        idRegistro:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        horaInicio:{
          type: DataTypes.TIME,
        },
         
        horaFin: {
          type: DataTypes.TIME,
        },
        
        incidencia: {
            type: DataTypes.STRING,
        },

        crearRegistro:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarRegistro:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
        },{
            timestamps: false,
        });
};

module.exports = registro_pomodoros;