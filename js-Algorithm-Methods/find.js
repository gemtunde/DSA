//find


//find method will search the array upon which its called, and will return the first element on which the callback function returns a truthy value
//if it finds none, it will return undefined

// EXAMPLE 1
// const names = ["Tunde", "Beauty", "Isaac", "Phil"];
// const res = names.find(callBack);
// function callBack(name){
//     return name === "Phil" ;
// }
// console.log(res);


//EXAMPLE 2
const persons = [
    {
        name : "Florin",
        age :34,
    },
    {
        name : "Dorin",
        age :45,
    },
    {
        name : "Florence",
        age :14,
    },
];
const res = persons.find(findDorin);
function findDorin(person){
   return person.name === "Dorin" ;
};
console.log(res);