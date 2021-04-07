const User = require('../models/user');

/* exports.userList = async (req, res) => {
    const users = await User.find();
    res.render('users/index', {
        users
    });
}; */

module.exports = {
    read: () => {
        return User.find((err, users) => {
            return err ? err : users
        })
        .then(r => r)
    },

    create: user => {
        const newUser = new User(user)
        return newUser.save()
        .then(r => r)
    }
}