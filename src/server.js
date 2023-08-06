const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

// Inicializaciones
const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT } = require("./keys");

const app = express();
require('./lib/passport');

const options = {
    host: MYSQLHOST,
    port: MYSQLPORT,
    user: MYSQLUSER,
    password: MYSQLPASSWORD,
    database: MYSQLDATABASE,
    createDatabaseTable: true
};

// Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs',exphbs({
   defaultLayout:'main',
   layoutsDir:path.join(app.get('views'), 'layouts'),
   partialsDir:path.join(app.get('views'), 'partials'),
   extname:'.hbs'
}));

app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Variables globales

// Rutas
app.use(require('./routes/index.routes.js'));
app.use(require('./routes/tareas.routes.js'));
// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;