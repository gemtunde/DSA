//duplicate number in a array

function duplicate(arr){
    let arr1 = arr.sort();
    let arr3 = [];
   // return arr1
    for(let i=0;i<arr1.length;i++){
        if(arr[i]===arr[i+1]){
            arr3.push(arr[i]);
        }
    }
    let arr4 = new Set(arr3)
    return arr4;
}

console.log(duplicate([9,5,6,3,4,2,6,7,8,1,9,6,9]))