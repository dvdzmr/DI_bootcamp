//1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}
const { name, location: { country, city, coordinates: [lat, lng] } } = person;
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// prints sentence


function displayStudentInfo(objUser) {
    let { first, last } = objUser
    return `Student's name is ${first} ${last}`
}

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));



const arrMaker = (users) => {
    let arr = []
    for (let [key, value] of Object.entries(users)) {
        arr.push([key, value * 2])
    }
    return arr
}

const users = { user1: 18273, user2: 92833, user3: 90315 }
arrMaker(users).forEach((element) => console.log(element));


class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member);


class Dog {
    constructor(name) {
        this.name = name;
    }
};

class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};

//2; this extends it by re-using the name from Dog, and adding a new parameter of its own locally.



// [2] === [2] // false
// {} === {} // false

const object1 = { number: 5 }; //5
const object2 = object1; //5 reference from object 1
const object3 = object2;  //5 ^ 
const object4 = { number: 5 }; //5 

object1.number = 4; // 5 -> 4
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)


class Animal {
    constructor(name, type, color) {
        this.name = name
        this.color = color
        this.type = type
        
    }
}

class Mamal extends Animal {
    constructor(name, type, color, noise) {
        super(name, type, color)
        this.noise = noise
    }
    story() {
        return `${this.name} is a ${this.color} ${this.type} and it makes this noise: ${this.noise}`
    }
}

let farmerCow = new Mamal('Lily', 'cow', 'white', 'Mooooo')
console.log(farmerCow.story())