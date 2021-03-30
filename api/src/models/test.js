const mongoose = require('mongoose')
const { Schema } = mongoose;

const newSchema = new Schema({
    test: {type: String, required: true}
})

module.exports = mongoose.model('Test', newSchema)