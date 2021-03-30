const server = require('express').Router()
const schema = require('../controllers/test')

server.get('/', (req, res) => {
    const { content } = req.body
    schema.create(content)
    .then(r => res.send(r))
    .catch(next)
})

module.exports = server