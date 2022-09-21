//fibonacci sequence

// GIven a number 'n', find the first 'n' elements of the fibonacci sequence

let fib = [0,1]
function fibonacci(n){
    for(let i=2; i<n; i++){
        fib[i]  = fib[i-1] + fib[i-2] ;
        //or
        //  let newFib  = fib[i-1] + fib[i-2] ;
        // fib.push(newFib)
    }
    return fib
}

console.log(fibonacci(2)) //[0,1];
//console.log(fibonacci(3)) //[0,1,1];
//console.log(fibonacci(7)) //[0,1,1,2,3,5,8];

//Big-O
//1 loop - O(n) - linear