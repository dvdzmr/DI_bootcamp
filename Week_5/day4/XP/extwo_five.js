

// Retrieve the form and console.log it.
let form = document.querySelector("form");

console.log(form);

// Retrieve and log elements by their ID
const fnameById = document.getElementById("fname");
const lnameById = document.getElementById("lname");
const submitById = document.getElementById("submit");

console.log(fnameById);
console.log(lnameById);
console.log(submitById);

// Retrieve and log elements by their name attribute
const fnameByName = document.getElementsByName("firstname")[0];
const lnameByName = document.getElementsByName("lastname")[0];

console.log(fnameByName);
console.log(lnameByName);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

// First, select the ul where answers will be appended.
const usersAnswerList = document.querySelector(".usersAnswer");

form.addEventListener("submit", function (event) {
  // Stop the form from submitting the traditional way
  event.preventDefault();

  // Check if the inputs are not empty
  if (fnameById.value !== "" && lnameById.value !== "") {
    // Create list items and append them to the ul
    usersAnswerList.innerHTML = `<li>${fnameById.value}</li><li>${lnameById.value}</li>`;
  } else {
    // Alert the user if one or both fields are empty
    alert("Please fill out both fields.");
  }
});

// 🌟 Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>

// Declare a global variable named allBoldItems
let allBoldItems;

// Create a function called getBoldItems() that collects all the bold items inside the paragraph
function getBoldItems() {
  allBoldItems = document.querySelectorAll("p strong"); // Selects all <strong> elements within <p> tags
}

// Create a function called highlight() that changes the color of all the bold text to blue
function highlight() {
  for (let item of allBoldItems) {
    item.style.color = "blue";
  }
}

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black
function returnItemsToDefault() {
  for (let item of allBoldItems) {
    item.style.color = "black";
  }
}

// Collect all bold items
getBoldItems();

// Select the specific paragraph which contains the <strong> elements
const targetParagraph = document.querySelector("body > p:last-of-type");

// Call the function highlight() on mouseover
targetParagraph.addEventListener("mouseover", highlight);

// Call the function returnItemsToDefault() on mouseout
targetParagraph.addEventListener("mouseout", returnItemsToDefault);