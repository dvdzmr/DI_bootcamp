var fs = require('fs');

function readFile(fileName) {
    fs.readFile(fileName, 'utf-8', function(err, data){
        console.log(data);
    });
}

function writeFile(fileName, content) {
    fs.writeFile(fileName, content, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          readFile(fileName);
        }
      });
}

module.exports = writeFile;
