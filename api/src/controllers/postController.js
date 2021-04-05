var Post = require('../models/post');

exports.post_list = async (req, res) => {
    const posts = await Post.find();
    res.render('posts/index', {
        posts
    });
};
