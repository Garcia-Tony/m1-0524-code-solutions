"use strict";
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const newPrice = prices.map(price => ({
    price: price,
    salePrice: price / 2
}));
console.log(newPrice);
const other = prices.map((price) => ("$" + price.toFixed(2)));
console.log(other);
