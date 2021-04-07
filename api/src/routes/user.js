const { Router } = require('express')
const router = Router()

const userController = require('../controllers/userController');

router.get('/', async (req, res) => {
    const users = await userController.read()
    res.send(users)
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
    userController.create(req.body)
    .then(() => res.sendStatus(200))
    .catch((err) =>  res.send(err._message))
});

module.exports = router