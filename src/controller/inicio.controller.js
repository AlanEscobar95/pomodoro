inicioCtl.mostrar = async (req, res) => {
    const lista = await sql.query('SELECT * FROM usuarios');
    const { nombreUsuario } = req.body;
    const nuevoEnvio = {
        nombreUsuario,
    };
    await orm.usuarios.create(nuevoEnvio);
    req.flash('success', 'Usuario registrado correctamente');
    res.render('inicio', { lista });
};
