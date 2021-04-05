const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    text: {type: String, required: true},
    medals: {type: Number, required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'Users'},
    postId: {type: Schema.Types.ObjectId, ref: 'Posts'},
});

module.exports = mongoose.model('Comments', CommentSchema);