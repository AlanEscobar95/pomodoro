const { DataTypes} = require("sequelize");
const usuarios = (sequelize) => {
    return sequelize.define('usuarios', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      nombre: {
        type: DataTypes.STRING(99), // Corrección aquí
      },
      correo: {
        type: DataTypes.STRING, // Corrección aquí
      },
      password: {
        type: DataTypes.STRING,
      },
      crearUsuario: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      actualizarUsuario: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    }, {
      timestamps: false,
    });
  };
  
  module.exports = usuarios;
  