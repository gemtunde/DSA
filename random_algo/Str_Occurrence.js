
//find numner of occurence in a string
function count(param, str){
    let count = 0
    arr = str.split('');
    for(i=0; i<str.length; i++){
       if(arr[i]===param){
            count+=1
        }
    }
    return count
}

console.log(count('p', 'pineapple')); //3
console.log(count('a', 'babatunde')); //2