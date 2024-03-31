// Function one:
// a = 3 because a is defined and printed within the same function; a=5 and then redefined as 3.
// if it's defined as const instead of let, it shouldnt have its value changed so this wouldnt work.


// Function two and three
// defined in global, changed in function means its changed in global. a=5


// Function four and five
// I have no idea what window variable is, but im assuming it will just give an error.


// Function six :
// You can redefine variables to different types (but you shouldnt) so a="test"



// 2
function experiencePoints()
{
    if (winBattle =>{return true;})
    {
        xp = 10
    }
    else
    {
        xp = 1
    }

    return xp;
}


console.log(experiencePoints())


// 3
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output

let isString = val => typeof val === 'string';
console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));



//4

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
let sumNum = (valOne, valTwo) => valOne + valTwo;

//5 

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

//     First, use function declaration and invoke it.
//     Then, use function expression and invoke it.
//     Write in a one line comment, the difference between function declaration and function expression.
//     Finally, use a one line arrow function and invoke it.
function convertKiloGram_declaration(kilogram)
{
    return kilogram * 1000;
}
let convertKiloGram_expression = function (kilogram) {return kilogram * 1000};
let convertKiloGram_arrow = (kilogram) => kilogram * 1000;

console.log(convertKiloGram_arrow(50));

//6

var x = function (childrenNum, parterName, location, jobTitle) {return `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${childrenNum} kids.`}
document.getElementById('MYID').textContent = x;

// 7
// John has just signed in to your website and you want to welcome him.
//     Create a Navbar in your HTML file.
//     In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//     The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function (userName, profilePicture) {
    const navbar = document.getElementById("navbar");
    profile = document.createElement("img");
    profile.src = profilePicture;
    navbar.append(profile);
    navbar.append(userName);
}) ("John", "https://link-here.com");


var loggedInUser = function (username) {let mydiv = document.createElement('div'); mydiv.textContent = username; document.getElementsByTagName('navbar')[0].appendChild(mydiv);}

//8
function makeJuice(size) {
    let ingredients = [];
    function addIngredients(ingredientOne, ingredientTwo, ingredientThree) {
        ingredients.push(ingredientOne, ingredientTwo, ingredientThree);
    }
    function displayJuice() {
        const juiceBar = document.getElementById("juice");
        let order = document.createElement("p");
        order.innerText = `Customer wants a ${size} juice, with ` + ingredients.join(", ");
        juiceBar.append(order);
    }
    addIngredients("watermelon", "mango", "orange");
    addIngredients("mint", "vodka", "tapioca");
    displayJuice();
}

makeJuice("extra large");

