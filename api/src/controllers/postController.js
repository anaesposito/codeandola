var Post = require('../models/post');

exports.postList = async (req, res) => {
    const posts = await Post.find();
    res.render('posts/index', {
        posts
    });
};
