const { DataTypes } = require("sequelize");
const bcrypt= require('bcrypt');

const usuarios = (sequelize) => {
  const Usuario = sequelize.define('usuarios', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(99),
    },
    correo: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
    },
    confirm_password: {
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

  Usuario.beforeCreate(async (usuario) => {
    const hashedPassword = await bcrypt.hash(usuario.password, 10);
    usuario.password = hashedPassword;
  });

  //Comparar contraseñas
  Usuario.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  return Usuario;
};

module.exports = usuarios;
