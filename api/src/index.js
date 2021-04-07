//Conexión a mongo utilizando mongoose
require('./config/db');

//Importación de express, variables de entorno y otras librerias.
const express = require('express');
const app = express(); //inicializo express
const localEnv = require('./config/env');
const path = require('path');
const morgan = require('morgan');

//Importamos todas las rutas para que quede codigo limpio
app.use('/', require('./routes/index'));

//Morgan: captura solicitudes HTTP.
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//muestra en consola los errores
app.use((err, req, res, next) => { 
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

app.listen(localEnv.PORT || 3001, () => { //arranca en el servidor del .env o el 3001
    console.log(`Server is listening in port ${localEnv.PORT || 3001}`);
});