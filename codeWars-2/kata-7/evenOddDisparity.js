
// Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

// For example:
// solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.  
// Let's now add two letters to the last example:

// solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters. 
// The input will be an array of lowercase letters and numbers only.






function solve(a){
    let b = []
    let even = [];
    let odd = [];
   // if (a.length === 0) return undefined
     for(i=0; i<a.length; i++){
        if(a[i] >=0){
            b.push(a[i])
        }
    }
    //return b
    for(j=0; j<b.length; j++){
        if(b[j] % 2 ===0){
            even.push(b[j])
        }
        else{
             odd.push(b[j])
        }
    }
    return  even.length-odd.length
}


//refactor
 // function solve(a){
 //    let even = a.filter(item => item % 2 === 0);
 //      let odd = a.filter(item => item % 2 !== 0);
 //     return even.length - odd.length
 // }

 
//solve([13, 6, 8, 15, 4, 8, 13]);
//solve([1,'a', 17, 8,'e', 3,'i', 12, 1]);
//solve([0, 15,'z',16,'m', 13, 14,'c', 9, 10, 13,'u', 4, 3])
solve([0,1,2,3])
//solve([0,1,2,3,"e",5,"h",9]);
//solve([0,1,2,3,'a','b'])