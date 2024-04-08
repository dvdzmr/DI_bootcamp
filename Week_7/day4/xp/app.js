const parksAndRec = require("./data.js");
const writeFile = require('./fileManager.js');

function productfinder(items) {
    avg_age = 0;
    people_count = 0;
    items.forEach(element => {
        avg_age = avg_age + element.age;
        people_count = people_count + 1;
    });
    console.log(`Average age is ${avg_age/people_count}`);
}


productfinder(parksAndRec);


//exercise3
// Create a file “Hello World.txt” containing the sentence “Hello World !! “
writeFile("HelloWorld.txt", "Hello World !!");
// Create a file “Bye World.txt” containing the sentence “Bye World !! “
writeFile("ByeWorld.txt", "Bye World !!");