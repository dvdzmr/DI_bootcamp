import {all, login, register} from "../models/users.m.js";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()


const {ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRY} = process.env

export const _login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await login(email.toLowerCase())
        // if user exist
        if (!user) return res.status(404).json({msg: 'Email not found'})
        // if password correct
        const isMatch = bcrypt.compareSync(password + '', user.password)
        if (!isMatch) return res.status(404).json({msg: 'Wrong password'})

        const accesstoken = jwt.sign({
            id: user.id, email: user.email
        }, ACCESS_TOKEN_SECRET, {
            expiresIn: ACCESS_TOKEN_EXPIRY
        })

        res.cookie('token', accesstoken, {
            httpOnly: true,
            maxAge: 60 * 1000
        })

        res.json({token: accesstoken})

    } catch (error) {
        console.log('_login=>', error);
        res.status(404).json({msg: 'login failed'})
    }
}


export const _register = async (req, res) => {
    const {email, password} = req.body
    try {
        const loweremail = email.toLowerCase()
        const salt = bcrypt.genSaltSync(10)
        const hashpassword = bcrypt.hashSync(password + '', salt)

        const newUser = await register({email: loweremail, password: hashpassword})
        res.json(newUser)
    } catch (error) {
        console.log('_register=>', error);
        res.status(404).json({msg: 'email exist'})
    }
}

export const _all = async (req, res) => {
    try {
        const users = await all()
        res.json(users)
    } catch (error) {
        console.log('_all=>', error);
        res.status(404).json({msg: 'user not found'})
    }
}