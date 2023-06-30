//returns a shallow copy of a portion of an array
//returns a new array after operation
//does not change the original array its acting upon

const numbers = [1,2,3,4,5,6,7,8,9]
//const num2 = numbers.slice(2,6);

//from a  particular index upwards
//const num2 = numbers.slice(2);

//-negative values start counting from the end
//last -3, counts from last 3
const num2 = numbers.slice(-3)
console.log(num2)