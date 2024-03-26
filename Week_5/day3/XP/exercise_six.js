
let title = document.getElementById("navBar").id = "socialNetworkNavigation"


var ul = document.querySelector("ul")
var li = document.createElement('li');
var text = document.createTextNode("Logout")
li.appendChild(text);
ul.appendChild(li);

console.log(ul.firstElementChild.innerHTML)
console.log(ul.lastElementChild.innerHTML)