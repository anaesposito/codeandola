const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27027/', {
    useNewUrlParser: true
})
.then(() => console.log('DB connected'))
.catch(err => console.error(err))