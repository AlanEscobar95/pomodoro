const usuarios = (sequelize, DataTypes) => {
    return sequelize.define('usuarios', {
      idUsuarios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      correoUsuario: {
        type: DataTypes.STRING, // Corrección aquí
      },
      nombreUsuario: {
        type: DataTypes.STRING(99), // Corrección aquí
      },
      passwordUsuario: {
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
  