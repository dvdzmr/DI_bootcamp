
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

shoppingList = ["banana", "orange", "apple"]

function displayNumbersDivisible(divisor)
{
    sum = 0
    listNum = ""
    for (let i = 1; i < 501; i++)
    {
        if (i % divisor == 0)
        {
            listNum = listNum + i + " "
            sum = sum + i
        }
    }
    console.log("Outcome " + listNum)
    console.log("Sum " + sum)
}
displayNumbersDivisible(23)
displayNumbersDivisible(3)
displayNumbersDivisible(45)


function myBill()
{
    total = 0
    for (let i = 0; i < shoppingList.length; i++) {
        if (stock[shoppingList[i]] > 0)
        {
            total = total + prices[shoppingList[i]]
        }
        
      } 
      console.log("Total is " + total)
}
myBill()


function changeEnough(itemPrice, amountOfChange)
{
    change = (0.25 * amountOfChange[0]) + (0.10 * amountOfChange[1]) + (0.05 * amountOfChange[2]) + (0.01 * amountOfChange[3])

    if (change > itemPrice)
    {
        return true
    }
    else
    {
        return false
    }
}
console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2,100,0,0]))
console.log(changeEnough(0.75, [0,0,20,5]))


function hotelCost()
{
    while (true)
    {
        var userprompt = prompt("Number of nights?")
        if (isNaN(userprompt))
        {
            console.log("Please input only a number")
            
        }
        else
        {
            break
        }
        
    }
    return (140*userprompt)
}

function planeRideCost()
{
    while (true)
    {
        var userprompt = prompt("Destination?")
        if (isNaN(userprompt))
        {
            break
        }
        console.log("Please input only strings")
    }

    if (userprompt == "London")
    {
        return 183
    }

    else if (userprompt == "Paris")
    {
        return 220
    }
    else
    {
        return 300
    }
}

function rentalCarCost()
{
    while (true)
    {
        var userprompt = prompt("Number of days?")
        if (isNaN(userprompt))
        {
            console.log("Please input only a number")  
        }
        else
        {
            break
        }
        
    }
    if (userprompt <= 10)
    {
        return (40*userprompt)
    }
    else
    {
        return ((40*userprompt)*0.9)
    }
}

function totalVacationCost()
{
    hotel = hotelCost()
    plane = planeRideCost()
    car = rentalCarCost()

    console.log("Hotel cost:" + hotel + " Plane cost: " + plane + " Car cost: " + car)
}
totalVacationCost()