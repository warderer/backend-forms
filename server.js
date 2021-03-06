require('dotenv').config();
const express = require('express');
//Ahora mando a llamar al Index de mis rutas e importo lo necesario.
const { formRoutes } = require('./routes/');

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

/* Middlewares (opcional) */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Rutas */
    app.use(formRoutes);

/* Poner el servidor a escuchar */
app.listen(3000,()=> {
    console.log('Server ON: 3000');
})