const User = require('../models/user');

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