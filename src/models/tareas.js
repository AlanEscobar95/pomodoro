const { DataTypes } = require("sequelize");
const tareas = (sequelize) => {
  return sequelize.define('tareas', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    nombre: {
      type: DataTypes.STRING,
    },

    descripcion: {
      type: DataTypes.STRING(1500),
    },

    estado: {
      type: DataTypes.STRING(50),
    },

    user: {
      type: DataTypes.STRING,
      required: true
    },

    crearTarea: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    actualizarTarea: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  }, {
    timestamps: false,
  });
};

module.exports = tareas;