const pomodoros = (sequelize, DataTypes) => {
    return sequelize.define('pomodoros', {
        idPomodoros:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        fechaInicio: {
            type: DataTypes.DATE,
        },

        fechaFin:{
            type: DataTypes.DATE,
        },

        crearPomodoro:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarPomodoro:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
        },{
            timestamps: false,
        });
};

module.exports = pomodoros;