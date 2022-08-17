// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the 
// digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]


function digitize(n) {
  //code here
// return typeof(n)
 //return typeof(String(n));
 return n.toString().split("").reverse().map(x=> Number(x));
}

console.log(digitize(35231))//,[1,3,2,5,3]);
console.log(digitize(1234567890))//,[1,3,2,5,3]);






