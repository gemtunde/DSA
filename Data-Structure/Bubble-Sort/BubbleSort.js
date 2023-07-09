
// sorts arr by compares two element at a time
//buble sort is great whwn u have data rhat is almost sorted out

function BubbleSort(arr){

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr
}
BubbleSort([23,45, 21, 9, 2])