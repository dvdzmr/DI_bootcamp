// import db from "../config/config.js"
import db from "../users.json"
import { writeFile } from 'fs';

const User = {
    create: createTask(username, password),
    // getByUsername: 
    
}


function createTask(username, password) {
    const task = {
        username,
        password
      };

      db.push(task);
      writeJson();
}


function writeJson(task) {
    writeFile(db, JSON.stringify(task, null, 2), (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to disk');
    });

}

// const User = {
//     getAll: () => db('users').select('*'),
//     getById: (id) => db('users').where({ id }).first(),
//     create: (user) => db('users').insert(user).returning('*'),
//     update: (id, user) => db('users').where({ id }).update(user).returning('*'),
// };

export default User;