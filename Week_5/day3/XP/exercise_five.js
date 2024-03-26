let title = document.getElementById("container")
console.log(title)


let list = document.querySelector("ul").getElementsByTagName('li')
console.log(list)

list[1].innerHTML = "Richard"

for (i = 0; i < list.length; i++)
{
    list[i].innerHTML = "David"
}


let allLists = document.getElementsByClassName("list")

console.log(allLists)


allLists[0].classList.add("student_list")

// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.


for (i = 0; i < allLists.length; i++)
{
    allLists[i].classList.add("student_list")
}

allLists[0].classList.add("university")
allLists[0].classList.add("attendance")



title.style.color = "lightblue"
title.style.padding = "3px"
let last = allLists[1].getElementsByTagName('li')
last[2].style.display = "none"
list[1].style.border = "solid 5px"

let body = document.getElementsByTagName('body')[0]
body.style.fontSize = "50px"