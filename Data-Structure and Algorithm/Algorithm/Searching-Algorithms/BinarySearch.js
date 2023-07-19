// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and
//  returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than
//  linearSearch - you can read how to implement it here - 
//  https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
//  and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/


function binarySearch(arr, elem){
    // add whatever parameters you deem necessary - good luck!

    //my psuedo code here

    //start index == 0, 
    //end = arr.length -1
    //mid = (start + end) / 2
    //if elem=== mid return index
    //if elem < mid then move end to a value less than mid and recalculate mid
    //if elem > mid then move start to a value greater than mid and recalculate mid
    //return -1 if elem not in arr
    
    // [1,2,3,4,5,6,7,8,9]  8
    
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end )/ 2) ;
    
    while(arr[mid] !== elem){
        if(elem < arr[mid] ){
            end = mid - 1
        }
        else if(elem > arr[mid] ){
            start = mid + 1
        }
        mid = Math.floor((start + end )/ 2) ;
    }
    if( arr[mid] === elem) {
        return mid}
        else{
            return -1
        }
    
    
    
  }