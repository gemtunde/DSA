// sorts arr by compares two element at a time
//selection sort is great when u have data that is almost sorted out
//places lower values in sorted position first... which is beginning of the array

function SelectionSort(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[j] < arr[i]){
            let temp = arr[j] ;
            arr[j] = arr[i] 
            arr[i] = temp
        }
    }
  }
  return arr
}

SelectionSort([32,24,10,19,17])












