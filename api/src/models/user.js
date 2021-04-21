const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true, index: { unique: true }},
    password: {type: String, required: true},
    email: {
        type: String,
        validate: {
            validator: async function(email) {
            const user = await this.constructor.findOne({ email });
            if(user) {
                if(this.id === user.id) {
                    return true;
                }
                return false;
            }
            return true;
            },
            message: props => 'this email is in use'
        },
        required: true
    },
    image: {data: Buffer, contentType: String}

});

module.exports = mongoose.model('Users', UserSchema);