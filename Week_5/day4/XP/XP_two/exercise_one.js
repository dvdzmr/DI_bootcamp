setTimeout(function() { alert("Hello World"); }, 2000);
setTimeout(function() { document.getElementById("container").innerHTML += "<p>Hello World</p>"; }, 2000);

let interval = setInterval(function() { document.getElementById("container").innerHTML += "<p>Hello World</p>"; }, 2000);

let but= document.getElementById("clear");
let clear= ()=>
{
    clearInterval(interval);
}
but.addEventListener("click",clear);