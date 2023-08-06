const { DataTypes} = require("sequelize");
const  miembrosTareas = (sequelize) => {
    return sequelize.define('miembros-tareas', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      crearMiembrosTareas: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      actualizarMiembrosTareas: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    }, {
      timestamps: false,
    });
  };

  module.exports = miembrosTareas;