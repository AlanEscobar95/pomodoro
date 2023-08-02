const { Sequelize } = require("sequelize");

const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI, } = require("../keys");

const sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
	host: MYSQLHOST,
	port: MYSQLPORT,
	dialect: 'mysql'
});

//const sequelize = new Sequelize(MYSQL_URI);

sequelize.authenticate()
	.then(() => {
		console.log("conectado");
	})
	.catch((err) => {
		console.log("no se conecto");
	});

sequelize.sync({ force: false })
	.then(() => {
		console.log("tablas sincronizadas");
	});

	const usuariosModelo = require("../models/usuarios");
	const rolesModelo = require("../models/roles");
	const tareasModelo = require("../models/tareas");
	const registro_pomodorosModelo = require("../models/registro_pomodoros");
	const pomodorosModelo = require("../models/pomodoros");
	const miembrosModelo = require("../models/miembros");
	const miembros_tareasModelo = require("../models/miembros_tareas");
	const gruposModelo = require("../models/grupos");
	

//sincronia
const usuarios = usuariosModelo(sequelize, Sequelize);
const roles = rolesModelo(sequelize, Sequelize);

usuarios.hasMany(roles)
roles.belongsTo(usuarios)

const grupos = gruposModelo(sequelize, Sequelize);
const miembros = miembrosModelo(sequelize, Sequelize);

grupos.hasMany(miembros)
miembros.belongsTo(grupos)

const pomodoros = pomodorosModelo(sequelize, Sequelize);
const registroPomodoros = registro_pomodorosModelo(sequelize, Sequelize);

pomodoros.belongsTo(registroPomodoros)
registroPomodoros.hasMany(pomodoros)


const tareas = tareasModelo(sequelize, Sequelize);
const miembros_tareas = miembros_tareasModelo(sequelize, Sequelize);

miembros_tareas.belongsTo(tareas)
tareas.hasMany(miembros_tareas)

//Relacion entre tareas y pomodoros
tareas.belongsTo(pomodoros)
pomodoros.hasMany(tareas)

//Relacion entre miembros y miembros_tareas
miembros_tareas.belongsTo(miembros)
miembros.hasMany(miembros_tareas)

module.exports = {
  sequelize,
  usuarios: usuariosModelo(sequelize, Sequelize),
  roles: rolesModelo(sequelize, Sequelize),
  grupos: gruposModelo(sequelize, Sequelize),
  miembros: miembrosModelo(sequelize, Sequelize),
  pomodoros: pomodorosModelo(sequelize, Sequelize),
  registroPomodoros: registro_pomodorosModelo(sequelize, Sequelize),
  tareas: tareasModelo(sequelize, Sequelize),
  miembros_tareas: miembros_tareasModelo(sequelize, Sequelize),
};