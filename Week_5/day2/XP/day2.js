// EXERCISE 1

const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.push("David");
console.log(people.indexOf('Mary'));
console.log(people);
console.log(people.slice(1, -1));
console.log(people.indexOf('Foo')); // -1 = doesnt exist
const last = people.slice(-1)
console.log(last)

for (let i = 0; i < people.length; i++) {
    if (people[i] === "Devon") {
        break
    }
    console.log(people[i])
  } 


// EXERCISE 2 

const colors = ["Blue", "Purple", "Red", "Yellow", "Orange"]

for (let i = 0; i < people.length; i++) {
    if (i+1 == 1)
    {
      console.log(`My first choice is ${colors[i]}`)
    }
    if (i+1 == 2)
    {
      console.log(`My second choice is ${colors[i]}`)
    }
    if (i+1 == 3)
    {
      console.log(`My third choice is ${colors[i]}`)
    }
    if (i+1 == 4)
    {
      console.log(`My fourth choice is ${colors[i]}`)
    }
  } 


  // EXERCISE 3

  // while (true)
  // {
  //   var name = prompt("Give a number"); // only works in a browser.
  //   if (typeof(user) == Int)
  //   {
  //     break
  //   }
  // }
  

  // while (user < 10)
  // {
  //   user = readline("Give a number");
  //   if (typeof(user) == Int)
  //   {
  //     break
  //   }
  // }


const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
      sarah: [3, 990],
      dan:  [4, 1000],
      david: [1, 500],
  },
}


console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);


console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan);


combined_rent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]
dan_rent = building.numberOfRoomsAndRent.dan[1]

if (combined_rent > dan_rent)
{
  building.numberOfRoomsAndRent.dan[1] = 1200;
}



// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.


const family = {  sarah: "wine",
            dan: "cola",
            david: "pepsi",
            peter: "sevenup"
}

for (let person in family) {
  console.log(family[person]);
} 

Object.keys(family).forEach(function(key) {
  console.log(key);
});


const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

sentence = ""
Object.keys(details).forEach(function(key) {
  sentence = sentence + key + " " + details[key] + " "
});

console.log(sentence)


const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();

supersecret = ""

for (let i = 0, len = names.length; i < len; i++) {
  supersecret = supersecret + names[i][0];
} 

console.log(supersecret);