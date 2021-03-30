const express = require('express')
const app = express() //inicializo express
require('./db')

app.use(express.urlencoded({extended: true})) 
app.use('/', require('./routes')) //añade las rutas en "/"

//muestra en consola los errores
app.use((err, req, res, next) => { 
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

app.listen(process.env.PORT | 3001, () => { //arranca en el servidor del .env o el 3001
    console.log(`Server is listening in port ${process.env.PORT | 3001}`)
})