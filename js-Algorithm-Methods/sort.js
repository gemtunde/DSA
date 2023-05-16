//Sorting is done in ascending order
//Sorting first converts the element to strings, then chacks for the utf-16 code in values

//EXAMPLE 1
// const names = ["Zinchenko",'Drogba', "Kante", "Rudiger", "Mendy", "Felix", "Thiago"]
// names.sort();
// console.log(names)


// EXAMPLE 2
// const numbers = [23, 1, 123, 9, 34, 87, 23, 12,19];
// numbers.sort((a,b)=> a-b);
// console.log(numbers)

// EXAMPLE 3
//sort an array of objects by price

const products = [
    {
        name: "Laptop",
        price: 200
    },
    {
        name: "Desktop",
        price: 11200
    },
    {
        name: "Tablet",
        price: 2900
    },
    {
        name: "Phone",
        price: 500
    },
];

products.sort((a,b)=> b.price - a.price);
console.log(products)

