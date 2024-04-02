// exercise 1 and 2:
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];
var violetTrigger = 0;

colors.forEach((colorName, index) => {
  if (colorName == "Violet") {
    violetTrigger = 1;
  }
  console.log(`${ordinalWithSuffix(index+1)} choice is ${colorName}`);
});

if (violetTrigger == 1) {
  console.log("Yeah");
} else {
  console.log("No..");
}


function ordinalWithSuffix(i) {
    let j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

//exercise 3:

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// prints osut result with contains const veg and fruits

// ------2------
// const country = "USA";
// console.log([...country]);
// prints USA where each letter is an entry into the array because its a string

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// no idea


//exercise 4:
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map( (x) => "Hello " + x.firstName);
console.log(welcomeStudents);
const fullstackStudents = users.filter( (x) => x.role == 'Full Stack Resident');
console.log(fullstackStudents); // list of ojects; fullstackStudents[index] to view


//exercise 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let epicString = ""
const sumEpic = epic.reduce((word, currentString) => word + " " + currentString, epicString);
console.log(sumEpic);

//exercise 6
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passedStudents = students.filter( (x) => x.isPassed)
passedStudents.forEach((student) => { console.log("Congratulations, " + student.name)})
