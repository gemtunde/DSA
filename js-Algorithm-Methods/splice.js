
//removes or changes/update the element of an array
//returns the original array with the changed/updated item i.e it will change the array upon which its called upon.
//it needs a starting index and the number of items to remove

//REMOVE ITEM
const numbers = [1,2,3,4,5,6,7,8];
//here the deleted item will be in the variable deleted
//while the original array contains the updated content numbers
// const deleted = numbers.splice(4,2);
// console.log(deleted)


//CHANGE OR UPDATE ITEM
//here the removed item will be in the variable Updated
//while the original array contains the updated content numbers
// const updated = numbers.splice(4,2,10,11);
// console.log(numbers);


//NOT Removing item from the array. 
//adding item to the array at a particular index of 7
numbers.splice(7, 0, 20,21,22,23,24);
console.log(numbers);


