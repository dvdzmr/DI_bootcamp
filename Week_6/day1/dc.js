let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


const showGroceries = () => {
    groceries.fruits.forEach((fruit)=>{
        console.log(fruit);
    })
}

showGroceries()

const cloneGroceries = () => {
    let user = client;
    let cart = groceries;
    client = "Betty";
    groceries.totalPrice = "35$";
    groceries.other.paid = false;
    console.log(cart);
}

cloneGroceries()