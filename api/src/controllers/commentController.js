var Comment = require('../models/comment');

exports.commentList = async (req, res) => {
    const comments = await Comment.find();
    res.render('comments/index', {
        comments
    });
};