import {db} from '../config/db.js'

// register a new user

export const register = async ({email, password}) => {
    try {
        const [user] = await db('users').insert({email, password}, ['id', 'email'])
        return user
    } catch (error) {
        console.log('Error in register model', error);
        throw new Error('registration failed')
    }
}

// login user

export const login = async (email) => {
    try {
        const user = db('users')
            .select('id', 'email', 'password')
            .where({email})
            .first()
        return user || null
    } catch (error) {
        console.error('Error in login model', error);
        throw new Error('Login failed')
    }
}

export const all = async () => {
    try {
        const users = await db('users')
            .select('id', 'email')
            .orderBy('id')
        return users
    } catch (error) {
        console.error('Error in get all model', error);
        throw new Error('Could not get users')
    }
}