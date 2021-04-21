const mongoose = require('mongoose')
const localEnv = require('./env');

//connecting to db
mongoose.connect(localEnv.HOST_DB + localEnv.NAME_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err))
    
mongoose.set('useCreateIndex', true);
