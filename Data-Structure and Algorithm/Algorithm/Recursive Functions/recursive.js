//you can also solve this by iterating/looping


//Example 1
// function Recursive(num){
//     //base case
//   if(num <=0) return ;

//   //operation
//   console.log(num);
//   num-- ;

//   //function calling itself again with a diff paramenter
//   Recursive(num)
// }
// Recursive(6);

//example 2
// function sumRange(num){
//     //base case
//     if(num ===1) return 1 ;

//     //recursive call
//     return num + sumRange(num-1)
// }
// sumRange(5)

//ex 3
function power(base, exponent){
    //base case
    // if(num < 2) return ;
     if(exponent === 0) return 1
   // if(base === 1) return n ;
    
    //recursive call 
     return base * power(base, exponent-1);
    
}
//power(2,0) //1
//power(2,2) //4
power(2,4) //16