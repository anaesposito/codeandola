const User = require('../models/user');

/* exports.userList = async (req, res) => {
    const users = await User.find();
    res.render('users/index', {
        users
    });
}; */

module.exports = {
    read: async () => {
        return User.find((err, users) => {
            if (err) return err
            return users
        })
    },

    create: async user => {
        const newUser = new User(user)
        await newUser.save()
    }
}