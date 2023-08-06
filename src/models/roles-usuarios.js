const { DataTypes} = require("sequelize");
const usuariosRoles = (sequelize) => {
    return sequelize.define('usuarios-roles', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      crearUsuarioRol: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      actualizarUsuarioRol: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    }, {
      timestamps: false,
    });
  };
  
  module.exports = usuariosRoles;
  