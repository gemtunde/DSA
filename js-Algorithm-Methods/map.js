//returns a new array after operation
//does not change the original array its acting upon

//EXAMPLE 1

//const numbers = [1,2,3,4,5,6,7,8,9,0];
// const numDouble = numbers.map(callBack);
// function callBack(number, index, arr){
//     return number * 2
// };
// console.log(numDouble)

//EXAMPLE 2

// const multiply = numbers.map((number, index,arr)=> number * index)
// console.log(multiply)


// EXAMPLE 3
 
const products = [
    {
        name : "laptop",
        price : 1000,
        count: 5
    },
    {
        name : "desktop",
        price : 3000,
        count: 2
    },
    {
        name : "tablet",
        price : 600,
        count: 9
    },
    {
        name : "phone",
        price : 8000,
        count: 15
    },
];

//const totalPrice = products.map(product => product.price * product.count);

//OR
const totalPrice = products.map(product => ({
    name : product.name,
    totalPrice : product.price * product.count
}))

console.log(totalPrice)

//OR
//total laptop price
// const laptopPrice = products.find(product => product.name === 'laptop' );
// console.log(laptopPrice)
//console.log(laptopPrice.price * laptopPrice.count)

