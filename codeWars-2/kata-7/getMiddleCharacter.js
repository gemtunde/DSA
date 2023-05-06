//split the string into array
//check if its even or odd
// if its odd, divide the length by 2 and round-up to the nearest whole number abd get 
//it from the array
//do same if its even and and also add one to get 2 values

// 1,2,3,4
// 1,2,3,4,5,6
// 1,2,3,4,5,6,7,8,9,10


function getMiddle(s)
{
  //Code goes here!
   //option 1
//    let arr = s.split("");
//     let mid = Math.floor(arr.length / 2);
//     if(arr.length % 2 ===1){
//         return arr[mid]
//     }
//     else if(arr.length % 2 ===0) {
//         return [arr[mid-1],arr[mid]].join("")
//     }

//option 2
  let arr = s.split("");
  let mid = Math.floor(arr.length/2);
  return arr.length % 2 !== 0 ? arr[mid] :  [arr[mid-1],arr[mid]].join("") ;
}

//getMiddle("test");
getMiddle("testing");
//getMiddle("m i d d l e");