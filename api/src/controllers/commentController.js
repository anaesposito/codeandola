var Comment = require('../models/comment');

exports.comment_list = async (req, res) => {
    const comments = await Comment.find();
    res.render('comments/index', {
        comments
    });
};