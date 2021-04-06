var User = require('../models/user');

exports.userList = async (req, res) => {
    const users = await User.find();
    res.render('users/index', {
        users
    });
};


exports.userCreate = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.redirect('index');
};