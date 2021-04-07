const { Router } = require('express')
const router = Router()

const userController = require('../controllers/userController');

router.get('/',  (req, res) => {
    return userController.read()
    .then(users => res.send(users))
    .catch(err => res.status(400).send(err.message))
});

router.post('/', (req, res) => {
    const {firstName, lastName, userName, password, email} = req.body
    let regex = /[\w.-/]+@\w.\w/
    if(!firstName || !lastName || !userName || !password || !email){
        return res.status(400).send('incomplete fields')
    }
    if(!regex.test(email)){
        return res.status(400).send('invalid email')
    }
    return userController.create(req.body)
    .then((r) => res.status(200).send(r))
    .catch((err) =>  res.status(400).send(err.message))
});

module.exports = router