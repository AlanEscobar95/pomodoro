const express = require("express");
const { urlencoded } = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = 4000;
const inicioCtl = require('./controllers/inicio.controller');

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use('/src/public', express.static('src/public')); //ruta estilos.css


// Configurar el motor de plantillas Handlebars
const handlebars = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    extname: '.hbs'
});

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set('views', path.resolve(__dirname, 'views'));


// Ruta principal
app.get('/', inicioCtl.mostrar);

app.get("/",(req, res)=>{
    res.render("siginup")
})

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en el Puerto ${PORT}`);
});

