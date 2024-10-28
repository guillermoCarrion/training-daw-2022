const assert = require('node:assert').strict;

const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];

function avgByCategory(category){
    let productsFilteredByCategory = products.filter((product) => product.category === category )
                                            .map((product) => product.price)

    let sumTotal = productsFilteredByCategory.reduce((pv, cv) => pv + cv.price,0) 
    return sumTotal / productsFilteredByCategory.length
}


/*
assert.equal(avgByCategory('Electronics'), 55)
assert.equal(avgByCategory('Clothes'), 55)
*/