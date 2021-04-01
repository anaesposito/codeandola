require('dotenv').config();

module.exports = {
    HOST_DB: process.env.HOST_DB || 'mongodb://localhost/',
    NAME_DB: process.env.NAME_DB || 'blog',
    PORT: process.env.PORT || 3000
}