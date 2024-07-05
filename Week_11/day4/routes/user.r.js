import express from 'express'
import {_all, _login, _register} from '../controllers/users.c.js'
import {verifyToken} from '../middlewares/verifyToken.js'

const router = express.Router()

router.post('/register', _register)
router.post('/login', _login)

router.get('/', verifyToken, _all)

router.get('/verify', verifyToken, (req, res) => {
    console.log(req);
    res.sendStatus(200)
})

export default router