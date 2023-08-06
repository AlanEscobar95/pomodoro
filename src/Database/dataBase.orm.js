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
	const usuariosRolesModelo = require("../models/roles-usuarios");
	const rolesModelo = require("../models/roles");
	const tareasModelo = require("../models/tareas");
	const registroPomodorosModelo = require("../models/registro-pomodoros");
	const pomodorosModelo = require("../models/pomodoros");
	const miembrosModelo = require("../models/miembros");
	const miembrosTareasModelo = require("../models/miembros-tareas");
	const gruposModelo = require("../models/grupos");

//sincronia

//Relacion entre usuarios y roles
const usuarios = usuariosModelo(sequelize, Sequelize);
const roles = rolesModelo(sequelize, Sequelize);
const usuariosRoles= usuariosRolesModelo(sequelize, Sequelize);

usuarios.hasMany(usuariosRoles)
usuariosRoles.belongsTo(usuarios)

roles.hasMany(usuariosRoles)
usuariosRoles.belongsTo(roles)

//Relacion entre usuarios y roles

//Relacion entre grupos y miembros
const grupos = gruposModelo(sequelize, Sequelize);
const miembros = miembrosModelo(sequelize, Sequelize);

grupos.hasMany(miembros);
miembros.belongsTo(grupos);
//Relacion entre grupos y miembros

//Relacion entre miembros y tareas
const tareas = tareasModelo(sequelize, Sequelize);
const miembrosTareas = miembrosTareasModelo(sequelize, Sequelize);

miembros.hasMany(miembrosTareas);
miembrosTareas.belongsTo(miembros);

tareas.hasMany(miembrosTareas);
miembrosTareas.belongsTo(tareas);
//Relacion entre miembros y tareas

//Relacion entre pomodoros y registro-pomodoros
const pomodoros = pomodorosModelo(sequelize, Sequelize);
const registroPomodoros = registroPomodorosModelo(sequelize, Sequelize);

pomodoros.hasMany(registroPomodoros);
registroPomodoros.belongsTo(pomodoros);
//Relacion entre pomodoros y registro-pomodoros

//Relacion entre miembros y pomodoros
miembros.hasMany(pomodoros);
pomodoros.belongsTo(miembros);
//Relacion entre miembros y pomodoros

//Relacion entre tareas y grupos
grupos.hasMany(tareas);
tareas.belongsTo(grupos);
//Relacion entre tareas y grupos

module.exports = {
  sequelize,
  usuarios: usuariosModelo(sequelize, Sequelize),
  roles: rolesModelo(sequelize, Sequelize),
  grupos: gruposModelo(sequelize, Sequelize),
  miembros: miembrosModelo(sequelize, Sequelize),
  pomodoros: pomodorosModelo(sequelize, Sequelize),
  registroPomodoros: registroPomodorosModelo(sequelize, Sequelize),
  tareas: tareasModelo(sequelize, Sequelize),
  miembrosTareas: miembrosTareasModelo(sequelize, Sequelize),
};