
//factorial
//given an integer 'n', find the factorial of that integer

function Factorial(n){
    let multiply = 1;
    for(let i=1; i<=n; i++){
        multiply= multiply * i
    }
    return multiply
}

//console.log(Factorial(0)); // 1
//console.log(Factorial(1)); // 1
//console.log(Factorial(3)); // 3*2*1
//console.log(Factorial(5)); // 5*4*3*2*1
console.log(Factorial(8)); // 8*7*6*5*4*3*2*1

//The Big-O is 
// O(n) - linear