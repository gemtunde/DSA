//forEach Methods
//most javascript methods always returns 3 parameters which includes index, value and array which is been acted upon

// const numbers = [1,2,3,4,5,6,7];
// let sum = 0 ;
// numbers.forEach(callBack);

//EXAMPLE 1
// function callBack(item,index,arr){
//        // console.log('a[' + index + ']' + '=' + item);
//        console.log(arr)
// }

//EXAMPLE 2
//ADD the total sum in an array

// function callBack(item){
//   sum += item ;
// }
// console.log(sum)



// EXAMPLE 3
//COUNT NUMBER OF ITEM IN AN ARRAY

const letters = ['a','f','b','c','c', 'd','a','b','e','e','f','a','g','h','d'];
const count = {

}
letters.forEach(callBack);
function callBack(letter){
    if(count[letter]){
        count[letter]++;
      }else{
   count[letter] = 1
      }
}

console.log(count);