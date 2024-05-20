import './style.css'

// Exercise 1
const helloWorld = "Hello World";
console.log(helloWorld);

// Exercise 2
let age: number = 25;
let name: string = 'helloWorld';
console.log(age, name);

// Exercise 3
let id: string | number = 50;
console.log(id);
id = 'helloWorld';
console.log(id);


// Exercise 4

function positiveNum(param: number): string {
    if (param === 0) { return "Zero"; }
    else if (param >= 0) { return "Positive"; }
    else { return "Negative"; }
}
console.log("number 5 is",positiveNum(5));
console.log("number -2 is",positiveNum(-2));
console.log("number 0 is",positiveNum(0));


// Exercise 5
function add(param: string): void;
function add(param: number): void;
function add(param: unknown) : void {
    if (typeof(param) === 'string') {console.log("string", param);}
    if (typeof(param) === 'number') {console.log("int", param);}

}
add(50);
add("hello");


// Exercise 6
function getDetails(name: string, age: number): any {
    return [name, age, "Hello welcome"]
}
console.log(getDetails("David", 28));


// Exercise 7
function createPerson(name: string, age: number) {
    return {
        name: name,
        age: age
    }
}
console.log(createPerson("David", 28));

// Exercise 8
const myHtml= '<div>helloworld</div>';
console.log(myHtml as string);
// (I'm not entirely sure what you guys want me to do here)


// Exercise 9

function getAction(userRole: string) {
    switch(userRole) {
        case "Tinker": {
            console.log(userRole);
            break;
        }
        case "Tailor": {
            console.log(userRole);
            break;
        }
        case "Soldier": {
            console.log(userRole);
            break;
        }
        case "Spy": {
            console.log(userRole);
            break;
        }
        default: {
            console.log("Error")
            break;
        }
    }
}
getAction("Spy");


// Exercise 10

function greet(param: string="default"):string {
    if (param === "default") { return "Hello, standard message"}
    else {
        return "Hello, " + param;
    }
}

console.log(greet("john"));
console.log(greet());


// Daily Challenge

function processInput(param:number | string | boolean):any {
    if (typeof(param) === 'string') { return param.toUpperCase()}
    if (typeof(param) === 'number') {return (param * param)}
    if (typeof(param) === 'boolean') { return param.valueOf();}
}

console.log(processInput(5));
console.log(processInput(false));
console.log(processInput("Hello, world!"));


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Typescript day1
  </div>
`
