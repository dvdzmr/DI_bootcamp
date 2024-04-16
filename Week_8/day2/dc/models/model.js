import db from "../config/config.js"

const User = {
    getAll: () => db('users').select('*'),
    getById: (id) => db('users').where({ id }).first(),
    create: (user) => db('users').insert(user).returning('*'),
    update: (id, user) => db('users').where({ id }).update(user).returning('*'),
};

export default User;