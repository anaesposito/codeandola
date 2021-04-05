var User = require('../models/user');

exports.user_list = async (req, res) => {
    const users = await User.find();
    res.render('users/index', {
        users
    });
};


exports.user_create = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.redirect('index');
};