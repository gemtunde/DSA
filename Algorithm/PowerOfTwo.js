//Power of two
// given an integer, determine if the number is a 
//power of 2 or not.

function isPowerOfTwo(n){
    if(n < 1) return false;
    for(let i=0; i<=n; i++){
        if(n === Math.pow(2,i)) return true
    }
    return false
}


//console.log(isPowerOfTwo(1)) //true
//console.log(isPowerOfTwo(2)) //true
console.log(isPowerOfTwo(5)) //false
//console.log(isPowerOfTwo(4)) //true

//Big-O is O(n) linear