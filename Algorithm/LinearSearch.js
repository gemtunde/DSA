//linear search

// solve javascript methods

// function Search(arr,n){
//     if(arr.includes(n)===true){
//        return  arr.indexOf(n) 
//     }else{
//         return -1
//     }  
// }

//OR  solve using iteration

function Search(arr, n){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===n){
            return i
        }
    }
    return -1
}

console.log(Search([-5,2,10,4,6],6));
//console.log(Search([-5,2,10,4,6],6));
console.log(Search([-5,2,10,4,6],17));