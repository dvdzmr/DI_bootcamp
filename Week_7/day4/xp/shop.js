const importedProducts = require("./products.js");

function productfinder(products) {
    products.forEach(element => {
        console.log(element);
    });
    
}

productfinder(importedProducts);