// import fs from 'fs';
const fs = require('fs')

function readFile(file) {
    fs.readFile(file, 'utf-8', function(err, data){
        console.log(data);
    });
}

module.exports = readFile;