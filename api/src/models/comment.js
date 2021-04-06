const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    text: {type: String, required: true},
    date: {type: Date, required: true},
    title: {type: Number, required: true},
    subtitle: {type: Number, required: true},
    image: {data: Buffer, contentType: String},
    medals: {type: Number, required: true},
    inReview: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Posts', PostSchema);