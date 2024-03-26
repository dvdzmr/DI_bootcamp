allPlants = ["a", "b", "c"]

var myhtml = document.getElementById("listPlanets")

for (i = 0; i < allPlants.length; i++)
{
    mydiv = document.createElement('div');
    mydiv.className = "Planet"
    if (allPlants[i] == "A")
    {
        mydiv.style.backgroundColor = "red"
    }
    if (allPlants[i] == "B")
    {
        mydiv.style.backgroundColor = "blue"
    }
    if (allPlants[i] == "C")
    {
        mydiv.style.backgroundColor = "purple"
    }

    myhtml.appendChild(mydiv)
}