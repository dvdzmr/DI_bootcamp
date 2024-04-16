import knex from "knex";

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'dvd',
        password: 'dvd',
        database: 'dc',
        port: 5432,
    },
});

export default db;